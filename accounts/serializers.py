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
        return User.objects.create(**validated_data) 


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


class LinksSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Links
        fields = ['id','link']
        read_only_fields = ['interviewee']


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


class StackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stack
        fields = ['name','link']


class ApplicationSerializer(serializers.ModelSerializer):
    stack = StackSerializer()
    class Meta:
        model = Application
        fields = ['resume_link','name','link',]