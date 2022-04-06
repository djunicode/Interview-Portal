from django.urls import path
from . import views

urlpatterns = [
    path('interviewee_register/', views.IntervieweeRegisterAPI.as_view(), name = 'Interviewee Registration'),
    path('interviewer_register/', views.InterviewerRegisterAPI.as_view(), name = 'Interviewer Registration'),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
    path('links/', views.LinksAPI.as_view(), name = 'links'),
]