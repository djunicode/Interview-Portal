from django.urls import path
from . import views

urlpatterns = [
    path('interviewee_register/', views.IntervieweeRegisterAPI.as_view(), name = 'Interviewee Registration'),
    path('interviewee_update/', views.IntervieweeAPI.as_view()),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
    path('application/',views.ApplicationView.as_view(), name = 'application'),
    path('resources/', views.ResourcesAPI.as_view(), name = 'resources'),
    path('tasks/', views.TaskAPI.as_view(), name='tasks'),

#Interviewer APIs
    path('panel_details/', views.PanelAPI.as_view(), name='panel'),
    path('view_candidate/<str:sapid>', views.CandidateAPI.as_view(), name='candidate_view'),
    path('scorecard_get/<str:sapid>/<str:stack>', views.ScorecardGetAPI.as_view(), name='scorecard_get'),
    path('scorecard/', views.ScorecardAPI.as_view(), name='scorecard'),
    path('scheduling/',views.Scheduler.as_view(), name = 'Scheduler'),
]