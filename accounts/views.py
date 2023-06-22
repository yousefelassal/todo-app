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
from rest_framework.views import APIView
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from .serializer import UserSerializer
from django.contrib.auth.models import User
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
            return Response({'msg':form.errors}, status=400)
    
@api_view(['POST'])
def loginUserView(request):
    csrf_token = get_token(request)
    if request.method == 'POST':
        user = authenticate(request, username=request.POST['email'], password=request.POST['password'])
        if user is not None:
            login(request, user)
            return Response({'msg':'User Authenticated Successfully'}, status=200)
        else:
            return Response({'msg':'User Authentication Failed'}, status=400)
        
@api_view(['POST'])
@login_required
def user_logout(request):
    csrf_token = get_token(request)
    print(csrf_token)
    logout(request)
    return Response({'msg':'User Logged Out Successfully'}, status=200)



class userInfo(APIView):
    @method_decorator(login_required)
    def get(self, request):
        data = User.objects.get(id=request.user.id)
        serializer = UserSerializer(data)
        return Response(serializer.data, status=200)

class Homepage(TemplateView):
    def get_template_names(self):
        if not self.request.user.is_authenticated:
            return ['index.html']
        else:
            return ['app.html']

def user_redirect(request):
    if request.user.is_authenticated:
        return redirect('/')
    else:
        return render(request, 'index.html')
    

    
        


            
    
