import { Card,  give_card_suit , give_card_rank } from "../card/card.ts"
import { question_continue , question_higher_lower } from "./questions.ts"
//import { text, wallet } from "../money/wallet.ts"

export function main_game() {
    let card_now = new Card(give_card_suit(), give_card_rank())
    while (true) {
        let card_next = new Card(give_card_suit(), give_card_rank())
        console.log(card_now.print_card())
        let answer_higher_lower: boolean = question_higher_lower()
        if (answer_higher_lower && card_now.value < card_next.value) {
            console.log("Nice you guessed correctly!" + "\n" + "card was: ")
            console.log(card_next.print_card())
        } else if (!answer_higher_lower && card_now.value > card_next.value) {
            console.log("Nice you guessed correctly!" + "\n" + "card was: ")
            console.log(card_next.print_card())
        } else if (card_now.value === card_next.value) {
            console.log("Tie, game continues" + "\n" + "card was: ")
            card_next.print_card()
            card_now = card_next
            continue
        } else {
            console.log("Sorry your guess was incorrect :c" + "\n" + "card was: ")
            console.log(card_next.print_card())
        }
        let answer_continue = question_continue();
        if (answer_continue) {
            card_now = card_next
        } else{
            break
        }
    }
}
