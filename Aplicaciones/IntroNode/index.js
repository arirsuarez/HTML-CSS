const express = require('express') //Importamos la librería
const app = express() //Cremos la app para poder utilizar express (ver en API)

app.get('*', (request, response) => { // Con el '*' le pedimos que traiga todo, y en la FatArrow (FAF) le pasamos como parámetro un req y un resp.
    response.send({ message: 'Hola mundo!'}) 
})
app.listen(3000, () => console.log('Nuestro servidor está escuchando en el puerto 3000')) //Le decimos el número de puerto que queremos que la app esté escuchando