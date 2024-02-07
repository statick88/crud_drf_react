"""
Importamos el módulo serializers de rest_framework y el modelo Task de nuestro modelo.
"""
from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    """
    Define la serialización de un objeto Task.
    """
    class Meta:
        """
        Define el modelo de datos que se va a serializar.
        """
        model = Task
        fields = '__all__'
