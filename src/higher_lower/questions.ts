import promptSync from "prompt-sync"

export const input = promptSync()

export function question_continue (){
    while ( true ) {
        let answer: string = input("Continue?: ").toLowerCase().trim()
        if (answer == "yes" || answer === "y") {
            return true
        } else if (answer === "no" || answer === "n") {
            return false
        }
    }
}

export function question_higher_lower () {
    while ( true ) {
        let answer: string = input("Higher or Lower?: ").toLowerCase().trim()
        if (answer == "higher" || answer === "h") {
            return true
        } else if (answer === "lower" || answer === "l") {
            return false
        }
    }
}