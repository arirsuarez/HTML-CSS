let mealsState = []

const stringToHTML = (string) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(string, 'text/html')

    return doc.body.firstChild
}

const renderItem = (item) => {
    const element = stringToHTML(`<li data-id="${item._id}"> ${item.name} </li>`)

    element.addEventListener('click', () => {
        const mealsList = document.getElementById('meals-list')
        Array.from(mealsList.children).forEach(x => x.classList.remove('selected'))
        element.classList.add('selected')
        const mealsIDInput = document.getElementById('meals-input')
        mealsIDInput.value = item._id
    })

    return element

}

const renderOrder = (order, meals) => {
    const meal = meals.find(meal => meal._id === order.meal_id)
    const element = stringToHTML(`<li data-id="${order._id}"> ${meal.name} - ${order.user_id} </li>`)

    return element
}

window.onload = () => {
    const orderForm = document.getElementById('orders')
    orderForm.onsubmit = (e) => {
        e.preventDefault()
        const submit = document.getElementById('submit')
        submit.setAttribute('disabled', true)
        const mealID = document.getElementById('meals-input')
        const mealIDValue = mealID.value
        if (!mealIDValue) {
            alert('Debe seleccionar un plato')
            return
        }

        const order = {
            meal_id: mealIDValue,
            user_id: 'lala'
        }

        fetch('https://serverless-silk-eight.vercel.app/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        }).then(x => x.json())
            .then(response => {
                const renderedOrder = renderOrder(response, mealsState)
                const ordersList = document.getElementById('orders-list')
                ordersList.appendChild(renderedOrder)
                submit.removeAttribute('disabled')
            })

    }
    fetch('https://serverless-silk-eight.vercel.app/api/meals')
        .then(response => response.json())
        .then(data => {
            mealsState = data
            const mealsList = document.getElementById('meals-list')
            const submit = document.getElementById('submit')
            const itemList = data.map(renderItem)
            mealsList.removeChild(mealsList.firstElementChild)
            itemList.forEach(element => mealsList.appendChild(element))
            submit.removeAttribute('disabled')
            fetch('https://serverless-silk-eight.vercel.app/api/orders')
                .then(response => response.json())
                .then(ordersData => {
                    const ordersList = document.getElementById('orders-list')
                    const listOrders = ordersData.map(ordersData => renderOrder(ordersData, data))
                    ordersList.removeChild(ordersList.firstElementChild)
                    listOrders.forEach(element => ordersList.appendChild(element))
                })
        })
}