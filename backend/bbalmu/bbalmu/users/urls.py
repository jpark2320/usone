from django.urls import path, re_path

from bbalmu.users import views

app_name = "users"
urlpatterns = [
    # --------------- REST API ---------------
    re_path(r'^all-users/$', views.ListAllUsers.as_view(), name='all_users'),
    # --------------- REST API ---------------

    path("", view=views.user_list_view, name="list"),
    path("~redirect/", view=views.user_redirect_view, name="redirect"),
    path("~update/", view=views.user_update_view, name="update"),
    path("<str:username>/", view=views.user_detail_view, name="detail"),
]
