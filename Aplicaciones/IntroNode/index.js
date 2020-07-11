const express = require('express') //Importamos la librería
const app = express() //Cremos la app para poder utilizar express (ver en API)

app.get('*', (request, response) => { // Con el '*' le pedimos que traiga todo, y en la FatArrow (FAF) le pasamos como parámetro un req y un resp.
    response.send({ message: 'Hola mundo!'}) // Devuelve al explorador web, en este caso un objeto {} que se transforma a un String.
})
app.listen(3000, () => console.log('Nuestro servidor está escuchando en el puerto 3000')) //Le decimos el número de puerto que queremos que la app esté escuchando. Si ejecutamos el arch JS imprime por consola el string

// API REST
// Es una interfaz que está en la nube que permite que los clientes se conecten para solicitar datos.
// La API se conecta con la BD, pide los datos solicitados por el cliente y los devuelve

// Nos conectamos mediante verbos:
//GET: Pedimos recurso/s Cuando llamemos a Get devuelve un status código: 200
//POST: Creamos un recurso Cuando llamemos a POST devuelve un status código: 201
//PUT: Reemplazamos un recurso Cuando llamemos a PUT devuelve un status código: 204
//PATCH: Actualizamos un elemeno parcialmente sin borrar todo el resto Cuando llamemos a PATCH devuelve un status código: 204
//DELETE: Elimina un recurso Cuando llamemos a DELETE devuelve un status código: 204
//Recurso = entidad dentro de nuestra DB (Users/Products/etc)
//Le tenemos que indicar un recurso

// GET RutaDeLaAPI/users traería todos los usr
// GET RutaDeLaAPI/users/id:*** trae un usr en particular

// Arquitectura Servidores
// En el modelo tradicional tenemos clientes que se conectan a los servidores, le hacen consultas y estos se encargan de administrar y gestionar la carga
// Si muchos clientes hacen peticiones, alguien tiene que administrarlos para implementar un balanceador de carga para que no todos peguen al mismo server
// gestionar peticiones, instalar el lenguaje, etc.

//Arquitectura SERVERLESS
// Servicios (FunctionAsAService) FaaS. Se encargan de toda la administración de los servidores.
// El desarrollador escribe archivos y lo subimos a una nube, cuando nosotros le hagamos peticiones a esa nube (mediante una ruta), se encarga de ir a buscar el archivo
// lo monta dentro de la infrasetructura de servidores, ejecuta la función, espera un tiempo y después desmonta el archivo para dejarlo guardado en una BD.
// Esto hace que cuando le volvamos a llamar a esa ruta, la FaaS va a buscar el archivo a la BD y lo ejecuta. Cuando no lo usa más lo saca de la memoria de servidores.
// Esto hace que no administremos servidores, no usamos los servidores completos, el FaaS utiliza sólo lo que necesitemos. Eso hace que sea más barato.
// Cuando la nube va a buscar el archivo a nuestro proveedor a medida que llegan peticiones va a buscar los archivos y los va a cargar en la infraestructura.
// Si se sobrecarga la ram lo manda devuelta al Disco. Cuando lo va a buscar al disco se llama Ejecución en frío
// Si no lo desmontó y el archivo sigue en la memoria se llama Ejecución en Caliente.
// La idea para consultar una API es que todos los recursos estén en la misma ruta.


