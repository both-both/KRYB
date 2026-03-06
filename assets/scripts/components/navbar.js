import { create } from '../utils/create.js';
import { get } from "../utils/get.js";
import { set } from "../utils/set.js";
import shopImg from '../../images/svg/Icon-Basket.svg'

export function navbar() {
    const navbar = create('div')
    navbar.classList = 'flex justify-between items-center m-2'
    const navlinks = ['forside', 'shop', 'forhandler', 'inspiration', 'om kryb', 'kontakt']
    const root = get('#root')

    const nav = create('nav')
    nav.classList = 'flex gap-4'

    navlinks.forEach((link) => {
        const linkEl = create('a')
        linkEl.href = `#${link}`
        linkEl.innerText = link.toUpperCase()
        linkEl.classList = 'text-customBlack font-light gap-4'
        set(linkEl, nav)
    })
    const shop = create('div')
    const shopIcon = create('img')
    shopIcon.src = shopImg;
    shopIcon.classList = 'h-5 '
    const shopText = create('p')
    shopText.textContent = '(0)'
    shopText.classList = 'tracking-widest'
    shop.classList = 'flex gap-4 items-center'


    set([shopIcon, shopText], shop)
    set([nav, shop], navbar)

    return navbar
}