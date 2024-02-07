"""
Este módulo define el modelo de datos de la aplicación tasks.
"""
from django.db import models

class Task(models.Model):
    """
    Define el modelo de datos de una tarea.
    """
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return str(self.title)

