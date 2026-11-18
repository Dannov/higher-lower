import { values, print_card} from "../assets/card.ts"
import {sample} from "lodash-es";
import promptSync from "prompt-sync"

const input = promptSync()

function question () {
    while ( true ) {
        let higher_lower_answer: string = input("Higher or Lower?: ").toLowerCase().trim()
        if (higher_lower_answer == "higher" || higher_lower_answer === "h") {
            return true
        } else if (higher_lower_answer === "lower" || higher_lower_answer === "l") {
            return false
        }
    }
}

function higher_lower(){
    while ( true ) {

        
        }
    }
}

higher_lower()

