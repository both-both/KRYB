import { create } from "../utils/create"
import { set } from "../utils/set"

export function contact() {
    const contact = create('section')
    contact.classList = 'max-w-4/5 m-auto'

    const headline = create('h1')
    headline.textContent = 'Kontakt kryb'
    headline.classList = 'text-center'
    set(headline, contact)

    const contactContent = create('div')
    contactContent.classList = 'lg:flex lg:gap-8 max-w-4/5 m-auto'

    const contactText = create('div')
    contactText.innerHTML = `<h3>Velkommen til Snakken, <span>Krybs</span> kundeservice.</h3>
<p>Hos <span>Kryb</span> er vi altid glade for at tale med vores kunder. Faktisk så meget så vi ofte inviterer på middag i vores byhave på Ydre Nørrebro. Men hvis du ikke kan vente til næste gang vi inviterer, kan du også ringe, skrive til os her på siden eller sende en mail.</p>
<p>Vi sidder klar til at hjælpe dig på telefon <span>7026 0066</span> søndag til onsdag fra 9 til 18, og torsdag til fredag fra 9 til 17. Du kan skrive til os via chat søndag til torsdag fra 9 til 22, og fredag og lørdag fra 9 til 17.</p>
<p>Du er også velkommen til at sende os en mail på <span>info@kryb.dk</span>, eller hjælpe os lidt på vej ved at udfylde kontaktformular her til højre - så vender vi tilbage til dig, så snart vi kan. Vil du gerne sende et billede til os, så send det i en mail på <span>info@kryb.dk</span></p>`
    contactText.classList = 'text-left lg:w-1/2'

    const contactForm = create('div')
    contactForm.classList = 'bg-customGrey lg:w-1/2 mt-10 p-8 flex-row'

    const nameLabel = create('label')
    nameLabel.textContent = 'For- og Efternavn'

    const nameInput = create('input')
    nameInput.type = 'text'
    nameInput.classList = 'w-full bg-customWhite p-2 mb-4'

    const emailLabel = create('label')
    emailLabel.textContent = 'Email'
    emailLabel.classList = 'block mb-1'

    const emailInput = create('input')
    emailInput.textContent = 'email'
    emailInput.classList = 'w-full bg-customWhite p-2 mb-4'

    const msgLabel = create('label')
    msgLabel.textContent = 'Besked'
    msgLabel.classList = 'block mb-1'

    const msgInput = create('textarea')
    msgInput.classList = 'bg-customWhite w-full p-2 mb-4 h-32'

    const submitBtn = create('button')
    submitBtn.textContent = 'Send!'
    submitBtn.classList = 'bg-customWhite text-customBlack py-2 w-1/3 cursor-pointer'




    set([nameLabel, nameInput,
        emailLabel, emailInput,
        msgLabel, msgInput,
        submitBtn], contactForm)

    set([contactText, contactForm], contactContent)
    
    set(contactContent, contact)
    return contact
}