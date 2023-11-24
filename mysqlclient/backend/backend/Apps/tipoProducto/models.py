from django.db import models

class TipoProducto(models.Model):
    nombre = models.CharField(max_length=50, verbose_name="Nombre")

    def __str__(self):
        return self.nombre

    class Meta:
        db_table ='tipo_productos'
