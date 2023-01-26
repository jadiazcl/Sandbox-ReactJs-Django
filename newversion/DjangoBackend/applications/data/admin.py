from django.contrib import admin
from .models import *

admin.site.register(PostForum)
admin.site.register(CommentForum)
admin.site.register(ForumCategories)