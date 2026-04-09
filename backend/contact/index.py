"""Принимает заявку с сайта и отправляет уведомление на почту."""

import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


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
        return {"statusCode": 422, "headers": CORS_HEADERS, "body": json.dumps({"error": "name and contact are required"})}

    to_email = os.environ.get("SMTP_TO_EMAIL", "")

    if to_email:
        _send_email(to_email, name, contact, message)

    return {
        "statusCode": 200,
        "headers": CORS_HEADERS,
        "body": json.dumps({"ok": True}),
    }


def _send_email(to_email: str, name: str, contact: str, message: str):
    smtp_host = os.environ.get("SMTP_HOST", "smtp.yandex.ru")
    smtp_port = int(os.environ.get("SMTP_PORT", "465"))
    smtp_user = os.environ.get("SMTP_USER", "")
    smtp_pass = os.environ.get("SMTP_PASS", "")

    subject = f"Новая заявка с сайта — {name}"
    html = f"""
    <div style="font-family: sans-serif; max-width: 520px; color: #2a2319;">
      <h2 style="color: #9c4a2a; margin-bottom: 16px;">Новая заявка с сайта</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color:#6b6254; font-size:13px; width:120px;">Имя</td>
            <td style="padding: 8px 0; font-weight:500;">{name}</td></tr>
        <tr><td style="padding: 8px 0; color:#6b6254; font-size:13px;">Контакт</td>
            <td style="padding: 8px 0;">{contact}</td></tr>
        {"<tr><td style='padding: 8px 0; color:#6b6254; font-size:13px; vertical-align:top;'>Запрос</td><td style='padding: 8px 0;'>" + message.replace('\n', '<br>') + "</td></tr>" if message else ""}
      </table>
    </div>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = smtp_user or "noreply@poehali.dev"
    msg["To"] = to_email
    msg.attach(MIMEText(html, "html", "utf-8"))

    if smtp_user and smtp_pass:
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as srv:
            srv.login(smtp_user, smtp_pass)
            srv.sendmail(msg["From"], [to_email], msg.as_string())