"""Принимает заявку с сайта и отправляет письмо через Mailgun."""

import json
import os
import urllib.request
import urllib.parse


CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}


def handler(event: dict, context) -> dict:
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
    except Exception:
        return {"statusCode": 400, "headers": CORS_HEADERS, "body": json.dumps({"error": "invalid json"})}

    name    = (body.get("name") or "").strip()
    contact = (body.get("contact") or "").strip()
    message = (body.get("message") or "").strip()

    if not name or not contact:
        return {
            "statusCode": 422,
            "headers": CORS_HEADERS,
            "body": json.dumps({"error": "name and contact are required"}),
        }

    api_key    = os.environ.get("MAILGUN_API_KEY", "")
    domain     = os.environ.get("MAILGUN_DOMAIN", "")
    to_email   = os.environ.get("NOTIFY_EMAIL", "")

    if api_key and domain and to_email:
        _send_via_mailgun(api_key, domain, to_email, name, contact, message)

    return {
        "statusCode": 200,
        "headers": CORS_HEADERS,
        "body": json.dumps({"ok": True}),
    }


def _send_via_mailgun(api_key: str, domain: str, to_email: str,
                      name: str, contact: str, message: str):
    message_block = f"""
      <tr>
        <td style="padding:8px 0;color:#6b6254;font-size:13px;vertical-align:top;width:110px;">Запрос</td>
        <td style="padding:8px 0;">{message.replace(chr(10), '<br>')}</td>
      </tr>
    """ if message else ""

    html = f"""
    <div style="font-family:sans-serif;max-width:520px;color:#2a2319;background:#faf7f2;padding:32px;border-radius:12px;">
      <h2 style="color:#9c4a2a;margin:0 0 20px;">Новая заявка с сайта</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0;color:#6b6254;font-size:13px;width:110px;">Имя</td>
          <td style="padding:8px 0;font-weight:500;">{name}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b6254;font-size:13px;">Контакт</td>
          <td style="padding:8px 0;">{contact}</td>
        </tr>
        {message_block}
      </table>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #ddd7cc;font-size:12px;color:#b0a898;">
        Заявка получена с сайта Елены Ореховой
      </div>
    </div>
    """

    data = urllib.parse.urlencode({
        "from":    f"Сайт Елены Ореховой <mailgun@{domain}>",
        "to":      to_email,
        "subject": f"Новая заявка — {name}",
        "html":    html,
    }).encode("utf-8")

    url = f"https://api.mailgun.net/v3/{domain}/messages"
    req = urllib.request.Request(url, data=data, method="POST")

    import base64
    creds = base64.b64encode(f"api:{api_key}".encode()).decode()
    req.add_header("Authorization", f"Basic {creds}")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")

    with urllib.request.urlopen(req, timeout=10) as resp:
        resp.read()
