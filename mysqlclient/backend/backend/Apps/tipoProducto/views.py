from django.shortcuts import render
from django.http import Http404

from rest_framework.response import Response
from rest_framework import generics

from rest_framework import status

from .models import TipoProducto
from .serializers import TipoProductoSerializer
from django.shortcuts import render
from django.http import Http404

from rest_framework.response import Response
from rest_framework import generics

from rest_framework import status

from .models import TipoProducto
from .serializers import TipoProductoSerializer

# Create your views here.


class TipoProductoList(generics.ListCreateAPIView):
    """
    Lista de TipoProductos
    """

    queryset = TipoProducto.objects.all()
    serializer_class = TipoProductoSerializer



class TipoProductoDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete de los tipo_productos por pk
    """
    queryset = TipoProducto.objects.all()
    serializer_class = TipoProductoSerializer
