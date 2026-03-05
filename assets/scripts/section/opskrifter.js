import { create } from "../utils/create"
import { set } from "../utils/set.js"
import { get } from "../utils/get.js"
import { slider } from "../components/slider.js"


export function opskrifter() {
    const opskrifter = create('div')
    opskrifter.classList = 'pb-40 relative'

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
    prevBtn.classList = 'absolute left-16 mr-1 top-1/2 rounded-full bg-customGrey p-3 pl-5 pr-5'

    const nextBtn = create('button')
    nextBtn.textContent = '>'
    nextBtn.classList = 'absolute right-16 ml-1 top-1/2 rounded-full bg-customGrey p-3 pl-5 pr-5'


    let current = 0

    nextBtn.addEventListener('click', () => {
        current = (current + 1) % images.length
        let track = get('#sliderTrack')
        track.style.transform = `translateX(-${current * 100 / 3}%)`
    })
    prevBtn.addEventListener('click', () => {
        current = (current - 1 + images.length) % images.length
        let track = get('#sliderTrack')
        track.style.transform = `translateX(-${current * 100 / 3})`
    })



    set([headline, prevBtn, slider(images), nextBtn], opskrifter)
    return opskrifter
}