import smtplib
import pymongo
import pandas as pd
from email.message import EmailMessage
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

URL = 'mongodb+srv://admin:admin@cluster0.d4p8x.mongodb.net/?retryWrites=true&w=majority'
client = pymongo.MongoClient(URL)

dbname = 'myFirstDatabase'
db = client[dbname]

mycollection = db['users']
records = mycollection.find()
list_cursor = list(records)

df = pd.DataFrame(list_cursor)
emails = df['email']

msg = MIMEMultipart()
 

password = "ihfzcshpwuitojnt"
msg['From'] = "f2323sdafsdf@gmail.com"
msg['Subject'] = "Зайдите на https://trainee-application.netlify.app/ для того, чтобы посмотреть на нововедения!"
server = smtplib.SMTP('smtp.gmail.com: 587')

server.starttls()

server.login(msg['From'], password)

for email in emails:
    msg["To"] = email
    server.sendmail(msg['From'], msg['To'], msg.as_string())

server.quit()

print( "Успешно отправлено письмо на адресс %s:" % (msg['To']))
