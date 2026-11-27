import promptSync from "prompt-sync"
import {select} from "@inquirer/prompts";

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

export async function main_menu () {
    let answer = await select({
        message: "Welcome to Higher Lower\nchoose one option:",
        choices: [
            {name: "play", value: "play"},
            {name: "add funds", value: "add funds"},
            {name: "show balance", value: "show balance"},
            {name: "exit", value: "exit"},
        ],
    })
    if (answer == "play") {
        return "play"
    } else if (answer == "add funds") {
        return "add funds"
    } else if (answer == "show balance") {
        return "show balance"
    } else if (answer == "exit") {
        return "exit"
    }
}