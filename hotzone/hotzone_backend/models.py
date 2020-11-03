from django.db import models

# Create your models here.


class HotzoneBackend(models.Model):
    name = models.CharField(max_length=120)
    coordinateX = models.FloatField()
    coordinateY = models.FloatField()
    address = models.CharField(max_length=150, blank=True)

    def __str__(self):
        return self.name
