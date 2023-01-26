from django.shortcuts import render,get_object_or_404
from rest_framework.generics import ListAPIView
from .serializers import *
from .pagination import SmallPagination,LargePagination

class PostList(ListAPIView):		
	serializer_class = PostForumSerializer
	def get(self,request):
		posts = PostForum.objects.all()
		paginator = SmallPagination()
		results = paginator.paginate_queryset(posts,request)
		serializers = PostForumSerializer(results,many=True)
		return paginator.get_paginated_response({'posts':serializers.data})

class CommentList(ListAPIView):		
	serializer_class = CommentForumSerializer
	def get_queryset(self,request):
		if self.request.method == 'GET':
			id_post=self.request.GET.get("id_post",None)
			return CommentForum.objects.filter(id_post=id_post)
