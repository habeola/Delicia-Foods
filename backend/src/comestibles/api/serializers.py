from rest_framework import serializers
from comestibles.models import Food

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('title', 'pics', 'price', 'description', 'delivery_fee', 'top_rated')
        


