import { GenerateRandomNumbers } from './../utils/setup';
import { ICard } from '../classes/card';
import { Api } from '../utils/constants';

export const getRandomHand = async (): Promise<ICard[]> => {
    const randomHand: ICard[] = [];
    const randomNumbers = GenerateRandomNumbers();
    for (let i = 0; i < randomNumbers.length; i++) {
        const cardApi = `${Api}/cards/${randomNumbers[i]}`;
        await fetch(cardApi).then(res => res.json()).then(card => {
            const cardObj = {
                id: card.id, name: card.name, top: card.stats.formatted.top,
                right: card.stats.formatted.right, bottom: card.stats.formatted.bottom,
                left: card.stats.formatted.left, image: card.image,
            }
            randomHand.push(cardObj);
        }).catch(
            err => console.log(`Error: ${err}`),
        );
    }
    console.log(randomHand);
    return randomHand;
}


