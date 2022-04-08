import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from decouple import config
import random
from django.core.cache import cache
import http.client


username=config('username')
password=config('password')

def send_mail(user,html=None,text='Email_body',subject='Confirmation',from_email='',to_emails=[]):


    otp_gen = random.randint(1000,9999)
    # user.email_otp  = otp_gen
    # user.save()

    assert isinstance(to_emails,list)
    msg=MIMEMultipart('alternative')
    msg['From']=from_email
    msg['To']=", ".join(to_emails)
    msg['Subject']=subject
    txt_part=MIMEText(text,'plain')
    msg.attach(txt_part)

    html_part = MIMEText(f"<p>Here is you email verification OTP - {otp_gen}</p><h1>{html}</h1>", 'html')
    msg.attach(html_part)
    msg_str=msg.as_string()

    server=smtplib.SMTP(host='smtp.gmail.com',port=587)
    server.ehlo()
    server.starttls()
    server.login(username,password)
    server.sendmail(from_email,to_emails,msg_str)
    server.quit()
