
from email.mime import application
from django.http import HttpResponse
from rest_framework.generics import GenericAPIView

from django.http.response import JsonResponse
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView

from accounts.utils import send_mail
from .serializers import *

from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework import status, permissions


class IntervieweeRegisterAPI(GenericAPIView):
	permission_classes = [permissions.AllowAny]
	serializer_class = IntervieweeRegisterSerializer

	def post(self, request, *args, **kwargs):
		data = request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception=True)
		interviewee = serializer.save()
		user = User.objects.get(interviewee=interviewee)
		try:
			send_mail(user=user, html='',
					text='Account Created Successfully',
					subject='User Verification',
					from_email='testsender1507@gmail.com',
					to_emails=[user.email])
		except:
			pass
		return Response({'Success': 'Your account is successfully created'}, status=status.HTTP_201_CREATED)


class IntervieweeAPI(APIView):
	serializer_class = IntervieweeRegisterSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request):
		try:
			interviewee = Interviewee.objects.get(user = request.user)
			print(interviewee)
		except:
			JsonResponse("interviewee not found", status= status.HTTP_404_NOT_FOUND)
		serializer = self.serializer_class(interviewee)
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
		try:
			interviewee = Interviewee.objects.get(user = request.user)
			try:
				application = Application.objects.get(interviewee = interviewee)
				serializer = ApplicationSerializer(application)
				return Response(serializer.data)
			except:
				return Response({"message":"Application not found"}, status= status.HTTP_404_NOT_FOUND)
		except:
			return Response({"message":"interviewee not found"}, status= status.HTTP_404_NOT_FOUND)


	def post(self,request,*args,**kwargs):
		serializer = self.serializer_class(data=request.data, context={'request': request})
		serializer.is_valid(raise_exception = True)
		response = serializer.create(request.data)
		return response

	def put(self,request,*args,**kwargs):
		interviewee = Interviewee.objects.get(user = request.user)
		application = Application.objects.get(interviewee = interviewee)
		serializer = self.serializer_class(data=request.data)
		serializer.is_valid(raise_exception=True)
		response = serializer.update(request.data,application)

		return response
		
class TaskAPI(ListAPIView):
	permission_classes = [permissions.IsAuthenticated]
	serializer_class = TasksSerializer
	model = serializer_class.Meta.model

	def get_queryset(self):
		queryset = Task.objects.all()
		return queryset

class ResourcesAPI(ListAPIView):
	permission_classes = [permissions.IsAuthenticated]
	serializer_class = StackSerializer

	def get_queryset(self):
		queryset = Stack.objects.all()
		return queryset


class PanelAPI(GenericAPIView):
	permission_classes = [permissions.IsAuthenticated]
	serializer_class = PanelSerializer

	def get(self,request):
		interviewer = Interviewer.objects.get(user = request.user)
		panels = Panel.objects.filter(interviewers = interviewer)
		if not panels :
			return Response({"message":"No Panel has been assigned to you"}, status= status.HTTP_404_NOT_FOUND)
		serializer = PanelSerializer(panels, many = True)
		return Response(serializer.data)

class CandidateAPI(GenericAPIView):
	permission_classes = [permissions.IsAuthenticated]
	serializer_class = ApplicationSerializer

	def get(self,request,sapid):
		
		interviewee = Interviewee.objects.get(user = sapid)
		application = Application.objects.get(interviewee = interviewee)
		serializer = ApplicationSerializer(application)
		return Response(serializer.data)


class Scheduler(GenericAPIView):

	# permission_classes = [permissions.IsAuthenticated]

	def get(self,request):
		dict_of_stacks = {"django_list": ApplicationStack.objects.filter(name = 'Django'),
		"frontend_list" : ApplicationStack.objects.filter(name = 'Frontend'),
		"node_list" : ApplicationStack.objects.filter(name = 'Node'),
		"native_list" : ApplicationStack.objects.filter(name = 'React Native'),
		"flutter_list" : ApplicationStack.objects.filter(name = 'Flutter'),
		"fdjango_list" : ApplicationStack.objects.filter(name = 'Fullstack Django'),
		"fnode_list" : ApplicationStack.objects.filter(name = 'Fullstack Node'),
		}

		panels = Panel.objects.all()
		no_of_panels = panels.count()
		count = [0]*no_of_panels
		print(count)
		panel_dict = {}
		for panel in panels:
			interviewers = panel.interviewers.all()
			stack_list =[]
			for interviewer in interviewers:
				#Assuming every interviewer has only one stack
				stack = interviewer.stack
				stack_list.append(stack.name)

			panel_dict[panel] = stack_list

		# stack_list.clear()

		print(panel_dict)
				
			
		# for stack in dict_of_stacks:
		# 	print(stack)
		# 	for i in dict_of_stacks[stack]:
		# 		application = i.application
		# 		interviewee = application.interviewee
		# 		print(interviewee)
		# 		if interviewers.filter(stack = "Django"):
		# 			if 
		interviewee_dict = {}
		applications = Application.objects.all()
		interviewees = []
		for application in applications:
			interviewee_stacks = []
			interviewee = application.interviewee
			interviewees.append(interviewee)
			application_stacks = ApplicationStack.objects.filter(application = application)
			for app_stack in application_stacks:
				interviewee_stacks.append(app_stack.name)
				interviewee_dict[interviewee] = interviewee_stacks
		
		print(interviewee_dict)
		
		print(interviewees)

# Allot where all stacks are present in a single panel
		for interviewee in interviewee_dict:
			# list_of_stacks = []
			list_of_app_stacks = interviewee_dict[interviewee]
			index = 0
			for panel in panel_dict:
				index +=1
				list_of_pan_stacks = panel_dict[panel]
				result =  all(elem in list_of_pan_stacks  for elem in list_of_app_stacks)
				if result:
					panel.interviewees.add(interviewee)
					# interviewee_dict.pop(interviewee)
					interviewees.remove(interviewee)
					count[index]+=1

		print(interviewees)
		interviewees2 = interviewees

# Allocation for the rest where multiple interviews are required(DIvide this into, single allocation and at least 2 are common)
		for interviewee in interviewees:
			list_of_app_stacks = interviewee_dict[interviewee]
			for panel in panel_dict:
				list_of_pan_stacks = panel_dict[panel]
				# result =  any(elem in list_of_pan_stacks  for elem in list_of_app_stacks)
				# common = [i for i in list_of_pan_stacks if i in list_of_app_stacks]
				# if result:
				# 	panel.interviewees.add(interviewee)
				# 	list_of_app_stacks.remove(common)
				# 	if not list_of_app_stacks:
				# 		interviewees2.remove(interviewee)

				for app_stack in list_of_pan_stacks:
					for pan_stack in list_of_app_stacks:
						if pan_stack == app_stack:
							panel.interviewees.add(interviewee)
							common = app_stack
					try:
						list_of_app_stacks.remove(common)
						if not list_of_app_stacks:
							interviewees2.remove(interviewee)
					except:
						pass

		print(interviewees2)

		return HttpResponse("None")