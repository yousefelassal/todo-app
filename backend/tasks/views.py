from django.shortcuts import render
from .models import Task
from rest_framework.views import APIView
from .serializer import taskSerializer
from rest_framework.response import Response
from rest_framework import status
from django.views.generic import TemplateView



# Create your views here.

class TasksApi(APIView):
    def get(self, request):
        result = Task.objects.all()
        serializer = taskSerializer(result, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = taskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer, status=status.HTTP_200_OK)
        else:
            return Response(serializer, status=status.HTTP_400_BAD_REQUEST)
    
class Homepage(TemplateView):
    template_name = 'index.html'
    



