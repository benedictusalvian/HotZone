from rest_framework import serializers
from .models import HotzoneBackend


class HotzoneBackendSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotzoneBackend
        fields = ('name', 'coordinateX', 'coordinateY', 'address')
