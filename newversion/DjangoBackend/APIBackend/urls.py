from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('applications.data.urls')),
]+ [re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]
