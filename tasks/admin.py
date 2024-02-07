"""
importamos el modelo Task y lo registramos en el panel de administración de Django.
"""
from django.contrib import admin
from .models import Task

admin.site.register(Task)
