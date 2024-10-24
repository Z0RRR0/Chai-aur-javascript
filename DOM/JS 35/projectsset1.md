# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ugj24f?file=index.html)

# Solution code

## project 1 solution

```java script
console.log("Luffy")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
      case 'white':
        body.style.backgroundColor = e.target.id;
      case 'blue':
        body.style.backgroundColor = e.target.id;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
      case 'purple':
        body.style.backgroundColor = e.target.id;
    }

  });
});


```

## project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you e,mpty
//cosnt heigth = parseInt(docucment).querySelector('#height').value

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    // Show the result
    if(bmi < 18.6){
      results.innerHTML = `<span>${bmi}, Under Weight</span>`;
    }else if(bmi >= 18.6 && bmi <= 24.9){
      results.innerHTML = `<span>${bmi}, Normal range</span>`;
    }else{
      results.innerHTML = `<span>${bmi}, Overweight</span>`;
    }
  }
});

```

## project 3 solution code

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  clock.innerHTML = `${date.toLocaleTimeString()
  }`
}, 1000)


```

## project 4 solution code


```javascript
// Steps:

// 1 => randomNumbers: Stores a random number between 1 to 100, Math.random() generates a random float between 0 to 1. Multiplying it by 100 gives a number 0 and 100, and adding 1 ensures it's between 1 and 100.
// parseInt converts it into an integer.

let randomNumbers = parseInt(Math.random() * 100 + 1);

// 2 => These are DOM element references selected using document.querySelector:

// submit: the submit button.
// userInput: The input field where user display the user enter their guess.
// guessSlot: A container to display the user's previous guesses.
// remaining: A container to display how many guesses are left.
// lowOrHi: A container to display message like "Too low" or "Too high."
// startOver: A container where the "Start the new Game" button will be added after the game ends.

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// 3 => Creates an empty <p> element that will later  be used to display the "Start the new game" button.

const p = document.createElement('p');

// 4 => prevGuess: An array to store all previous guesses.
// 		numGuess: Tracks how many guesses the user has made.
// 		playGame: A flag that indicates whether the game is currently being played.

let prevGuess = [];
let numGuess = 0;
let playGame = true;

// ----------------------------------------- Game Logic -----------------------------------------------------------

// 5 => Event Listener for the "Submit" Button

// Event Listner: Adds a 'click' event listener to the submit button.
// 	'e.preventDefault()' prevents the default form submission behaviour.
// 	It capture the user's guess (userInput.value), converts it to an Integer, logs it to the console, and then calls the 'validGuess' function to check if the guess is valid.
console.log(randomNumbers);

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validate(guess);
  });
}

// 6 => Validate the Guess

// Input validation: The guess is checked to ensure it's a valid number between 1 to 100.
// 	If not an alert is known.
// If the guess is valid, it is added to the 'prevGuess' array.
// If the user has made 10 guesses, the game ends with a "Game Over" message.
// Otherwise, it continues to check whether the guess is correct ot not via the 'checkGuess' function.

function validate(guess) {
  if (isNaN(guess)) {
    alert('Enter a valid number');
  } else if (guess < 1) {
    alert('Enter the number greater than 1');
  } else if (guess > 100) {
    alert('Enter the number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      if (guess === randomNumbers) {
        displayMessages(`${guess} => You guessed it right, damm!`);
        endGame();
      } else {
        displayGuess(guess);
        displayMessages(`'Game Over', Random number was ${randomNumbers}`);
        endGame();
      }
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// 7 => Check the Guess

// Compare the guess to the randomly generated number.
// 	If the guess is correct, a success message is displayed and the game ends.
// 	If the guess is too low or too high, the corresponding message is shown to guide the player.

function checkGuess(guess) {
  if (guess === randomNumbers) {
    displayMessages(`${guess} => You guessed it right, damm!`);
    endGame();
  } else {
    if (guess < randomNumbers) {
      displayMessages('Your guess is too low');
    } else {
      displayMessages('Yout guess is too high');
    }
  }
}

// 8 => Display the Guess and Remaining turns

// This function updates the UI:
// 	The input field is cleared after the guess.
// 	The guess is added to the guessSlot display.
// 	The 'numGuess' counter is incremented.
// 	The number of remaining guesses is updated.

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// 9 => Display Messages

// This function displays messages like "Too High" or "Too Low" inside the 'lowOrHi' element.

function displayMessages(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// 10 ===> End the Game

// 	The input field is disabled so the user can't make further guesses.
// 	A "Start new Game" button is created and appended to the 'startOver' container.
// 	The game state is set to 'false' by setting playGame = false.

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);

  remaining.innerHTML = `0`;
  playGame = false;
  startGame();
}

// 11 ===> Start the New Game

// When the "Start new Game" button is clcked:
// 	A new random number is generated.
// 	The previous guesses and counter are reset.
// 	The guess history and remaining guesses display are cleared.
// 	The input field is re-enabled, and the new game starts.

function startGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumbers = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ``;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrHi.innerHTML = ``;
    console.log(randomNumbers);
    playGame = true;
  });
}


```


# Project 5 solution

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="color">
    <table>
    <tr>
      <th>key</th>
      <th>keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>

  </table>
    </div>
  `;
});


```


# Project 6 solutions

```javascript

// generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```

# Project 7 solution