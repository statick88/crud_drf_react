"""
Importamos el modelo Task y lo registramos en el panel de administración de Django.
"""
from django.urls import path, include
from rest_framework import routers
from tasks import views

# api version 1
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
	path( 'api/v1/', include(router.urls)),
	# path( 'tasks/', include(router.urls)),
	path( '', include(router.urls)),
]
