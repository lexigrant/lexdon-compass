# Generated by Django 4.1.1 on 2022-11-19 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Core',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('address', models.CharField(max_length=100)),
                ('min_price', models.IntegerField()),
                ('max_price', models.IntegerField()),
                ('monthly_fees', models.IntegerField()),
                ('one_time_fees', models.IntegerField()),
                ('sq_ft', models.IntegerField()),
                ('covered_parking', models.BooleanField(null=True)),
                ('laundry', models.CharField(max_length=32)),
                ('tt_unionStation', models.IntegerField()),
                ('tt_costco', models.IntegerField()),
                ('tt_grocery', models.IntegerField()),
                ('tt_park', models.IntegerField()),
                ('tt_dogPark', models.IntegerField()),
                ('tt_line', models.IntegerField()),
                ('tt_airport', models.IntegerField()),
                ('link', models.CharField(max_length=200)),
                ('notes', models.CharField(max_length=1000)),
            ],
        ),
    ]