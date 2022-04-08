from rest_framework.authtoken.models import Token
from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    """
    Custom user model manager where sapid is the unique identifier
    for authentication instead of usernames.
    """
    # def create_user(self, sapid, password, **extra_fields):
    #     """
    #     Create and save a User with the given sapid and password instead of username.
    #     """
    #     if not sapid:
    #         raise ValueError('SAPID must be set')
    #     user = self.model(sapid, **extra_fields)
    #     if user.password is None:
    #         user.set_password(password)
    #     user.save()
    #     return user

    def create_user(self, sapid, password, **extra_fields):

        if not sapid:
            raise ValueError('Users must have an email address')

        user = self.model(
            sapid = sapid, **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        token = Token.objects.get_or_create(user = user)
        return user

    def create_superuser(self, sapid, password, **extra_fields):
        """
        Create and save a superuser with the given sapid and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(sapid, password, **extra_fields)
