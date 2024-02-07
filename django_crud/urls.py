"""
Importamos el modelo Task y lo registramos en el panel de administración de Django.
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, basename='tasks')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('tasks/', include(router.urls)),
    path('docs/', include_docs_urls(title='Tasks API', description='RESTful API for tasks')),
]
