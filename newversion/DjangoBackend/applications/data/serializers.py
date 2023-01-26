from rest_framework import serializers
from .models import *

class ImageategoriesSerializer(serializers.ModelSerializer):
	class Meta:
		model=ImagesCategories
		fields=('image_category_file',)

class ForumCategoriesSerializer(serializers.ModelSerializer):
	image = ImageategoriesSerializer()
	class Meta:
		model=ForumCategories
		fields=('name_category','image')

class PostForumSerializer(serializers.ModelSerializer):
	id_category = ForumCategoriesSerializer()
	class Meta:
		model=PostForum
		fields=('id_post', 'name_post','text_post','id_category', 'create_time')

class CommentForumSerializer(serializers.ModelSerializer):
	class Meta:
		model=CommentForum
		fields=('id_comment', 'text_comment', 'create_time')

