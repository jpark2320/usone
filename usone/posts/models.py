from usone.users.models import User
from django.db import models


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Post(TimeStampedModel):

    title = models.CharField(max_length=255)
    description = models.TextField()
    creator = models.CharField(max_length=255, editable=False, blank=True)
    region = models.CharField(default='georgia', max_length=100,
                              choices=(
                                  ('georgia', 'Georgia'),
                                  ('new-york', 'New York'),
                                  ('los-angeles', 'Los Angeles'),
                                  ('san-francisco', 'San Francisco'),
                              ))
    category = models.CharField(default='georgia', max_length=100,
                                choices=(
                                    ('work', 'Work'),
                                    ('visa', 'Visa'),
                                    ('rent', 'Rent'),
                                    ('qanda', 'Q&A'),
                                ))
    tag = models.CharField(max_length=255, null=True, blank=True)
    view_count = models.IntegerField(editable=False, default=0, blank=True)
    liked_by = models.ManyToManyField(User, editable=False,
                                      related_name="posts_liked_by")

    updated_by = models.ForeignKey(User, editable=False, null=True, blank=True,
                                   related_name='post_updated_by',
                                   on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, editable=False, null=True, blank=True,
                                   related_name='post_created_by',
                                   on_delete=models.CASCADE)

    def __str__(self):
        return '{} - {} ({})'.format(self.id, self.title, self.region)


class Comment(TimeStampedModel):
    post = models.ForeignKey(Post, null=True, on_delete=models.CASCADE)
    content = models.TextField()

    updated_by = models.ForeignKey(User, editable=False, null=True, blank=True,
                                   related_name='comment_updated_by',
                                   on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, editable=False, null=True, blank=True,
                                   related_name='comment_created_by',
                                   on_delete=models.CASCADE)


class Image(TimeStampedModel):

    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    file = models.ImageField()
    updated_by = models.ForeignKey(User, null=True, blank=True,
                                   related_name='image_updated_by',
                                   on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, null=True, blank=True,
                                   related_name='image_created_by',
                                   on_delete=models.CASCADE)

    def __str__(self):
        return 'Image of {}'.format(self.post)
