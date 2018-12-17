from django.contrib import admin
from .models import Post, Comment, Image


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'title',
        'creator',
        'region',
        'category',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
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
        'created_by',
    )

    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
            obj.creator = request.user.name
        else:
            obj.updated_by = request.user
        obj.save()


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):

    list_display = (
        'post',
        'content',
        'updated_by',
        'created_by',
        'updated_at',
        'created_at',
    )

    list_filter = (
        'post',
    )

    search_fields = (
        'post',
        'content',
        'created_by',
    )

    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
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
        'updated_at',
        'created_at',
    )

    list_filter = (
        'post',
    )

    search_fields = (
        'post',
        'file',
        'created_by',
    )

    def save_model(self, request, obj, form, change):
        if not change:
            obj.created_by = request.user
        else:
            obj.updated_by = request.user
        obj.save()
