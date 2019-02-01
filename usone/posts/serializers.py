from rest_framework import serializers
from .models import Post, Comment, Image
from usone.users.serializers import UserSerializer


class BackupCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'


class BackupImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Image
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):

    comment_set = BackupCommentSerializer(many=True)
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
            'comment_set',
        )


class CommentSerializer(serializers.ModelSerializer):

    post = PostSerializer()

    class Meta:
        model = Comment
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):

    post = PostSerializer()

    class Meta:
        model = Image
        fields = '__all__'


class CreatePostSerializer(serializers.ModelSerializer):

    # comment_set = BackupCommentSerializer(many=True)
    # image_set = BackupImageSerializer(many=True)
    # liked_by = UserSerializer(many=True)
    # created_by = UserSerializer()

    class Meta:
        model = Post
        fields = (
            # 'id',
            'title',
            'description',
            'region',
            'category',
            'tag',
            # 'view_count',
            # 'creator',
            # 'updated_by',
            # 'created_by',
            # 'updated_at',
            # 'created_at',
            # 'liked_by',
            # 'image_set',
            # 'comment_set',
        )

class UpdatePostSerializer(serializers.ModelSerializer):

    # comment_set = BackupCommentSerializer(many=True)
    # image_set = BackupImageSerializer(many=True)
    # liked_by = UserSerializer(many=True)
    # created_by = UserSerializer()

    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'description',
            'region',
            'category',
            'tag',
            # 'view_count',
            # 'creator',
            # 'updated_by',
            # 'created_by',
            # 'updated_at',
            # 'created_at',
            # 'liked_by',
            # 'image_set',
            # 'comment_set',
        )

class DeletePostSerializer(serializers.ModelSerializer):

    # comment_set = BackupCommentSerializer(many=True)
    # image_set = BackupImageSerializer(many=True)
    # liked_by = UserSerializer(many=True)
    # created_by = UserSerializer()

    class Meta:
        model = Post
        fields = (
            'id',
            # 'title',
            # 'description',
            # 'region',
            # 'category',
            # 'tag',
            # 'view_count',
            # 'creator',
            # 'updated_by',
            # 'created_by',
            # 'updated_at',
            # 'created_at',
            # 'liked_by',
            # 'image_set',
            # 'comment_set',
        )


