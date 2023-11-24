from django.urls import path
from .views import TipoProductoList, TipoProductoDetail

app_name = "tipo_productos"
urlpatterns = [
    path('', TipoProductoList.as_view()),
    path('<int:pk>', TipoProductoDetail.as_view()),
]