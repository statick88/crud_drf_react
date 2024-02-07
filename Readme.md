
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
# Check List Parte 1:

## Preparar el entorno de desarrollo

- [ ] **Paso 1:** Crear entorno virtual con virtualenv.

- [ ] **Paso 2:** Activar entorno virtual

- [ ] **Paso 3:** Seleccionar Python Interpreter.

- [ ] **Paso 4:** Instalamos Django 4.2.

- [ ] **Paso 5:** Creamos el proyecto.

- [ ] **Paso 6:** Corremos el servidor

- [ ] **Paso 7:** Creamos la primera app.

- [ ] **Paso 8:** Agregamos la aplicación en settings.py.
- [ ] **Paso 9:** Aplicamos las migraciones

## Instalar y configurar Django Rest Framework

- [ ] **Paso 10:** Instalamos Django Rest Framework y django-cors-headers.

- [ ] **Paso 16:** Añadimos Django Rest Framework y Corsheaders a settings.py:

- [ ] **Paso 17:** Agregamos Django cors Middleware.

- [ ] **Paso 18:** Creamos la autorización que permita a otros servidores que nos permite conectarnos:

- [ ] **Paso 19:** Creamos los modelos.

- [ ] **Paso 20:** Preparamos las migraciones de la nueva tabla.

- [ ] **Paso 21:** Aplicamos las migraciones de la nueva tabla.

- [ ] **Paso 22:** Creamos un usuario.

- [ ] **Paso 23:** Añadimos el modelo a administración:

- [ ] **Paso 24:** Probamos la administración de Django.

- [ ] **Paso 25:** Modificamos el método string.

- [ ] **Paso 26:** Creamos el serializador.

- [ ] **Paso 27:** Creamos la vista.

- [ ] **Paso 28:** Añadimos la vista a las urls de la aplicación.

- [ ] **Paso 29:** Creamos la ruta en el archivo urls.py del proyecto.

- [ ] **Paso 30:** Probamos la API.

- [ ] **Paso 31:** Agregamos las demás tareas a la API.

### Extra: Documentar con CoreAPI

- [ ] **Paso 1:** Instalamos CoreAPI.

- [ ] **Paso 2:** Añadimos CoreAPI a settings.py.

- [ ] **Paso 3:** Añadimos la ruta de CoreAPI a urls.py.

- [ ] **Paso 4:** Probamos la documentación.

---

El código base fue desarrollado desde este repositorio [Fast Code](https://github.com/fazt/django-react-crud)