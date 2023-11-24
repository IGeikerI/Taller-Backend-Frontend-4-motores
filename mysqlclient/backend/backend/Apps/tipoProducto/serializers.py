from dataclasses import field
from statistics import mode

from rest_framework import serializers
from .models import TipoProducto

class TipoProductoSerializer(serializers.ModelSerializer):
    # len_nombreCliente = serializers.SerializerMethodField()
    class Meta:
        model = TipoProducto
        fields = "__all__"