import { values , print_card , create_card} from "../card/card.ts"
import {sample} from "lodash-es";
import promptSync from "prompt-sync"

const input = promptSync()

function question () {
    while ( true ) {
        let answer: string = input("Higher or Lower?: ").toLowerCase().trim()
        if (answer == "higher" || answer === "h") {
            return true
        } else if (answer === "lower" || answer === "l") {
            return false
        }
    }
}

function higher_lower(){
    while ( true ) {
        let card_now = create_card()
        let card_next = create_card()
        console.log(print_card(card_now))
        console.log(print_card(card_next))
        break

    }
}

higher_lower()

