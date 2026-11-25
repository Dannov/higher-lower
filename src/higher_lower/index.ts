import { values , print_card , give_card_value} from "../card/card.ts"
import promptSync from "prompt-sync"
import { text, wallet } from "../money/calculator.ts"

const input = promptSync()

function question_continue (){
    while ( true ) {
        let answer: string = input("Continue?: ").toLowerCase().trim()
        if (answer == "yes" || answer === "y") {
            return true
        } else if (answer === "no" || answer === "n") {
            return false
        }
    }
}

function question_higher_lower () {
    while ( true ) {
        let answer: string = input("Higher or Lower?: ").toLowerCase().trim()
        if (answer == "higher" || answer === "h") {
            return true
        } else if (answer === "lower" || answer === "l") {
            return false
        }
    }
}

function higher_lower() {
    while (true) {
        let card_now: string | undefined = give_card_value()
        let card_next: string | undefined = give_card_value()
        if (card_now != undefined && card_next != undefined) {
            console.log(print_card(card_now))
            let answer_higher_lower: boolean = question_higher_lower()
            if (answer_higher_lower && values[card_now] < values[card_next]) {
                console.log("Nice you guessed correctly!\ncard was: ")
                console.log(print_card(card_next))
            } else if (!answer_higher_lower && values[card_next] > values[card_next]) {
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