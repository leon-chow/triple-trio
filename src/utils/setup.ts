import { HandSize } from "./constants";

export const GenerateRandomNumbers = (): number[] => {
    const randomNumbers: number[] = [];
    while (randomNumbers.length < HandSize) {
        const num = Math.round(Math.random() * (346 - 1) + 1);
        if (!randomNumbers.includes(num)) {
            randomNumbers.push(num);
        }
    }
    return randomNumbers;
}