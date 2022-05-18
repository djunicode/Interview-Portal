
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

class Stack(models.Model):

    stacks = (('Frontend', 'Frontend'),
              ('Django', 'Django'),
              ('Node', 'Node'),
              ('React Native', 'React Native'),
              ('Fullstack Node', 'Fullstack Node'), 
              ('Flutter', 'Flutter'),
              ('Fullstack Django', 'Fullstack Django'))

    name = models.CharField(max_length=20, choices=stacks, blank=True)
    resources = models.FileField(upload_to="resources", max_length=200, blank=True)

    def __str__(self):
        return self.name



class Interviewer(models.Model):

    user = models.ForeignKey(User, on_delete= models.CASCADE)
    role = models.CharField(max_length=3, choices=[('BE','BE'), ('TE','TE')], blank=True)
    stack = models.ForeignKey(Stack,on_delete= models.SET_NULL, null=True)

    USERNAME_FIELD = 'username'

    def __str__(self):
        return self.user.name

class Interviewee(models.Model):

    user = models.ForeignKey(User, on_delete= models.CASCADE)

    def __str__(self):
        return self.user.name


class Task(models.Model):  
    task_question       = models.TextField(max_length=255)
    task_description    = models.TextField(max_length=500, blank=True)
    task_resources      = models.FileField(upload_to="tasks",blank=True)
    stack               = models.ForeignKey(Stack, on_delete=models.CASCADE)


class Application(models.Model):
    interviewee = models.ForeignKey(Interviewee, on_delete= models.CASCADE)
    resume_link = models.CharField(max_length=50, blank = True, default = "")
    status = models.BooleanField(default=False)

    def __str__(self):
        return str(self.interviewee)+"'s application"

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

    def __str__(self):
        return self.application,self.name

class Panel(models.Model):
    name = models.CharField(max_length= 100)
    interviewees = models.ManyToManyField(Interviewee)
    interviewers = models.ManyToManyField(Interviewer)


    def __str__(self):
        return self.name

class Interview(models.Model):
    panel       = models.ForeignKey(Panel, on_delete=models.CASCADE)
    status      = models.BooleanField(default=False)
    meet_link   = models.URLField(max_length=255, blank=True)
    date_time   = models.DateTimeField()

class Questionnaire(models.Model):

    question    = models.TextField(max_length=500, blank=True)
    rating      = models.IntegerField(blank=True)
    stack       = models.OneToOneField(ApplicationStack, on_delete=models.CASCADE)