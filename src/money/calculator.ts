import { readFileSync} from "node:fs";

export const text = readFileSync("../money/wallet.json", "utf8");
export const wallet = JSON.parse(text)

export function bet_double(){
    return
}