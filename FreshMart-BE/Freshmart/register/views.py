from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from register.serializers import RegisterSerializer,LoginSerializer,ProductSerializer,CategorySerializer
from rest_framework import status
from rest_framework.response import Response
from register.models import User,Products,Category
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from django.http import Http404
from rest_framework.pagination import PageNumberPagination
from django.shortcuts import get_object_or_404
# Create your views here.
class RegisterView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = user.tokens()
            return Response({
                'refresh': refresh['refresh'],
                'access': refresh['access']
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request):
        users = User.objects.all()
        serializer = RegisterSerializer(users, many=True)
        return Response(serializer.data)
    

class LoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            tokens = user.tokens()
            return Response({
                'message': "Rara Battu ra!",
                'user_id': user.id,
                'fullname': user.fullname,
                'email': user.email,
                'refresh': tokens['refresh'],
                'access': tokens['access']
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        refresh_token = request.data.get("refresh")
        if refresh_token is None:
            return Response({"error": "Refresh token is required."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Eyhase Nikloo"}, status=status.HTTP_205_RESET_CONTENT)
        except TokenError:
            return Response({"error": "Invalid token or token is expired."}, status=status.HTTP_400_BAD_REQUEST)
        
class ProductsApiView(APIView):
    def get(self,request):    
        products=Products.objects.all()
        paginator=PageNumberPagination()
        paginator.page_size=9
        result_page=paginator.paginate_queryset(products,request)
        serializer=ProductSerializer(result_page  ,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    def post(self,request):
        serializer=ProductSerializer(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class ProductsDetailView(APIView):
    def get_object(self,pk):
        try:
            product=Products.objects.get(pk=pk)
            return product
        except Products.DoesNotExist:
            raise Http404
    def get(self,request,pk):
        product=self.get_object(pk)
        serializer=ProductSerializer(product)
        return Response(serializer.data,status=status.HTTP_200_OK)
    def put(self,request,pk):
        product=self.get_object(pk)
        serializer=ProductSerializer(product,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)
    def delete(self,request,pk):
        product=self.get_object(pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class CategoryView(APIView):
    def get(self, request):
        category=Category.objects.all()
        serializer=CategorySerializer(category, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self,request):
        serializer=CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class CategoryDetailView(APIView):
    def get_object(self, pk):
        try:
            category=Category.objects.get(pk=pk)
            return category
        except Category.DoesNotExist:
            raise Http404
    def get(self, request,pk):
        category=self.get_object(pk)
        serializer=CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def put(self, request,pk):
        category=self.get_object(pk)
        serializer=CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
    def delete(self, request,pk):
        category=self.get_object(pk)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class ProductsByCategoryApiView(APIView):
    def get(self, request, category_name):
        category = get_object_or_404(Category, name__iexact=category_name)
        products = Products.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)