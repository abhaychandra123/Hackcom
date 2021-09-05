from django.http import request
from django.http.response import HttpResponse
from django.shortcuts import render,HttpResponse
import csv
import smtplib
from email.message import EmailMessage
# Create your views here.
msg=EmailMessage()
msg.set_content('Hello there!!! \nTHANK YOU FOR SUSCRIBING INTO OUR BLOGPOST!!! \n Check for New blogs at our website!!')
msg['Subject']="Subscription for our BlogPost Services"
msg['From']="dpsazaadnagarcf22@gmail.com"
email=""
username=""
def home(request):
    return render(request, "home.html")

def blog(request):
    if request.method=='POST':
                dict2=request.POST
                with open('susinfo.csv','a') as csvfile:
                        wrt2=csv.writer(csvfile)

                        for key,value in dict2.items():
                                email=value
                                username=key
                                if(key=='email'): 
                                    msg['To']=value   
                                    server= smtplib.SMTP_SSL("smtp.gmail.com",465)
                                    server.login("dpsazaadnagarcf22@gmail.com", "1q2w3e4r5t_")
                                    server.send_message(msg)

                                wrt2.writerow([key,value])

        
    return render(request, 'blogs.html')

def read_info():
    with open('susinfo.csv', 'r') as file:
        reader = csv.reader(file)
        a=[]
        for row in reader:
            a.append(row)
        useremail=row[-1]
        return useremail

"""if email!="":
        
    # print(read_info())
    receiver_email=read_info()
    print(email)
    server= smtplib.SMTP_SSL("smtp.gmail.com",465)
    server.login("dpsazaadnagarcf22@gmail.com", "1q2w3e4r5t_")
    server.sendmail("dpsazaadnagarcf22@gmail.com",read_info(), " new  lol THANK YOU FOR SUSCRIBING INTO OUR BLOGPOST!!! \n Check for New blogs at our website!!")"""

def currency(request):
    return render(request,'currency.html')

def todo(request):
    return render(request,'todo.html')
def sici(request):
    return render(request, 'sici.html')
def gst(request):
    return render(request, 'gst.html')

def aboutus(request):
    return render(request, 'aboutus.html' )