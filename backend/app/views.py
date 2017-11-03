from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from addict import Dict
import json


# Create your views here.

def index(request):
    initial_props = {
        'a':1
    }
    if request.method == "POST":
        data = Dict(json.loads(request.body))
        return JsonResponse({'server':'beep boop beep'})
    return render(request, 'base.html', {'initial_props': json.dumps(initial_props)})
