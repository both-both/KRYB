import { create } from "../utils/create"
import { set } from "../utils/set"


export function omkryb() {
    const omkryb = create('section')
    omkryb.classList = 'max-w-4/5 m-auto'
    
    const headline = create('h1')
    headline.textContent = 'Om Kryb'
    headline.classList = 'text-center'
    set(headline, omkryb)

    const aboutContent = create('div')
    aboutContent.classList = 'lg:flex lg:gap-8 max-w-4/5 m-auto '

    const aboutText = create('div')
    aboutText.innerHTML =
        `<h3>Uanset hvor vi arbejder i <span>KRYB,</span> så deler vi de samme værdier og den  samme mission om at skabe livsglæde gennem måltidet.</h3>
        
        <p><span>KRYB</span> sigter mod at dele lækre, sunde, insektbaserede snacks, uden at gå på kompromis med smag og duft.</p>
        <p>Vores sortiment har lokalt fremstillede ingredienser i deres mest naturlige form for at skabe inspirerede snacks, hvor alt er lavet 100 % af os selv.</p>
        <p>Vi er lidenskabelige med at tilbyde vores kunder velsmagende og nærende snacks lavet af sunde ingredienser, der har en positiv indvirkning på krop og sjæl.<p>
        <p>Hos <span>KRYB</span> er vores mål simpelt - at omdefinere hvad det betyder at spise godt.</p>
        <p>Vi er forpligtede til at opretholde en bæredygtig og sund livsstil og aktivt bidrage til at sænke vores CO2 - fodaftryk og bevare vores planets vandforsyning gennem vores sortiment, opmærksomme ingrediensopkøb og miljøvenlige emballage.</p>
        <p>Spis godt. Spis med formål. Spis <span>KRYB</span></p>
        <p>Læs mere om <span>KRYB</span> her >>><p>`
    aboutText.classList = 'text-left'

    const aboutImg = create('img')
    aboutImg.src = 'assets/images/About-KRYB.jpg'
    aboutImg.classList = 'md:w-full lg:w-1/2 object-cover'

    set([aboutText, aboutImg], aboutContent)
    set([headline, aboutContent], omkryb)

    return omkryb
}
