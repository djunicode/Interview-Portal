from tkinter import CASCADE
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from rest_framework.authtoken.models import Token

# Create your models here.

class UserManager(BaseUserManager):
    """
    Custom user model manager where sapid is the unique identifier
    for authentication instead of usernames.
    """
    # def create_user(self, sapid, password, **extra_fields):
    #     """
    #     Create and save a User with the given sapid and password instead of username.
    #     """
    #     if not sapid:
    #         raise ValueError('SAPID must be set')
    #     user = self.model(sapid, **extra_fields)
    #     if user.password is None:
    #         user.set_password(password)
    #     user.save()
    #     return user

    def create_user(self, sapid, password, **extra_fields):

        if not sapid:
            raise ValueError('Users must have an email address')

        user = self.model(
            sapid = sapid, **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        token = Token.objects.get_or_create(user = user)
        return user

    def create_superuser(self, sapid, password, **extra_fields):
        """
        Create and save a superuser with the given sapid and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(sapid, password, **extra_fields)

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