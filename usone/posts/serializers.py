from rest_framework import serializers
from .models import Post, Image
from usone.users.serializers import UserSerializer


class BackupImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):

    image_set = BackupImageSerializer(many=True)
    liked_by = UserSerializer(many=True)
    created_by = UserSerializer()

    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'description',
            'region',
            'category',
            'tag',
            'view_count',
            'creator',
            'updated_by',
            'created_by',
            'updated_at',
            'created_at',
            'liked_by',
            'image_set',
        )


class ImageSerializer(serializers.ModelSerializer):

    post = PostSerializer()

    class Meta:
        model = Image
        fields = '__all__'
