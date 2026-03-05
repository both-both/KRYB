import { create } from '../utils/create.js';
import { set } from '../utils/set.js';


export function search() {
    const search = create('div')
    search.classList = 'flex gap-3 p-1 bg-customWhite h-8 w-44 '

    const searchIcon = create('img')
    searchIcon.src = 'assets/images/svg/Icon-Search.svg'
    searchIcon.classList = 'h-6'

    const searchText = create('p')
    searchText.textContent = 'SEARCH'
    searchText.classList = 'text-customBlack'


    set([searchIcon, searchText], search)
    return search
}