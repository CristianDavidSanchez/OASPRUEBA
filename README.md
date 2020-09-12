# OASPRUEBA
Prueba técnica OAS
# Descripción del programa 

El entorno es un enlace entre una base de datos llamada equipos, y el front-end, la aplicación permite que se ingresen los 4 equipos solicitados, con nombre a gusto, Adicionar los marcadores de los encuentros pertinentes para analizar la cantidad de puntos obtenidos en el partido,Por último, permite observar una tabla de los 4 equipos con su puntaje alcanzado.

# Dependencias
: 
  - Angular cli 10.1
  - Node.js
  - Typescript
  - Xamp/MYSQL

# Ejecución

1. Para realizar la ejecución de la aplicación, primero se debe conectar a una base de datos generada en MYSQL, para lo que se debe ejecutar el comando:
- mysql -u root, o en su defecto el usuario de la base de datos, el archivo para generar la base de datos se encuentra en la carpeta database, archivo database.sql, Se debe utilizar este codigo en el entorno mysql deseado, ya sea conectandose por consola o por interfaz. una vez creada y coenctada la base de datos local se puede acceder a las funcionalidades de la página.
2. Para realizar la conexión con el servidor, se deben ejecutar los comandos npm run build y npm run dev en consolas por aparte.
3. Para conectar la aplicación con el servidor, y desplegarla en el navegador, se ejecuta en otra consola el comando ng serve, que asigna el puerto 4200 del localhost a la aplicación, http://localhost:4200/. Desde allí se podrá acceder a las diferentes opciones de la app.


# Navegación
La primer a ventana que se despliega es la tabla con los equipos contenidos en la Base de datos hasta el momento, que por defecto esta vacía hasta que se llene la base de datos, en esta ventana, se muestran los resultados finales.
![alt text](https://github.com/CristianDavidSanchez/OASPRUEBA/blob/master/resultados.png)

Para llenar la base de datos se accede a la pestaña de ingresar equipos en la parte superior derecha, se desplegara un formulario de un solo campo para ingresar el nombre del equipo, se deben ingresar únicamente 4 equipos 1 sola vez para crear la base de datos.
![Ingreso](https://github.com/CristianDavidSanchez/OASPRUEBA/blob/master/ingreso_equipos.png)

Una vez ingresados los datos, se debe dirigir al menú cuadrangulares, donde se podrán ingresar los resultados de los partidos, dando click en Guardar partido, tras haber dado click se deben observar los cambios automáticamente en la pestaña resultados, con la debida puntuación acumulada obtenida. se pueden realizar cuantos partidos se desee, Además con el botón Reiniciar los puntos vuelven a ser 0 y se puede iniciar el analisis de una nueva ronda, esto sin cambiar los equipos.
![alt text](https://github.com/CristianDavidSanchez/OASPRUEBA/blob/master/cuadrangular.png)




