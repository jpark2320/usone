from django.conf.urls import url
from . import views

app_name = "posts"

urlpatterns = [
    url(
        regex=r'^all-posts/$',
        view=views.ListAllPosts.as_view(),
        name='all_posts'
    ),
    url(
        regex=r'^all-images/$',
        view=views.ListAllImages.as_view(),
        name='all_images'
    )
]
