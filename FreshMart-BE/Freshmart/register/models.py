from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import PermissionsMixin

class UserManager(BaseUserManager):
  def create_user(self,fullname,email,phone_number,password):
    if not email:
      raise ValueError("user must have an email address")
    if not fullname:
      raise ValueError("User must have a name")
    if not phone_number:
      raise ValueError("User must have the phone number")
    if not password:
      raise ValueError("User need to create the account")
    user=self.model(
      email=self.normalize_email(email),
      fullname=fullname,
      phone_number=phone_number
    )    
    user.set_password(password)
    user.save(using=self._db)
    return user
  
  def create_superuser(self, fullname,email,phone_number,password):
    user=self.create_user(
      email=self.normalize_email(email),
      fullname=fullname,
      phone_number=phone_number,
      password=password
    )
    user.is_admin=True
    user.is_active=True
    user.is_staff=True
    user.is_superadmin=True
    user.save(using=self._db)
    return user

class User(AbstractBaseUser, PermissionsMixin):
    fullname = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    phone_number = models.CharField(max_length=12)
    date_joined = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superadmin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'fullname'
    REQUIRED_FIELDS = ['email', 'phone_number']

    def __str__(self):
        return self.fullname

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Products(models.Model):
    category = models.ForeignKey(Category, related_name="products", on_delete=models.CASCADE, null=True, blank=True)
    image = models.ImageField(upload_to="products/")
    product_name = models.CharField(max_length=50)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.product_name} ({self.category.name}) - {self.price}-{self.rating}"