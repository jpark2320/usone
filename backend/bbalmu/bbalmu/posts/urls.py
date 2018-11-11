from django.urls import re_path
from . import views

app_name = "posts"

urlpatterns = [
    re_path(r'^all-posts/$', views.ListAllPosts.as_view(), name='all_posts'),
    re_path(r'^all-images/$', views.ListAllImages.as_view(), name='all_images'),
]
