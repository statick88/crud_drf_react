
<div align="center">

# Proyecto de Lista de Tareas con Django Rest Framework y React.

![](images/paste-45.png)


Este proyecto es una aplicación de lista de tareas que utiliza Django Rest Framework para el backend y React para el frontend.

</div>

## Configuración del entorno


Antes de comenzar, asegúrate de tener un entorno virtual Python configurado para el proyecto. 

> Si no tienes un entorno virtual configurado, puedes crear uno utilizando el comando

``` bash
python -m venv env.
```

Para activar el entorno virtual, ejecuta el siguiente comando:

``` bash
source env/bin/activate
```

Si estas en Microsoft Windows ejecuta el siguiente comando:

``` bash
.\env\Scripts\activate
```
Instalar las dependencias de backend desde el archivo **requirements.txt**:

``` bash
pip install -r requirements.txt
```

## Ejecución del servidor de backend

El backend del proyecto se encuentra en el directorio principal. 

Es necesario preparar y realizar las migraciones, para ello es necesario utilizar el siguiente comando:

``` bash
python manage.py makemigrations
```

``` bash
python manage.py migrate
```

Para iniciar el servidor de desarrollo de Django, ejecuta el siguiente comando:

``` bash
python manage.py runserver
```

## Ejecución del servidor de frontend

El frontend del proyecto se encuentra en el directorio client. Para navegar a este directorio, ejecuta el siguiente comando:

``` bash
cd client
```

Antes de iniciar el servidor de desarrollo, asegúrate de instalar las dependencias necesarias con el siguiente comando:

``` bash
npm i
```

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

``` bash
npm run dev
```

Ahora deberías poder ver la aplicación en funcionamiento en tu navegador.
---
El código base fue desarrollado desde este repositorio [Fast Code](https://github.com/fazt/django-react-crud)