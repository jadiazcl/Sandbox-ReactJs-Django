from .views import *
from django.urls import path

urlpatterns = [			
	path('posts',PostList.as_view()),
	path('search',CommentList.as_view())
]	