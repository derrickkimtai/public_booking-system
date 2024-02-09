from django.shortcuts import render
from django.http import HttpResponse

def members(request):
    return HttpResponse('Members page')
# Create your views here.
