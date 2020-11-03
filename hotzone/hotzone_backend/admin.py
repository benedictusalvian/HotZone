from django.contrib import admin
from .models import HotzoneBackend
# Register your models here.


class HotzoneBackendAdmin(admin.ModelAdmin):
    list_display = ('name', 'coordinateX', 'coordinateY', 'address')


admin.site.register(HotzoneBackend, HotzoneBackendAdmin)
