import { create } from '../utils/create.js';
import { set } from '../utils/set.js';
import heroImg from '../../images/hero.jpg'
import heroLogoImg from '../../images/logo.png'


export function hero() {
    const hero = create('div')
    hero.classList = 'grid'

    const heroImage = create('img')
    heroImage.src = heroImg;
    heroImage.classList = 'col-start-1 row-start-1 w-full object-cover'
    const logoDiv = create('div')
    logoDiv.classList = 'col-start-1 row-start-1 w-6/12 place-self-center'
    const heroLogo = create('img')
    heroLogo.src = heroLogoImg;
    heroLogo.classList = 'object-center'
    const logoText = create('p')
    logoText.textContent = '— ET BEDRE VALG'
    logoText.classList = 'text-customWhite text-lg font-extralight tracking-widest pt-3'

    set([heroLogo, logoText], logoDiv)
    set([heroImage, logoDiv], hero)
    return hero

}