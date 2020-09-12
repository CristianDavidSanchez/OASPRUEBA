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
- mysql -u root, o en su defecto el usuario de la base de datos, el archivo para generar la base de datos se encuentra en la carpeta database, archivo database.sql.
2. Para realizar la conexión con el servidor, se deben ejecutar los comandos npm run build y npm run dev en consolas por aparte.
3. Para conectar la aplicación con el servidor, y desplegarla en el navegador, se ejecuta en otra consola el comando ng serve, que asigna el puerto 4200 del localhost a la aplicación, http://localhost:4200/. Desde allí se podrá acceder a las diferentes opciones de la app.

Opcionalemnte se puede usar los comandos "npm run build " y "npm run dev" en consolas diferentes, el primero para hacer la conversión de typescript a javascript y el segundo permite monitorar las peticiones al servidor.

# Navegación
