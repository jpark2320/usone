from django.contrib import admin
from .models import Post, Image


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):

    list_display = (
        'title',
        'creator',
        'region',
        'category',
        'updated_by',
        'created_by',
    )

    list_filter = (
        'region',
        'category',
    )

    search_fields = (
        'title',
        'creator',
        'region',
        'category',
    )

    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
            obj.creator = request.user.name
        else:
            obj.updated_by = request.user
        obj.save()


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):

    list_display = (
        'post',
        'file',
        'updated_by',
        'created_by',
    )

    list_filter = (
        'post',
        'file',
    )

    search_fields = (
        'post',
        'file',
    )

    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
        else:
            obj.updated_by = request.user
        obj.save()
