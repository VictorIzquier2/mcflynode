# Mcfly Node

<img src="https://wallup.net/wp-content/uploads/2017/11/17/188547-Back_to_the_Future-748x421.jpg" alt="drawing" width="600"/>


##### Instrucciones

Para ejecutarse el proyecto hay que acceder al repositorio y descargarlo en local.

1. Acceder a la repo de Back https://github.com/VictorIzquier2/mcflynode.git

 - Ir a Code y copiar el enlace HTTPS
 - Ve al panel de tu terminal, donde quieras bajar el proyecto
 - Escribe $ git clone https://github.com/VictorIzquier2/mcflynode.git

2. Pon en marcha el backend en el servidor local 3900
- Ejecutar el comando $ sudo service mongodb start
- Entra en el archivo mcflynode y ejecuta $ npm start

3. Prueba las rutas en Postman.co

- get Test: http://localhost:3900/api/test
- post Crear: http://localhost:3900/api/crear
   **Body** x-www-form-urlencoded
   - titulo: Encontrar a Doc
   - subtitulo: Cargar el Delorian
   - contenido: He regresado a 1955
- get Notas: http://localhost:3900/api/notas/
- get Nota: http://localhost:3900/api/nota/ ((+id))
- put MarcarFavorita: http://localhost:3900/api/nota/ ((+id))
- get Favoritas: http://localhost:3900/api/notas/favoritas

Gracias por interesarse en mis proyectos y darme la oportunidad de participar en este proceso de selección. 
Sigueme en GitHub https://github.com/VictorIzquier2 y en LinkedIn https://www.linkedin.com/in/victor-izquierdo/
