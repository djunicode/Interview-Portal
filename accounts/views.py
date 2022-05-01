import email
from email.mime import application
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.generics import GenericAPIView
# import email
# from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.generics import GenericAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView

from accounts.utils import send_mail
from .serializers import *
# from django.contrib.sites.shortcuts import get_current_site
# from django.urls import reverse
from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework import status, permissions
# Create your views here.


class IntervieweeRegisterAPI(GenericAPIView):
	permission_classes = [permissions.AllowAny]
	serializer_class = IntervieweeRegisterSerializer

	def post(self, request, *args, **kwargs):
		data = request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception=True)
		interviewee = serializer.save()
		user = User.objects.get(interviewee=interviewee)
		send_mail(user=user, html='',
                text='Account Created Successfully',
                subject='User Verification',
                from_email='djangorest3@gmail.com',
                to_emails=[user.email])
		return Response({'Success': 'Your account is successfully created'}, status=status.HTTP_201_CREATED)


class IntervieweeAPI(APIView):
	serializer_class = IntervieweeRegisterSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, pk):
		interviewee = Interviewee.objects.get(id=pk)
		# print(interviewee)
		serializer = self.serializer_class(interviewee)
		print(serializer)
		return JsonResponse(serializer.data, safe=False)

	def put(self, request, pk):
		serializer = self.serializer_class(data=request.data)
		serializer.is_valid(raise_exception=True)
		serializer.update(request.user, request.data)
		return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

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


class ApplicationView(GenericAPIView):
	permission_classes = [permissions.IsAuthenticated]
	serializer_class = ApplicationSerializer

	def get(self,request):
		user = request.user
		interviewee = Interviewee.objects.get(user = request.user)
		application = Application.objects.get(interviewee = interviewee)
		serializer = ApplicationSerializer(application)
		return Response(serializer.data)

	def post(self,request,*args,**kwargs):
		data = request.data
		user = request.user
		serializer = self.serializer_class(data=data, context={'request': request})
		serializer.is_valid(raise_exception = True)
		serializer.create(request.data)
		return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

	def put(self,request,*args,**kwargs):
		interviewee = Interviewee.objects.get(user = request.user)
		application = Application.objects.get(interviewee = interviewee)
		serializer = self.serializer_class(data=request.data)
		serializer.is_valid(raise_exception=True)
		serializer.update(request.data,application)

		return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
		
class TaskAPI(ListAPIView):
	permission_classes = [permissions.IsAuthenticated]
	serializer_class = TasksSerializer
	model = serializer_class.Meta.model

	def get_queryset(self):
		queryset = Task.objects.all()
		return queryset
