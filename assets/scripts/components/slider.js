import { recipeData } from '../data/recipeData.js'
import { create } from '../utils/create'
import { set } from '../utils/set.js'

export function slider(images) {
    const slider = create('div')
    slider.classList = 'relative overflow-hidden sm:w-4/5 md:w-4/5 lg:w-4/6 m-auto'

    const track = create('div')
    track.id = 'sliderTrack'
    track.classList = 'grid grid-cols-1 md:grid-cols-2 lg:flex lg:p-4 lg:gap-0 pl-16 pr-16 gap-4 transition-transform duration-500'

    recipeData.forEach(recipe => {
        const slide = create('div')
        slide.innerHTML = `<img src='${recipe.image}' class=' object-cover aspect-square items-end w-full'/> 
        <div class = 'p-2 w-full absolute left-0 right-0 bottom-0  bg-customBlack/70'>
        <h4 class ='text-customWhite'>${recipe.name}</h4>
        <p class ='text-customWhite text-sm'>${recipe.description}</p></div>`
        slide.classList = 'relative lg:w-1/3 lg:shrink-0 lg:m-2 m-auto overflow-hidden'
        set(slide, track)

    })
    set(track, slider)
    return slider

}
