import { ICard } from '../classes/card';
import { HandSize } from '../utils/constants';
import { Api } from '../utils/constants';

export const getRandomHand = async (): Promise<ICard[]> => {
    const randomHand: ICard[] = [];
    const randomNumbers = generateRandomNumbers();
    for (let i = 0; i < randomNumbers.length; i++) {
        const cardApi = `${Api}/cards/${randomNumbers[i]}`;
        await fetch(cardApi).then(res => res.json()).then(card => {
            const cardObj = {
                id: card.id, name: card.name, top: card.stats.formatted.top,
                right: card.stats.formatted.right, bottom: card.stats.formatted.bottom,
                left: card.stats.formatted.left, image: card.image,
            }
            randomHand.push(cardObj);
        });
    }
    console.log(randomHand);
    return randomHand;
}

const generateRandomNumbers = (): number[] => {
    const randomNumbers: number[] = [];
    while (randomNumbers.length < HandSize) {
        const num = Math.round(Math.random() * (346 - 0) + 0);
        if (!randomNumbers.includes(num)) {
            randomNumbers.push(num);
        }
    }
    return randomNumbers;
}
