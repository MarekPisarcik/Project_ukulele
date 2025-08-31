from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from django.template import loader
# Create your views here.

def home(request,):
    return render(request, 'ukulele/index.html')