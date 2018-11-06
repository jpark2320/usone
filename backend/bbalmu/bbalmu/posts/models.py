from bbalmu.users.models import User
from django.db.models import (
    CASCADE, CharField, DateTimeField, ForeignKey,
    TextField, IntegerField, ImageField, Model
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
    region = CharField(default='georgia', max_length=100,
                       choices=(
                           ('georgia', 'Georgia'),
                           ('new_york', 'New York'),
                           ('los_angeles', 'Los Angeles'),
                           ('san_francisco', 'San Francisco'),
                       ))
    category = CharField(default='georgia', max_length=100,
                         choices=(
                             ('work', 'Work'),
                             ('visa', 'Visa'),
                             ('rent', 'Rent'),
                             ('qanda', 'Q&A'),
                         ))
    tag = CharField(max_length=255)
    view_count = IntegerField()
    liked_by = ForeignKey(User, on_delete=CASCADE)

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
