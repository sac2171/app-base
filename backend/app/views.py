from django.shortcuts import render
from django.http import HttpResponse
import json

# Create your views here.

def index(request):
    initial_props = {
        'a':1
    }
    return render(request, 'base.html', {'initial_props': json.dumps(initial_props)})
