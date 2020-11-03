from django.shortcuts import render
from rest_framework import viewsets
from .serializers import HotzoneBackendSerializer
from .models import HotzoneBackend
# Create your views here.


class HotzoneBackendView(viewsets.ModelViewSet):
    serializer_class = HotzoneBackendSerializer
    queryset = HotzoneBackend.objects.all()
