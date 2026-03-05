import { recipeData } from '../data/recipeData.js'
import { create } from '../utils/create'
import { set } from '../utils/set.js'

export function slider(images) {
    const slider = create('div')
    slider.classList = 'relative overflow-hidden lg:w-4/6 m-auto'

    const track = create('div')
    track.id = 'sliderTrack'
    track.classList = 'gap-4 flex auto-cols-auto transition-transform duration-500'

    recipeData.forEach(recipe => {
        const slide = create('div')
        slide.innerHTML = `<img src='${recipe.image}' class=' object-cover aspect-square items-end'/> 
        <div class = 'px-2 w-full absolute left-0 right-0 bottom-0  bg-customBlack/70'>
        <h4 class ='text-customWhite'>${recipe.name}</h4>
        <p class ='text-customWhite text-sm'>${recipe.description}</p></div>`
        slide.classList = 'relative shrink-0 m-auto w-3/9'
        set(slide, track)

    })
    set(track, slider)
    return slider

}
