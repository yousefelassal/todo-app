from django.shortcuts import render
from .models import Task
from rest_framework.views import APIView
from .serializer import taskSerializer
from rest_framework.response import Response
from rest_framework import status
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator



# Create your views here.

class TasksApi(APIView):
    @method_decorator(login_required)
    def get(self, request):
        result = Task.objects.filter(user=request.user)
        serializer = taskSerializer(result, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @method_decorator(login_required)
    def post(self, request):
        csrf_token = get_token(request)
        user = request.user
        data = request.data.copy()
        data['user'] = user.id
        serializer = taskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskDetailsApi(APIView):

    @method_decorator(login_required)
    def patch(self, request, id):


        csrf_token = get_token(request)

        try:
            user  = request.user
            data = request.data.copy()
            data['user'] = user.id
            obj = Task.objects.get(id=id, user=user)
        except Task.DoesNotExist:
            msg = {'msg':'Task Not Found'}
            return Response(msg, status= status.HTTP_404_NOT_FOUND)
        
        serializer = taskSerializer(obj, data=data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            

    
class Homepage(TemplateView):
    template_name = 'app.html'
    



