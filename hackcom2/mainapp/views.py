from django.http import request
from django.http.response import HttpResponse
from django.shortcuts import render,HttpResponse
import csv
import smtplib
# Create your views here.
email=""
def home(request):
    return HttpResponse("This is test page")

def sus(request):
    return render(request, "home.html")

def blog(request):
    if request.method=='POST':
                dict2=request.POST
                with open('susinfo.csv','a') as csvfile:
                        wrt2=csv.writer(csvfile)

                        for key,value in dict2.items():
                                email=value
                                if(key=='email'):    
                                    server= smtplib.SMTP_SSL("smtp.gmail.com",465)
                                    server.login("dpsazaadnagarcf22@gmail.com", "1q2w3e4r5t_")
                                    server.sendmail("dpsazaadnagarcf22@gmail.com",value, "THANK YOU FOR SUSCRIBING INTO OUR BLOGPOST!!! \n Check for New blogs at our website!!")

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

