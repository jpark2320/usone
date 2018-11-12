from django.apps import AppConfig


class UsersAppConfig(AppConfig):

    name = "usone.users"
    verbose_name = "Users"

    def ready(self):
        try:
            import users.signals  # noqa F401
        except ImportError:
            pass
