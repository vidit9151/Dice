'use strict';
//⭐selecting elements in satrt and storignt oa  vriable to reduce repeatition
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const btn_new = document.querySelector('.btn--new'),
  btn_roll = document.querySelector('.btn--roll'),
  btn_hold = document.querySelector('.btn--hold');

//when we use getelemntby id instead of queryselector we dont need hashes only selecotr fucntions like in css and query setor needs . for calss and # for id⭐⭐⭐⭐⭐
let playing = true;
let score0_Element = document.querySelector('#score--0');
let score1_Element = document.getElementById('score--1');
let dice_Element = document.querySelector('.dice'); //⭐⭐⭐Another way to get an element by the id
score0_Element.textContent = 0;
score1_Element.textContent = 0;
let active_player = 0; //TO get what player is active⭐⭐
let current_Score = 0;
const scores = [0, 0];
dice_Element.classList.add('hidden');
btn_roll.addEventListener('click', function () {
  if (playing) {
    //1.Need to start by generating a ranom dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    // 2.we display the dice_Element
    dice_Element.classList.remove('hidden');
    dice_Element.src = `dice-${dice}.png`;
    console.log(dice);
    //we selecter source elemnt in img using .src and we used dice number using $ to as we have img name as dice 1 ice 2 etc⭐⭐⭐⭐
    // 3.check for if roll is 1
    if (dice !== 1) {
      //add dice to current score
      current_Score += dice;
      document.querySelector(`#current--${active_player}`).textContent =
        current_Score;
    } else {
      document.querySelector(`#current--${active_player}`).textContent = 0;
      current_Score = 0;
      // 4.switch to next player
      //making current score 0 if dice number==1
      active_player = active_player === 0 ? 1 : 0; //Switchingplayer ⭐⭐⭐⭐⭐
      player0el.classList.toggle('player--active');
      player1el.classList.toggle('player--active'); //⭐⭐⭐⭐⭐⭐⭐⭐toggle adds class if its not there and removes it if its there its like a raio button or like a switch like if its on if cnt be off at the same time
    }
  }
});
btn_hold.addEventListener('click', function () {
  if (playing) {
    //Add score to score board of active player
    scores[active_player] += current_Score;
    document.getElementById(`score--${active_player}`).textContent =
      scores[active_player];
    //check if score is atleast 100
    if (scores[active_player] >= 100) {
      playing = false;
      dice_Element.classList.add('hidden');
      document
        .querySelector(`.player--${active_player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove('player--active');
    }
    //switch to player
    else {
      document.querySelector(`#current--${active_player}`).textContent = 0;
      current_Score = 0;

      active_player = active_player === 0 ? 1 : 0;
      player0el.classList.toggle('player--active');
      player1el.classList.toggle('player--active');
    }
  }
});

let overlay = document.querySelector('.overlay'),
  modal = document.querySelector('.modal');
document.querySelector('.btn--how--to').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
});
let closeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};
overlay.addEventListener('click', closeModal);
document.querySelector('.close-modal').addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);

btn_new.addEventListener('click', function () {
  document.getElementById('current--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  dice_Element.classList.add('hidden');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
  active_player = 0;
});
