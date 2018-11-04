from bbalmu.users.models import User
from django.db.models import (
    CASCADE, CharField, DateTimeField, ForeignKey, TextField, ImageField, Model
)


class TimeStampedModel(Model):
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Post(TimeStampedModel):

    title = CharField(max_length=255)
    description = TextField()
    creator = ForeignKey(User, on_delete=CASCADE)

    updated_by = ForeignKey(User, null=True,
                            related_name='post_updated_by', on_delete=CASCADE)
    created_by = ForeignKey(User, null=True,
                            related_name='post_created_by', on_delete=CASCADE)


class Image(TimeStampedModel):

    post = ForeignKey(Post, on_delete=CASCADE)
    file = ImageField()
    updated_by = ForeignKey(User, null=True,
                            related_name='image_updated_by', on_delete=CASCADE)
    created_by = ForeignKey(User, null=True,
                            related_name='image_created_by', on_delete=CASCADE)
