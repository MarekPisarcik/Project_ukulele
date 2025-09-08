# URLS v aplikacii ukulele
from django.urls import path
from . import views

urlpatterns = [
     path('', views.home, name='home'),
     path('trainer/', views.trainer, name='trainer'),  
]




