import { words } from "./words"

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}

export function getFarewellText(language) {
    const options = [
        `Chau, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `Te extrañaremos, ${language}`,
        `Oh no, no ${language}!`,
        `${language} muerde el polvo`,
        `Ausente, pero no olvidado, ${language}`,
        `El fin de ${language} como le conocimos`,
        `Se fue el atardecer, ${language}`,
        `${language}, fue bueno mientras duró`,
        `${language}, tu guardia ha terminado`,
        `${language} ha dejado esta dimensión`,
        `Hasta la vista, ${language}`,
        `Adieu, ${language}`,
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}