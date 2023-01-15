from rest_framework import serializers
from .models import *

class PostForumSerializer(serializers.ModelSerializer):
	class Meta:
		model=PostForum
		fields=('id_post', 'text_post', 'create_time')

class CommentForumSerializer(serializers.ModelSerializer):
	class Meta:
		model=CommentForum
		fields=('id_comment', 'text_comment', 'create_time')