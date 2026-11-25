import { } from "../card/card.ts"
import { input , question_continue , question_higher_lower } from "./questions.ts"
import { text, wallet } from "../money/calculator.ts"


function higher_lower() {
    while (true) {
        let card_now: string | undefined = give_card_rank()
        let card_next: string | undefined = give_card_rank()
        if (card_now != undefined && card_next != undefined) {
            console.log(print_card(card_now))
            let answer_higher_lower: boolean = question_higher_lower()
            if (answer_higher_lower && card_value[card_now] < card_value[card_next]) {
                console.log("Nice you guessed correctly!\ncard was: ")
                console.log(print_card(card_next))
            } else if (!answer_higher_lower && card_value[card_next] > card_value[card_next]) {
                console.log("Nice you guessed correctly!\ncard was: ")
                console.log(print_card(card_next))
            } else {
                console.log("Sorry your guess was incorrect :c\ncard was: ")
                console.log(print_card(card_next))
            }
            let answer_continue = question_continue();
            if (!answer_continue) {
                break
            }
        } else {
            console.log("Something went wrong :c ")
            break
        }
    }
}

higher_lower()