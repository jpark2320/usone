from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

# Used this function to create super user


class Command(BaseCommand):

    def handle(self, *args, **options):

        User = get_user_model()
        User.objects.create_superuser('jpark2320', 'jpark2320@gmail.com', '1234567890')
