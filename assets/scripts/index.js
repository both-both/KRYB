import { divider } from "./components/divider.js";
import { header } from "./layout/header.js";
import { hero } from "./section/hero.js";
import { omkryb } from "./section/om_kryb.js";
import { opskrifter } from "./section/opskrifter.js";
import { products } from "./section/products.js";
import { contact } from "./section/contact.js";
import { footer } from "./layout/footer.js";

import { get } from "./utils/get.js";
import { set } from "./utils/set.js";


function initApp() {
    const root = get('#root')
    root.classList = 'min-h-full'


    const headerEl = header()
    const heroEl = hero()
    const productsEl = products()
    const dividerEl = divider()
    const omkrybEl = omkryb()
    const dividerEl2 = divider()
    const opskrifterEL = opskrifter()
    const dividerEl3 = divider()
    const contactEl = contact()
    const dividerEl4 = divider()
    const footerEl = footer()


    set([headerEl, heroEl, productsEl, dividerEl, omkrybEl, dividerEl2, opskrifterEL, dividerEl3, contactEl, dividerEl4, footerEl], root)
    return root
}

initApp()
