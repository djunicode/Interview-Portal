from lib2to3.pgen2 import token
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
    read_only = True
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

    def update(self, instance, validated_data):
        new_user=validated_data['user']
        instance.name = new_user['name']
        instance.email = new_user['email']
        instance.sapid = instance.sapid
        # instance.sapid = validated_data.get('sapid', instance.sapid)
        instance.grad_year = new_user['grad_year']
        instance.save()
        return instance


class ApplicationStackSerializer(serializers.ModelSerializer):
    # application = serializers.ReadOnlyField(source='application.interviewee')
    class Meta:
        model = ApplicationStack
        fields = ['name','repo_link']


class ApplicationSerializer(serializers.ModelSerializer):
    stack = ApplicationStackSerializer(many = True, required = False)
    class Meta:
        model = Application
        fields = ['stack','resume_link']

    def create(self,validated_data):
        stack_data = validated_data.pop('stack')
        user = self.context.get("request").user
        interviewee = Interviewee.objects.get(user = user)
        application = Application.objects.create(interviewee = interviewee, **validated_data)
        for stack in stack_data:
            ApplicationStack.objects.create(application = application, **stack)

        return validated_data

    def update(self,validated_data,instance):
        new_stack_data = validated_data.pop('stack')
        instance.resume_link = validated_data['resume_link']
        instance.save()

        ApplicationStack.objects.filter(application = instance).delete()
        for stack in new_stack_data:
            ApplicationStack.objects.create(application=instance, **stack)

        return validated_data


class TasksSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Task
        fields = '__all__'
