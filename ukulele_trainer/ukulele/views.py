from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseNotFound
from django.template import loader
from django.contrib.auth import login
from .forms import CustomUserCreationForm
from django.contrib.auth.decorators import login_required
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import random
from .ukulele_data import FRETBOARD_NOTES

# Create your views here.

def home(request,):
    return render(request, 'ukulele/index.html')

@login_required
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

@csrf_exempt
def get_question(request):
    if request.method == 'GET':
        
        
        request.session.pop('correct_answer', None) 
        
        question = random.choice(FRETBOARD_NOTES)
        request.session['correct_answer'] = question
        request.session.save() 
        return JsonResponse(question)
    return JsonResponse({'error': 'Neplatná požiadavka'}, status=405)

@csrf_exempt
def check_note(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            
            user_note = data.get('name')
            user_string = data.get('string')

            correct_answer_data = request.session.get('correct_answer')
            if not correct_answer_data:
                
                return JsonResponse({'error': 'Chýba správna odpoveď v relácii. Spustite novú otázku.'}, status=400)
            
            
            CORRECT_NOTE = correct_answer_data.get('note')
            CORRECT_STRING = correct_answer_data.get('string')
            
            
            
            is_correct = (user_note == CORRECT_NOTE and user_string == CORRECT_STRING)
            message = "SPRÁVNA ODPOVEĎ!" if is_correct else "NESPRÁVNA ODPOVEĎ!"

            return JsonResponse({
                'is_correct': is_correct,
                'message': message,
                'correct_note': CORRECT_NOTE,
                'correct_string': CORRECT_STRING,
                'correct_answer_info': f"Správna odpoveď je {CORRECT_NOTE} na strune {CORRECT_STRING}"
            })
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Neplatný JSON. Skontrolujte Content-Type.'}, status=400)
        
    return JsonResponse({'error': 'Neplatná požiadavka. Používajte POST.'}, status=405)