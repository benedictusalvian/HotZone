# Generated by Django 3.1.3 on 2020-11-03 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotzone_backend', '0002_remove_hotzonebackend_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hotzonebackend',
            name='coordinateX',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='hotzonebackend',
            name='coordinateY',
            field=models.FloatField(),
        ),
    ]