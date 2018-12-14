from django.urls import re_path
from . import views

app_name = "posts"

urlpatterns = [
    re_path(
        r'^posts-by-filters/$',
        views.PostByFilters.as_view(),
        name='posts_by_region'
    ),
    re_path(
        r'^all-images/$',
        views.ListAllImages.as_view(),
        name='all_images'
    ),
    re_path(
        r'^create-post/',
        views.CreatePost.as_view(),
        name='create_post'
    ),
    re_path(
        r'^update-post/$',
        views.UpdatePost.as_view(),
        name='update_post'
    ),
    re_path(
        r'^delete-post/$',
        views.DeletePost.as_view(),
        name='delete_post'
    ),
]
