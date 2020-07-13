const renderItem = (item) => {
    return `<li data-id="${item._id}"> ${item.name} </li>` 
}

window.onload = () => {
    fetch('https://serverless-silk-eight.vercel.app/api/meals')
    .then(response => response.json())
    .then(data => {
        const mealsList = document.getElementById('meals-list')
        const submit = document.getElementById('submit')
        const template = data.map(renderItem).join('')
        mealsList.innerHTML = template
        submit.removeAttribute('disabled')
    }) 
}