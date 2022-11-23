from django.db import models

# Create your models here.
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Core(models.Model):
    name = models.CharField(max_length=64)
    address = models.CharField(max_length=100)
    min_price = models.IntegerField()
    max_price = models.IntegerField()
    monthly_fees = models.IntegerField()
    one_time_fees = models.IntegerField()
    sq_ft = models.IntegerField()
    covered_parking = models.BooleanField(null=True)
    laundry = models.CharField(max_length=32)
    tt_unionStation = models.IntegerField()
    tt_costco = models.IntegerField()
    tt_grocery = models.IntegerField()
    tt_park = models.IntegerField()
    tt_dogPark = models.IntegerField()
    tt_line = models.IntegerField()
    tt_airport = models.IntegerField()
    link = models.CharField(max_length=200)
    notes = models.CharField(max_length=1000)
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)
    latitude = models.DecimalField(max_digits=30, decimal_places=15, null=True)
    longitude = models.DecimalField(max_digits=30, decimal_places=15, null=True)

