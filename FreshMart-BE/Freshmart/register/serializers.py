from rest_framework import serializers
from .models import User,Products
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['id', 'fullname', 'email', 'password', 'phone_number']
    def create(self, validated_data):
        return User.objects.create_user(
            fullname=validated_data['fullname'],
            email=validated_data['email'],
            phone_number=validated_data['phone_number'],
            password=validated_data['password']
        )

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    class Meta:
        fields = ['email', 'password']
    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("User does not exist")
        if not user.check_password(password):
            raise serializers.ValidationError("Incorrect password")
        if not user.is_active:
            raise serializers.ValidationError("Account is inactive")
        data['user'] = user
        return data
    
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields="__all__"
