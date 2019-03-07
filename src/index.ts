import './styles.css';
import { getRandomInt } from "./rng";

const secretNumber = getRandomInt(1, 6);
console.log(secretNumber);

const squares = document.querySelectorAll('.square');

squares.forEach((s, i) => {
    if ((i + 1) === secretNumber) {
        (<HTMLDivElement>s).dataset.secret = 'true';
    }
})

squares.forEach(s => s.addEventListener('click', handleClick))

function handleClick() {
    const div = this as HTMLDivElement;
    if (div.dataset.secret) {
        div.classList.add('winner');
        squares.forEach(s => s.removeEventListener('click', handleClick));
    } else {
        div.classList.add('loser');
    }
} 