# URLS v aplikacii ukulele
from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
     path('', views.home, name='home'),
     path('trainer/', views.trainer, name='trainer'),
     path('login/', auth_views.LoginView.as_view(template_name='ukulele/login.html'), name='login'),
     path('logout/', auth_views.LogoutView.as_view(template_name='ukulele/logged_out.html'), name='logout'),
     path('register/', views.register, name='register'),
     path('api/check_note/', views.check_note, name='check_note'),
     path('api/get_question/', views.get_question, name='get_question'),
     path('profile/', views.edit_profile, name='edit_profile'),
]




