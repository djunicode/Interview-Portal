from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.authtoken.models import Token
from .serializers import *
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.contrib.auth import authenticate,login
from rest_framework.response import Response
from rest_framework import status,permissions

# Create your views here.

class InterviewerRegisterAPI(GenericAPIView):
	permission_classes = [permissions.AllowAny]
	serializer_class = InterviewerRegisterSerializer
	
	def post(self,request,*args,**kwargs):
		data = request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception = True)
		user = serializer.save()
		token = Token.objects.create(user=user)
		return Response({'Success':'Your account is successfully created'},status=status.HTTP_201_CREATED)


class LoginAPI(GenericAPIView):
	permission_classes = [permissions.AllowAny]
	serializer_class = LoginSerializer
	
	def post(self,request,*args,**kwargs ):
		sapid = request.data.get('sapid',None)
		password = request.data.get('password',None)
		user = authenticate(sapid = sapid, password = password)
		if user:
			login(request,user)
			token = Token.objects.get(user=user)
			return Response({'token' : token.key,'sapid' : user.sapid},status = status.HTTP_200_OK)
		return Response('Invalid Credentials',status = status.HTTP_404_NOT_FOUND)
