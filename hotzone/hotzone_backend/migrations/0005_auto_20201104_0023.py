# Generated by Django 3.1.3 on 2020-11-03 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotzone_backend', '0004_auto_20201104_0020'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hotzonebackend',
            name='address',
            field=models.CharField(blank=True, max_length=150),
        ),
    ]
