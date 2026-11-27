import { readFileSync} from "node:fs";
import { input } from "../higher_lower/questions.ts"

export const text = readFileSync("../money/wallet.json", "utf8");
export const wallet = JSON.parse(text)

function check_bet(bet: number) {
    if (bet < 1) {
        console.log("bet is less than 1")
        return false
    } else if (isNaN(bet)) {
        console.log("bet is not a number")
        return false
    } else if (typeof bet === "number") {
        return true
    } else {
        console.log("something went wrong with bet checking")
        return false
    }
}

function check_bet_with_wallet(user_bet: number){
    if (user_bet > wallet.balance){
        console.log("bet is bigger than current balance")
        return false
    } else if (user_bet <= wallet.balance){
        console.log("bet is correct")
        return true
    } else{
        console.log("something went wrong with checking bet with wallet")
        return false
    }
}

export function ask_bet() {
    while (true) {
        console.log("how much money would you like to bet?" + "\n" + `current money - > ${wallet.balance}`)
        let bet = Number(input(": "))
        if (check_bet(bet)) {
            if (check_bet_with_wallet(bet)) {
                return bet
            }
        }
    }
}

ask_bet()

// export function bet_double(){
//     return
// }

// export function write_new_money() {
//     return
// }