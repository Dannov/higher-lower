import { sample } from "lodash-es"

export const values: {[key:string]: number} = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,}

export function create_card(){
    let card: string | undefined = sample(Object.keys(values))
    return card
}

export function print_card(card : string = "") {
    const suits = ["♥", "♦", "♣", "♠"]
    let sign = sample(suits)
    return `╔═════════╗
║ ${card.padEnd(2)}      ║
║         ║
║    ${sign}    ║
║         ║
║      ${card.padStart(2)} ║
╚═════════╝`
}
