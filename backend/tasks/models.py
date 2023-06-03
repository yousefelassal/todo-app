from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500, default='None')
    project = models.CharField(max_length=200 ,default='None')
    date = models.DateField(default='14/06/2021')
    # image = models.ImageField(upload_to='images/', blank=True, null=True)
    completed = models.BooleanField(default=False)
    starred = models.BooleanField(default=False)



