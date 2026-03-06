import { create } from '../utils/create.js';
import { set } from '../utils/set.js';
import searchImg from '../../images/svg/Icon-Search.svg'


export function search() {
    const search = create('div')
    search.classList = 'hidden lg:flex gap-3 ml-2 p-1 bg-customWhite h-8 w-44 items-center'

    const searchIcon = create('img')
    searchIcon.src = searchImg;
    searchIcon.classList = 'h-6'

    const searchText = create('p')
    searchText.textContent = 'SØG'
    searchText.classList = 'text-customBlack'


    set([searchIcon, searchText], search)
    return search
}