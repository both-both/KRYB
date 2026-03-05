import { create } from "../utils/create";


export function button(text, onClick) {
    const btn = create('button')
    btn.textContent = text
    btn.addEventListener('click', onClick)
    btn.classList = 'text-base font-extralight uppercase bg-customGrey pr-8 pl-8 center mb-6 mt-2.5'

    return btn
}