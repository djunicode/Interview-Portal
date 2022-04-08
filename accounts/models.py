from tkinter import CASCADE
from django.contrib.auth.models import AbstractUser

from django.db import models
from rest_framework.authtoken.models import Token

from accounts.manager import UserManager

# Create your models here.


class User(AbstractUser):
    username=None

    # extra fields
    sapid = models.CharField(max_length = 11, primary_key=True, unique=True)
    email = models.EmailField(("Email Address"), blank=True)
    name = models.CharField(max_length = 30, blank=True)
    grad_year = models.IntegerField(blank=True, null =True)

    USERNAME_FIELD = 'sapid'
    REQUIRED_FIELDS=[]

    objects = UserManager()

    def __str__(self):
        return self.name

    @property
    def token(self):
        token = Token.objects.get(user=User.objects.get(self.id))
        return token

class Interviewer(models.Model):

    user = models.ForeignKey(User, on_delete= models.CASCADE)
    role = models.CharField(max_length=3, choices=[('BE','BE'), ('TE','TE')], blank=True)

class Interviewee(models.Model):

    user = models.ForeignKey(User, on_delete= models.CASCADE)
    
    def get_links(self):
        return self.links_set.values_list('link', flat=True)

class Links(models.Model):
    interviewee = models.ForeignKey(Interviewee, on_delete= models.CASCADE)
    link = models.CharField(max_length=200, blank=True)