#!/usr/bin/env python3
"""Send a multipart email (text + HTML) using SMTP credentials from env vars.

Environment variables:
  SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL

Usage:
  python3 scripts/send_email.py --to recipient@example.com --subject "Subject" --html email/launch.html --text email/launch.txt
"""
import os
import argparse
import smtplib
import ssl
from email.message import EmailMessage


def load_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def send_email(smtp_host, smtp_port, smtp_user, smtp_pass, from_email, to_email, subject, text_body, html_body):
    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email
    msg.set_content(text_body)
    if html_body:
        msg.add_alternative(html_body, subtype='html')

    port = int(smtp_port) if smtp_port else 0
    if port == 465:
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(smtp_host, port, context=context) as server:
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)
    else:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--to', required=True)
    parser.add_argument('--subject', required=True)
    parser.add_argument('--html')
    parser.add_argument('--text')
    args = parser.parse_args()

    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = os.environ.get('SMTP_PORT', '587')
    smtp_user = os.environ.get('SMTP_USER')
    smtp_pass = os.environ.get('SMTP_PASS')
    from_email = os.environ.get('FROM_EMAIL')

    if not all([smtp_host, smtp_user, smtp_pass, from_email]):
        print('Missing SMTP configuration. Set SMTP_HOST, SMTP_USER, SMTP_PASS, FROM_EMAIL.')
        return

    text_body = load_file(args.text) if args.text else ''
    html_body = load_file(args.html) if args.html else None

    send_email(smtp_host, smtp_port, smtp_user, smtp_pass, from_email, args.to, args.subject, text_body, html_body)
    print('Email sent to', args.to)


if __name__ == '__main__':
    main()
