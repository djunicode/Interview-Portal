from rest_framework import serializers
from .models import *
import re
from rest_framework.exceptions import ValidationError

email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

class InterviewerRegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)
    confirm_password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = Interviewer
        fields = ['name', 'sapid',  'password', 'confirm_password', 'grad_year', 'role','email']

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
        return Interviewer.objects.create_user(**validated_data)    

class LoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    
    class Meta:
        model = User
        fields = ['sapid','password']