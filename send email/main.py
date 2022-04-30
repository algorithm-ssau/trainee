import smtplib
import os
from email.mime.multipart import MIMEMultipart
from platform import python_version

server = 'smtp.mail.ru'
user = 'info@test.org'
password = 'Password'

recipients = ['someuser1@mail.ru', 'someuser2@gmail.com']
sender = 'info@test.org'
subject = 'Тема сообщения 213213 777'
text = 'Текст сообщения sdf sdf sdf sdaf <b>sdaf sdf</b> fg hsdgh <h1>f sd</h1> dfhjhgs sd gsdfg sdf'
html = '<html><head></head><body><p>' + text + '</p></body></html>'

filepath = "fish.png"
basename = os.path.basename(filepath)
filesize = os.path.getsize(filepath)

msg = MIMEMultipart('alternative')
msg['Subject'] = subject
msg['From'] = 'Python script <' + sender + '>'
msg['To'] = ', '.join(recipients)
msg['Reply-To'] = sender
msg['Return-Path'] = sender
msg['X-Mailer'] = 'Python/' + (python_version())



mail = smtplib.SMTP_SSL(server)
mail.login(user, password)
mail.sendmail(sender, recipients, msg.as_string())
mail.quit()