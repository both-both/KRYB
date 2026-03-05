import { create } from "../utils/create";


export function divider() {
    const hr = create('hr')
    hr.classList = 'border-t border-customGrey max-w-4/5 m-auto mt-20 mb-10'

    return hr
}