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
]
