from django.http.response import HttpResponse
from django.shortcuts import render,HttpResponse
# Create your views here.

def home(request):
    return HttpResponse("This is test page")

def regis(request):
    return render(request, "")

