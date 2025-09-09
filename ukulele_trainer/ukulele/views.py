from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseNotFound
from django.template import loader
from django.contrib.auth import login
from .forms import CustomUserCreationForm
# Create your views here.

def home(request,):
    return render(request, 'ukulele/index.html')

def trainer(request,):
    return render(request, 'ukulele/trainer.html')

def register(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("home")
    else:
        form = CustomUserCreationForm()
    
    return render(request, "ukulele/register.html", {"form": form})