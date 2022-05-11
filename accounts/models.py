
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

    USERNAME_FIELD = 'username'

class Interviewee(models.Model):

    user = models.ForeignKey(User, on_delete= models.CASCADE)
    
    def get_links(self):
        return self.links_set.values_list('link', flat=True)

class Stack(models.Model):

    stacks = (('Frontend', 'Frontend'),
              ('Django', 'Django'),
              ('Node', 'Node'),
              ('React Native', 'React Native'),
              ('Fullstack Node', 'Fullstack Node'), 
              ('Flutter', 'Flutter'),
              ('Fullstack Django', 'Fullstack Django'))

    name = models.CharField(max_length=20, choices=stacks, blank=True)
    resources = models.FileField(max_length=200, blank=True)

class Questionnaire(models.Model):

    question = models.TextField(max_length=500, blank=True)
    rating = models.IntegerField(blank=True)
    stack = models.ForeignKey(Stack, on_delete=models.CASCADE)

class Interview(models.Model):

    status = models.BooleanField(default=False)
    meet_link = models.SlugField(max_length=255, blank=True)
    time = models.TimeField()
    questionnaire = models.ForeignKey(Questionnaire, on_delete=models.CASCADE)

class Task(models.Model):  
    task_question = models.TextField(max_length=255)
    task_description = models.TextField(max_length=500, blank=True)
    task_resources = models.URLField(max_length=100, blank=True)
    stack = models.ForeignKey(Stack, on_delete=models.CASCADE)


class Application(models.Model):
    interviewee = models.ForeignKey(Interviewee, on_delete= models.CASCADE)
    resume_link = models.CharField(max_length=50, blank = True, default = "")
    status = models.BooleanField(default=False)

class ApplicationStack(models.Model):
    application = models.ForeignKey(Application, on_delete= models.CASCADE,related_name='stack')
    stacks = (('Frontend', 'Frontend'),
              ('Django', 'Django'),
              ('Node', 'Node'),
              ('React Native', 'React Native'),
              ('Fullstack Node', 'Fullstack Node'), 
              ('Flutter', 'Flutter'),
              ('Fullstack Django', 'Fullstack Django'))

    name = models.CharField(max_length=20, choices=stacks, blank=True)
    repo_link = models.CharField(max_length=50,blank=True)
