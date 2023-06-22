"""todo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import createUserView, Homepage, loginUserView, user_logout, userInfo, user_redirect
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import RedirectView

urlpatterns = [
    path('', Homepage.as_view(), name='home'),

    path("signup",user_redirect, name='signup'),
    path("signup/",RedirectView.as_view(url='/signup'), name='signup-redirect'),

    path("login",user_redirect, name='login'),
    path("login/",RedirectView.as_view(url='/login'), name='login-redirect'),

    path('logout/',user_logout, name='logout'),

    path('createuser/', createUserView, name='createuser'),
    path('authuser/', loginUserView, name='authuser'),
    path('user-Info/', userInfo.as_view(), name='user-info'),

    

    

]+ static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])