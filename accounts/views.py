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
        form = form = createUser({
    "username": request.POST["email"],
    "first_name": request.POST["firstName"],
    "last_name": request.POST["lastName"],

    "email": request.POST["email"],
    "password1": request.POST["password"],
    "password2": request.POST["password_confirmation"],
})
        if form.is_valid():
            form.save()
            return redirect('login')
        else:
            return render(request, 'signup.html', {'errors': form.errors})
        
    return render(request, 'signup.html')
        


            
    
