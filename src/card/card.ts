import { sample } from "lodash-es"

export const suits = ["♥", "♦", "♣", "♠"]

export const card_value: {[key:string]: number} = {
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

export function give_card_suit() {
    let suit: string | undefined = sample(suits)
    return suit
}

export function give_card_rank(){
    let card: string | undefined = sample(Object.keys(card_value))
    return card
}

export function create_card(){
    let card: [{rank:string, suit:string}] = {
        rank : give_card_rank(),
        suit: give_card_suit(),
        let value = card_value[rank]
    }
    return card
}

export function print_card(card : string = "", suit : string = "") {
    return `╔═════════╗
║ ${card.padEnd(2)}      ║
║         ║
║    ${suit}    ║
║         ║
║      ${card.padStart(2)} ║
╚═════════╝`
}

//TODO: aghh... you just need to fix the card creation, im gonna commit this but note that THIS DOES NOT WORK
//TODO: AND IT NEEDS FIXING