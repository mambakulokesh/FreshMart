from. import views
from django.urls import path
from register.views import RegisterView,LoginView,LogoutView,ProductsApiView,ProductsDetailView,CategoryView,CategoryDetailView,ProductsByCategoryApiView
urlpatterns=[
  path('Register/',RegisterView.as_view(),name='register'),
  path('login/',LoginView.as_view(),name='loginview'),
  path('logout/',LogoutView.as_view(),name='LogoutView'),
  path('products/',ProductsApiView.as_view(),name="ProductsApiView"),
  path('products/<int:pk>/',ProductsDetailView.as_view(),name='Products_detail_view'),
  path('category',CategoryView.as_view(),name='category'),
  path('category/<int:pk>/',CategoryDetailView.as_view(),name='category_detail_view'),
  path('products/category/<str:category_name>/', ProductsByCategoryApiView.as_view(), name='products-by-category'),
]