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

export class Card {
    suit: string
    rank: string
    value: number

    constructor(suit: string, rank: string) {
        this.suit = suit
        this.rank = rank
        this.value = card_value[rank]
    }
    print_card():string {
        return `╔═════════╗
║ ${this.rank.padEnd(2)}      ║
║         ║
║    ${this.suit}    ║
║         ║
║      ${this.rank.padStart(2)} ║
╚═════════╝`
    }
}

export function give_card_suit(): string {
    let suit = sample(suits)
    if (suit === undefined) {
        throw new Error("list of suits not found")
    }
    return suit
}

export function give_card_rank(): string{
    let card: string | undefined = sample(Object.keys(card_value))
    if (card === undefined) {
        throw new Error("dictionary of cards not found")
    }
    return card
}
