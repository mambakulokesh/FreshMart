from. import views
from django.urls import path
from register.views import RegisterView,LoginView,LogoutView
urlpatterns=[
  path('Register/',RegisterView.as_view(),name='register'),
  path('login/',LoginView.as_view(),name='loginview'),
  path('logout/',LogoutView.as_view(),name='LogoutView')
]