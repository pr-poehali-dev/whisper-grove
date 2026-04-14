import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту itmkrsk@yandex.ru"""
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', 'Не указано')
    phone = body.get('phone', '')
    service = body.get('service', '')

    if not phone:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Телефон обязателен'}, ensure_ascii=False)
        }

    smtp_user = 'itmkrsk@yandex.ru'
    smtp_password = os.environ['SMTP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {phone}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    lines = [
        f'<h2>Новая заявка с сайта</h2>',
        f'<p><b>Имя:</b> {name}</p>',
        f'<p><b>Телефон:</b> {phone}</p>',
    ]
    if service:
        lines.append(f'<p><b>Услуга:</b> {service}</p>')

    html = ''.join(lines)
    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'ok': True})
    }