from .views import *
from django.urls import path

urlpatterns = [			
	path('post/',PostList.as_view())
]	