# import email
# from django.shortcuts import render
from rest_framework.generics import GenericAPIView, RetrieveUpdateAPIView
from rest_framework.authtoken.models import Token

from accounts.utils import send_mail
from .serializers import *
# from django.contrib.sites.shortcuts import get_current_site
# from django.urls import reverse
from django.contrib.auth import authenticate,login
from rest_framework.response import Response
from rest_framework import status,permissions,generics
# Create your views here.

class IntervieweeRegisterAPI(GenericAPIView):
	permission_classes = [permissions.AllowAny]
	serializer_class = IntervieweeRegisterSerializer
	
	def post(self,request,*args,**kwargs):
		data = request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception = True)
		interviewee = serializer.save()
		user = User.objects.get(interviewee = interviewee)
		send_mail(user=user,html='',
                text='Account Created Successfully',
                subject='User Verification',
                from_email='djangorest3@gmail.com',
                to_emails=[user.email])
		return Response({'Success':'Your account is successfully created'},status=status.HTTP_201_CREATED)

class IntervieweeUpdateAPI(RetrieveUpdateAPIView):
	serializer_class = IntervieweeRegisterSerializer
	lookup_field = 'pk'

	def get_queryset(self):
		user = self.request.data
		print(user)
		queryset = User.objects.all()
		print(queryset.all())
		return queryset

	def perform_update(self, request, *args, **kwargs):
		data = request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return Response({'Success':'User updated'})



class LoginAPI(GenericAPIView):
	permission_classes = [permissions.AllowAny]
	serializer_class = LoginSerializer
	
	def post(self,request,*args,**kwargs ):
		sapid = request.data.get('sapid',None)
		password = request.data.get('password',None)
		user = authenticate(username = sapid, password = password)
		if user:
			login(request,user)
			token = Token.objects.get(user=user)
			return Response({'token' : token.key,'sapid' : user.sapid},status = status.HTTP_200_OK)
			
		return Response('Invalid Credentials',status = status.HTTP_404_NOT_FOUND)


# class LinksAPI(GenericAPIView):
# 	permission_classes = [permissions.IsAuthenticated]
# 	serializer_class = LinksSerializer

# 	def post(self,request,*args,**kwargs ):
# 		user = request.user
# 		interviewee = Interviewee.objects.get(user = user)
# 		data = request.data
# 		serializer = self.serializer_class(data=data)
# 		serializer.is_valid(raise_exception = True)
# 		serializer.save(interviewee = interviewee)
# 		return Response(serializer.validated_data, status= status.HTTP_200_OK)

# 	def get(self,request,*args,**kwargs):
# 		data = self.queryset
# 		serializer = LinksSerializer(data, many = True)
# 		return Response(serializer.data, status= status.HTTP_200_OK)

# 	def get_queryset(self):
# 		user = self.request.user
# 		interviewee = Interviewee.objects.get(user = user)
# 		queryset = Links.objects.filter(interviewee = interviewee)
# 		return queryset
