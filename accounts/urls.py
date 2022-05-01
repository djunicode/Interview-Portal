from django.urls import path
from . import views

urlpatterns = [
    path('interviewee_register/', views.IntervieweeRegisterAPI.as_view(), name = 'Interviewee Registration'),
    path('interviewee_update/<int:pk>', views.IntervieweeAPI.as_view()),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
    path('application/',views.ApplicationView.as_view(), name = 'application'),
    # path('links/', views.LinksAPI.as_view(), name = 'links'),
    path('tasks/', views.TaskAPI.as_view(), name = 'tasks'),
]