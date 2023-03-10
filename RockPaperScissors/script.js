const player_score = document.querySelector('.player-score > p');
const computer_score = document.querySelector('.computer-score > p');

const player_hand = document.querySelector('.player-hand');
const computer_hand = document.querySelector('.computer-hand');

const stopBtn = document.getElementById('stop');

const comp_choice = ['rock', 'paper', 'scissors'];

let player_curr_score = 0;
let computer_curr_score = 0;

const choice = (player_pick) => {

    setTimeout(() => {
        compare_hands(player_pick);

        player_hand.src = `./assests/${player_pick}.png`;
        computer_hand.src = `./assests/${computer_pick}.png`;
    }, 2000)

    player_hand.style.animation = "shakePlayer 2s ease";
    computer_hand.style.animation = "shakeComputer 2s ease";
}

const compare_hands = (player_pick) => {
    let rand_ind = Math.floor(Math.random() * (3));
    let computer_pick = comp_choice[rand_ind];

    if (player_pick === computer_pick) return;

    if ((player_pick === 'rock' && computer_pick === 'scissors') || 
    (player_pick === 'paper' && computer_pick === 'rock') || (player_pick === 'scissors' && computer_pick === 'paper')) {

        player_curr_score = player_curr_score + 1;
        player_score.textContent = player_curr_score;
    }
    else {
        computer_curr_score = computer_curr_score + 1;
        computer_score.textContent = computer_curr_score;
    }
}

stopBtn.addEventListener('click', () => {
    if (player_curr_score == computer_curr_score) {
        alert('game tied');
    }
    else if (player_curr_score > computer_curr_score) {
        alert('player won!!');
    }
    else {
        alert('computer won!');
    }

    player_curr_score = 0;
    computer_curr_score = 0;

    player_score.textContent = player_curr_score;
    computer_score.textContent = computer_curr_score;

    player_hand.src = `./assests/rock.png`;
    computer_hand.src = `./assests/rock.png`;
})

