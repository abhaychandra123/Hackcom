from django.contrib import admin
from django.urls import path,include
from mainapp import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('regis/', views.regis, name="registration")
]
