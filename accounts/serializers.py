from lib2to3.pgen2 import token
from coreapi import Link
from rest_framework import serializers
from .models import *
import re
from rest_framework.exceptions import ValidationError

email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

class UserRegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)
    confirm_password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = User
        fields = ['name', 'sapid', 'password', 'confirm_password', 'grad_year','email']

    # To validate data received
    def validate(self, attrs):
        email = attrs.get('email', ' ')
        password = attrs.get('password')
        confirm_password = attrs.pop('confirm_password')
        if password != confirm_password:
            raise ValidationError("The password doesn't match!")
        if not email_pattern.match(email):
            raise serializers.ValidationError('Please enter a valid email!')
        return attrs

    # To create a new user
    def create(self, validated_data):
        validated_data['is_active'] = False
        
        user = User.objects.create(**validated_data)
        Token.objects.create(user=user) 
        return token


class InterviewerRegisterSerializer(serializers.ModelSerializer):
    user = UserRegisterSerializer()

    class Meta:
        model = Interviewer
        fields = ['user', 'role']

    # To create a new interviewer
    def create(self, validated_data):
        user_data = validated_data.pop('user')
        password = user_data.pop('password')
        user = User.objects.create(**user_data)
        if user.password is None:
            user.set_password(password)
        user.save()
        Token.objects.create(user=user)  
        interviewer = Interviewer.objects.create(user = user, **validated_data)
        return interviewer
           

class LoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    
    class Meta:
        model = User
        fields = ['sapid','password']


class IntervieweeRegisterSerializer(serializers.ModelSerializer):
    user = UserRegisterSerializer()

    class Meta:
        model = Interviewee
        fields = ['user']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        password = user_data.pop('password')
        user = User.objects.create(**user_data)
        user.set_password(password)
        user.save()
        Token.objects.create(user=user)  
        interviewee = Interviewee.objects.create(user = user, **validated_data)
        return interviewee


class ApplicationStackSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationStack
        fields = ['name','repo_link']


class ApplicationSerializer(serializers.ModelSerializer):
    stack = ApplicationStackSerializer(many = True)
    class Meta:
        model = Application
        fields = ['interviewee','stack','resume_link']

    def create(self,validated_data):
        stack_data = validated_data.pop('stack')
        # token = validated_data.pop('token')
        # user = Token.objects.get(key=token).user
        # interviewee = interviewee.objects.get(user = user)
        # application_stack = ApplicationStack.objects.create(interviewee = interviewee , **stack_data)

        # For A Single Stack Object
        print(stack_data)
        interviewee = validated_data['interviewee']
        application_stack = ApplicationStack.objects.create(interviewee = interviewee, **stack_data)
        application = Application.objects.create(stack = application_stack,**validated_data)

        
        return validated_data
