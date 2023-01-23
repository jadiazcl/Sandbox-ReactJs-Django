from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializers import *

class PostList(ListAPIView):		
	serializer_class = PostForumSerializer
	def get_queryset(self):
		return PostForum.objects.all()

class CommentList(ListAPIView):		
	serializer_class = CommentForumSerializer
	def get_queryset(self):
		if self.request.method == 'GET':
			id_post=self.request.GET.get("id_post",None)
			return CommentForum.objects.filter(id_post=id_post)
