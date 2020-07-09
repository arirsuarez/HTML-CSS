
const todos = JSON.parse(localStorage.getItem('todos')) || []; 
//Estamos pidiendo que traiga los todos de localStorage pero (||) que si no los encuentra traiga un array vacío (La primera vez por ej, no va a encontrar nada en el Storage)
//El localStorage tiene una key y un valor, ambos strings, se usa el JSON parse para parsearlo a un array
const render = () => { 
//Se arma la función render para  que la lista se actualice cada vez que escuche un eventListener
    const todoList = document.getElementById('todo-list'); 
    //Llamamos al todo-list del html

    //todoList.innerHTML = ""; //Lo asignamos a un String vacío (para poder darle formato al momento de iterarlo)
    //for (let i=0; i < todos.length; i++) { //Iteramos el array
    //    todoList.innerHTML += "<li>" + todos[i] + "</li>"; //Agregamos cada nuevo OnSubmit como un nuevo elemento de la <ul> del html
    //}

    //SE PUEDE SIMPLIFICAR EL FOR CON LA FUNCION .map (itera el elemento informado y devuelve el valor que le pidamos):
    const todosTemplate = todos.map(t => '<li>' + t + '</li>'); 
    //iteramos todos y lo guardamos como elemento de una <ul> con los li
    todoList.innerHTML = todosTemplate.join('');
    //Le pasamos los elementos a todoList. Como todoTemplate es un array usamos la funcion join() para que agrupe a los elementos,
    //en este caso los agrupamos mediante un string vacío.
    const elementos = document.querySelectorAll('#todo-list li') 
    //Con el QuerySelectorAll podemos buscar cualquier etiqueta en html, en este caso estamos buscando dentro de todo-list, los li
    //se usa el # para avisar que estamos buscando ese id.
    elementos.forEach((elemento, i) => { 
        //El forEach itera la lista y tiene como parámetro el (elemento iterando, posición índice del elemento iterado)
        elemento.addEventListener('click', () => { 
            //Event listener "click"
            elemento.parentNode.removeChild(elemento);
            //Estamos llamando a <ul> con el parentNode. Y de todos los elementos de ul estamos eiminando el que le hacemos click
            todos.splice(i, 1);
            //splice permite quitar un el emento del array, se le pasa como parámetro (posición a eliminar, cantidad de elementos a eliminar desde esa posición)
            actualizaTodos(todos)
            render();
            //Recursividad. una función se llama a sí misma.             
        })
    })
}


const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos)
    localStorage.setItem('todos', todoStrings)
}

window.onload = () => {
    // Es una buena práctica utilizar el window OnLoad, espera a que cargue todo el html para después buscar el JS.
    // En caso de no ponerla y poner la etiqueta script mal va a buscar primero el archivo JS y da error
    render(); 
    //Se renderiza al principio de la aplicación para no tener que esperar a un eventListener
    
    // const parr = document.getElementById("textP") // recupera el id que llamamos y lo guarda en una constante
    // console.log(parr.innerHTML); // Imprime el html que está en el ID que llamamos
    // parr.innerText = "Se cambia el contenido de la web con JS" // Combinar html con JS nos permite que el contenido de la web sea dinámico y se modifique según la lógica que le demos.
    // parr.innerHTML = "<li>Elemento 1</li><li>Elemento 2</li>" // Usando el método innerHTML podemos agregar código html y renderizarlo en la web de esa manera y no como texto

    //APLICACIÓN

    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        //Llamamos el OnSubmit del form para poder guardar el dato ingresado, guardarlo en una variable para poder ponerlo en un array, para itinerar el array
        //y poder imprimirlo en pantalla como un nuevo elemento de la <ul>.
        e.preventDefault();
        // Si no ingresamos este método la web se refresca cada vez que damos OnSubmit xq es el comportamiento por default de los forms.

        const todo = document.getElementById('todo');
        //Llamamos al input
        const todoText = todo.value;
        // Recuperamos el valor ingresado
        todo.value = '';
        //Lo asignamos a un string vacío
        todos.push(todoText);
        //Pusheamos el string en un array vacío
        actualizaTodos(todos)
        render();
    }
}