from rest_framework import serializers
from .models import Core


class CoreSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Core
        fields = ('id', 'name', 'address', 'min_price', 'max_price', 'monthly_fees', 'one_time_fees', 'sq_ft', 'covered_parking', 'laundry', 'tt_unionStation', 'tt_costco', 'tt_grocery', 'tt_park', 'tt_dogPark', 'tt_line', 'tt_airport', 'link', 'notes', 'image_url')