import { create } from "../utils/create";
import { set } from "../utils/set";


export function footer() {
    const footer = create('section')
    footer.classList = 'max-w-4/6 m-auto bg-customGrey mt-20 mb-10 p-12 pt-20 justify-center'

    const socials = create('div')
    socials.classList = 'flex justify-center m-auto gap-5'

    const inIcon = create('img')
    inIcon.src = 'assets/images/svg/Sm-Linkedin.svg'
    inIcon.classList = 'w-8'

    const igIcon = create('img')
    igIcon.src = 'assets/images/svg/Sm-Istagram.svg'
    igIcon.classList = 'w-8'
    const fbIcon = create('img')
    fbIcon.src = 'assets/images/svg/Sm-Facebook.svg'
    fbIcon.classList = 'w-8'
    const ytIcon = create('img')
    ytIcon.src = 'assets/images/svg/Sm-Youtube.svg'
    ytIcon.classList = 'w-8'
    set([inIcon, igIcon, fbIcon, ytIcon], socials)

    const logo = create('img')
    logo.src = 'assets/images/svg/Kryb-Logo-Black.svg'
    logo.classList = 'w-38 pt-8 pb-8 m-auto'

    const footerText = create('div')
    footerText.classList = 'text-center lg:m-auto lg:flex  place-content-between lg:space-x-10 > * lg:content-between lg:text-left'
    const omKrybText = create('div')
    omKrybText.innerHTML =
        `<h4>OM KRYB</h4>
    <p class='text-sm p-0 hidden lg:block'>Historien</p>
    <p class='text-sm p-0 hidden lg:block lg:break-words'>Virksomheder og afdelinger</p>
    <p class='text-sm p-0 hidden lg:block'>Job</p>
    <p class='text-sm p-0 hidden lg:block'>CSR</p>
    <p class='text-sm p-0 hidden lg:block'>Danmark mod Madspild</p>
    <p class='text-sm p-0 hidden lg:block'>Foreign suppliers</p>`

    const inspirationText = create('div')
    inspirationText.innerHTML =
        `<h4>INSPIRATION</h4>
    <p class='text-sm p-0 hidden lg:block'>Vin & Mad</p>
    <p class='text-sm p-0 hidden lg:block'>Opskrifter</p>
    <p class='text-sm p-0 hidden lg:block'>Sociale medier</p>
    <p class='text-sm p-0 hidden lg:block'>Gaver Privat</p>`

    const omHandelText = create('div')
    omHandelText.innerHTML =
        `<h4>OM HANDEL</h4>
    <p class='text-sm p-0 hidden lg:block'>Beskyttelse af personlige oplysninger</p>
    <p class='text-sm p-0 hidden lg:block'>Levering</p>
    <p class='text-sm p-0 hidden lg:block'>Fødevarestyrelsens smiley-rapporter</p>`


    const kontaktText = create('div')
    kontaktText.innerHTML =
        `<h4>KONTAKT</h4>
    <p class='text-sm p-0 hidden lg:block'>Telefon (+45) 12345678</p>
    <p class='text-sm p-0 hidden lg:block'>info@kryb.dk</p>
    <p class='text-sm p-0 pt-4 hidden lg:block'>Butikker/Åbningstider</p>`


    set([omKrybText, inspirationText, omHandelText, kontaktText], footerText)
    set([socials, logo, footerText], footer)
    return footer

}