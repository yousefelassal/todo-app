from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500, default='None')
    project = models.CharField(max_length=200 ,default='None')
    date = models.DateField()
    # image = models.ImageField(upload_to='images/', blank=True, null=True)
    completed = models.BooleanField(default=False)
    starred = models.BooleanField(default=False)



