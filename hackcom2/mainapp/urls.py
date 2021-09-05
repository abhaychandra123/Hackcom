from os import name
from django.contrib import admin
from django.urls import path,include
from mainapp import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    # path('sus/', views.sus, name="suscribe"),
    path("blog/", views.blog, name='blog'),
    path("currency/",views.currency ,name="currency" ),
    path("todo/",views.todo ,name="todo" ),
    path("sici/",views.sici ,name="sici" ),
    path("gst/",views.gst ,name="gst" ),
    path("aboutus/",views.aboutus ,name="aboutus" ),


]
