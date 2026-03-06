import { create } from "../utils/create";

export function burgerBtn(ulEl) {
    const burgerBtn = create('button')
    burgerBtn.textContent = "☰";
    burgerBtn.className = "text-customBlack text-3xl";
    let menuOpen = false;
    burgerBtn.addEventListener("click", () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            ulEl.className = "flex flex-col items-center gap-6 py-4";
            ulEl.textContent = "✕";
        } else {
            link.className = "hidden lg:flex gap-40 justify-end mr-24 p-4";
            ulEl.textContent = "☰";
        }

    });
    return burgerBtn
}