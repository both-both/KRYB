import { create } from "../utils/create"
import { set } from "../utils/set.js"
import { get } from "../utils/get.js"
import { slider } from "../components/slider.js"
import { recipeData } from '../data/recipeData.js'



export function opskrifter() {
    const opskrifter = create('div')
    opskrifter.classList = 'relative'

    const headline = create('h1')
    headline.textContent = 'OPSKRIFTER'

    const images = [
        'assets/images/Uploads/Recipe-01.jpg',
        'assets/images/Uploads/Recipe-02.jpg',
        'assets/images/Uploads/Recipe-03.jpg',
        'assets/images/Uploads/Recipe-04.jpg',
        'assets/images/Uploads/Recipe-05.jpg',
        'assets/images/Uploads/Recipe-06.jpg'
    ]

    const prevBtn = create('button')
    prevBtn.textContent = '<'
    prevBtn.classList = 'hidden lg:block absolute left-16 mr-1 top-1/2 rounded-full bg-customGrey p-3 pl-5 pr-5'

    const nextBtn = create('button')
    nextBtn.textContent = '>'
    nextBtn.classList = 'hidden lg:block absolute right-16 ml-1 top-1/2 rounded-full bg-customGrey p-3 pl-5 pr-5'

    let current = 0
    const total = recipeData.length
    const visible = 3


    nextBtn.addEventListener('click', () => {
        current = (current + 1) % (total - visible + 1)
        let track = get('#sliderTrack')
        track.style.transform = `translateX(-${current * 100 / visible}%)`
    })
    prevBtn.addEventListener('click', () => {
        current = (current - + (total - visible + 1)) % (total - visible + 1)
        let track = get('#sliderTrack')
        track.style.transform = `translateX(-${current * 100 / visible}%`
    })



    set([headline, prevBtn, slider(images), nextBtn], opskrifter)
    return opskrifter
}