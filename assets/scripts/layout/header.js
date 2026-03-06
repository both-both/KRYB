import { create } from '../utils/create.js';
import { set } from '../utils/set.js';
import headerLogoImg from '../../images/svg//Kryb-Logo-Black.svg'

import { navbar } from '../components/navbar.js';
import { search } from '../components/search.js';

export function header(targetElement) {

    const header = create('header')
    header.classList = 'bg-customGrey h-50 w-full p-2 .md:flex-row-reverse'

    const container = create('div')
    container.classList = 'flex place-self-left lg:w-3/5 justify-between'

    const headerLogo = create('img')
    headerLogo.src = headerLogoImg;
    headerLogo.classList = 'w-64 place-self-center'
 

    set([search(), headerLogo], container)
    set([container, navbar()], header)

    return header

}




