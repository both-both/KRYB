import { create } from "../utils/create"
import { set } from "../utils/set"
import { productData } from '../data/productData.js'
import { button } from "../components/button.js"

export function products() {
    const products = create('div')
    products.classList = 'max-w-4/5 m-auto'

    const headline = create('h1')
    headline.textContent = 'PRODUKTER'
    set([headline], products)

    productData.forEach(product => {
        const productCard = create('div')
        productCard.innerHTML =
            `<img src="${product.image}" class='max-w-4/5 m-auto'/>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <h2>${product.price}</h2>`;
        const btn = button('læg i kurv')
        productCard.classList = 'text-center mb-10 m-auto'
        set([btn], productCard)
        set([productCard], products)

    })
    return products
}

