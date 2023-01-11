from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializers import *

class PostList(ListAPIView):		
	serializer_class = PostForumSerializer
	def get_queryset(self):
		return PostForum.objects.all()

