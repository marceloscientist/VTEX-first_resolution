const API_URL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72'

// Capture the data
const fetchAPI = async (url) => {
    let response = await fetch(url)
    const textResponse = await response.text()
    return JSON.parse(textResponse)
}

// Render the page
const renderPage = async () => {
    const apiData = await fetchAPI(API_URL)
    cardContainer = document.querySelector(".card-container");
    apiData.forEach(property => {
        const { name, photo, price, property_type } = property;

        card = document.createElement('div')
        card.className = 'card'

        cardInfo = document.createElement('div')
        cardInfo.className = "card-info"

        cardImg = document.createElement('img')
        cardImg.className = "card-img"
        cardImg.src = photo

        propertyType = document.createElement('div')
        propertyType.className = 'property-type'
        propertyType.innerHTML = property_type

        propertyPrice = document.createElement('div')
        propertyPrice.className = 'property-price'
        propertyPrice.innerHTML = `R$ ${price.toFixed(2)}/noite`

        propertyName = document.createElement('div')
        propertyName.className = 'property-name'
        propertyName.innerHTML.innerHTML = name

        cardContainer.appendChild(card)
        card.appendChild(cardImg)
        card.appendChild(cardInfo)
        cardInfo.appendChild(propertyName)
        cardInfo.appendChild(propertyType)
        cardInfo.appendChild(propertyPrice)
    });
}
renderPage()

// 26 min => https://www.youtube.com/watch?v=8dPbyHY38UU