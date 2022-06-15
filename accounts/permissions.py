from rest_framework import permissions

from accounts.models import Interviewee, Interviewer

class InterviewerPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        if Interviewer.objects.filter(user=request.user).exists():
            return True


class IntervieweePermission(permissions.BasePermission):

    def has_permission(self, request, view):
        if Interviewee.objects.filter(user=request.user).exists():
            return True
