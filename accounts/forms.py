from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class createUser(UserCreationForm):
    class Meta:
        model = User
        fields = ['email','username','first_name','last_name', 'password1', 'password2']

    