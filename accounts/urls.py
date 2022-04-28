from django.urls import path
from . import views

urlpatterns = [
    path('interviewee_register/', views.IntervieweeRegisterAPI.as_view(), name = 'Interviewee Registration'),
    path('interviewee_update/<int:pk>', views.IntervieweeUpdateAPI.as_view()),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
]