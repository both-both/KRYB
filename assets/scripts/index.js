import { divider } from "./components/divider.js";
import { header } from "./layout/header.js";
import { hero } from "./section/hero.js";
import { omkryb } from "./section/om_kryb.js";
import { opskrifter } from "./section/opskrifter.js";
import { products } from "./section/products.js";

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


    set([headerEl, heroEl, productsEl, dividerEl, omkrybEl, dividerEl2, opskrifterEL], root)
    return root
}

initApp()
