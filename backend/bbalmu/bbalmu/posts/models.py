from bbalmu.users.models import User
from django.db.models import (
    CASCADE, CharField, DateTimeField, ForeignKey,
    TextField, IntegerField, ImageField, Model,
    ManyToManyField
)


class TimeStampedModel(Model):
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Post(TimeStampedModel):

    title = CharField(max_length=255)
    description = TextField()
    creator = ForeignKey(User, related_name="posts_creator", on_delete=CASCADE)
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
    tag = CharField(max_length=255, null=True)
    view_count = IntegerField(default=0)
    liked_by = ManyToManyField(User, related_name="posts_liked_by")

    updated_by = ForeignKey(User, null=True, blank=True,
                            related_name='post_updated_by', on_delete=CASCADE)
    created_by = ForeignKey(User, null=True, blank=True,
                            related_name='post_created_by', on_delete=CASCADE)

    def __str__(self):
        return '{} - {} ({})'.format(self.id, self.title, self.region)


class Image(TimeStampedModel):

    post = ForeignKey(Post, on_delete=CASCADE)
    file = ImageField()
    updated_by = ForeignKey(User, null=True, blank=True,
                            related_name='image_updated_by', on_delete=CASCADE)
    created_by = ForeignKey(User, null=True, blank=True,
                            related_name='image_created_by', on_delete=CASCADE)

    def __str__(self):
        return 'Image of {}'.format(self.post)
