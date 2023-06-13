from django.shortcuts import render
from .forms import createUser
from django.shortcuts import redirect
from django.views.generic import TemplateView
from django.middleware.csrf import get_token
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import authenticate,login, logout
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
@api_view(['POST'])
def createUserView(request):
    csrf_token = get_token(request)
    if request.method == 'POST':
        form = createUser({
    "username": request.POST["email"],
    "first_name": request.POST["firstName"],
    "last_name": request.POST["lastName"],
    "email": request.POST["email"],
    "password1": request.POST["password"],
    "password2": request.POST["password_confirmation"],
})
        if form.is_valid():
            form.save()
            return Response({'msg':'User Created Successfully'}, status=200)
        else:
            print (form.errors)
            return Response({'msg':'form is not valid'}, status=400)
    
@api_view(['POST'])
def loginUserView(request):
    csrf_token = get_token(request)
    if request.method == 'POST':
        user = authenticate(request, username=request.POST['email'], password=request.POST['password'])
        if user is not None:
            return Response({'msg':'User Authenticated Successfully'}, status=200)
        else:
            return Response({'msg':'User Authentication Failed'}, status=400)
        
@api_view(['POST'])
def user_logout(request):
    csrf_token = get_token(request)
    logout(request)
    return Response({'msg':'User Logged Out Successfully'}, status=200)

    


class Homepage(TemplateView):
    def get_template_names(self):
        if not self.request.user.is_authenticated:
            return ['index.html']
        return ['app.html']
    
        


            
    
