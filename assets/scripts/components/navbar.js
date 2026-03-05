import { create } from '../utils/create.js';
import { get } from "../utils/get.js";
import { set } from "../utils/set.js";

export function navbar() {
    const navlinks = ['forside', 'shop', 'forhandler', 'inspiration', 'om kryb', 'kontakt']
    const root = get('#root')

    const nav = create('nav')
    nav.classList = 'flex flex-row gap-10 pb-3 items-end'

    navlinks.forEach((link) => {
        const linkEl = create('a')
        linkEl.href = `#${link}`
        linkEl.innerText = link.toUpperCase()
        linkEl.classList = 'text-customBlack font-light'
        set(linkEl, nav)
    })
    return nav
}