from django.urls import path
from . import views

urlpatterns = [
    path('interviewer_register/', views.InterviewerRegisterAPI.as_view(), name = 'Interviewer Registration'),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
]