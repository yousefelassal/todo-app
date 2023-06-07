from django.shortcuts import render
from .forms import createUser
from django.shortcuts import redirect
from django.views.generic import TemplateView
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
@csrf_exempt
def signupPage(request):
    csrf_token = get_token(request)
    if request.method == 'POST':
        form = createUser(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        else:
            errors = form.errors
            return render(request, 'signup.html', {'errors':errors})
        
    return render(request, 'signup.html')
        


            
    
