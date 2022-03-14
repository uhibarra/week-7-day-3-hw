const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

// Create const to hold DOM Elements
const DOM_Elements = {
    rangers: '.ranger-list'

}

// Create Ranger List HTML
const create_ranger = (id, name, color, season, powercoin) => {
    const html = `<a href='#' class= 'list-group-item list-group-item-action list-group-item-light' id="${id}">Name: ${name}<br>Color: ${color}<br>Season: ${season}<br>Power Coin: ${powercoin}</a>`
    
    // 'Paste'new list item on document
    document.querySelector(DOM_Elements.rangers).insertAdjacentHTML("beforeend", html)
}

// Function to Load Each Ranger
const loadData = async () => {
    clearData()
    const rangerList = await getData();

    rangerList.forEach(ranger => create_ranger(ranger.id, ranger.name, ranger.color, ranger.season, ranger['power-coin']))
}

// Function to Clear Data
const clearData = () => {
    document.querySelector(DOM_Elements.rangers).innerHTML = '';
}