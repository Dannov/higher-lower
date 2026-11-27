import { main_game } from "./game.ts"
import { main_menu } from "./questions.ts"
//import { text, wallet } from "../money/calculator.ts"

async function main() {
    while (true) {
        let answer: string | undefined = await main_menu()
        if (answer === "play") {
            main_game()
        } else if (answer === "add funds") {
            console.log("in mid development, please be patient")
        } else if(answer === "show balance"){
            console.log("in mid development, please be patient")
        } else if (answer === "exit") {
            console.log("game has been closed")
            return
        }
    }
}

main()