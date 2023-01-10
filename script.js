const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const showAnswer = document.querySelector('.check');
const pass = document.querySelector('.pass');
const fail = document.querySelector('.fail');

async function getFlashcards() {
  const response = await fetch('/flashcards/');
  const data = await response.json();
  return data;
}

getFlashcards().then(data => {
  const flashcard = data[Math.floor(Math.random() * data.length)];
  term.innerHTML = flashcard.term;
  definition.innerHTML = flashcard.definition;
});


function getRandomWord(data) {
  const flashcard = data[Math.floor(Math.random() * data.length)];
  term.innerHTML = flashcard.term;
  definition.innerHTML = flashcard.definition;
}



showAnswer.addEventListener('click', function () {
  // Display the definition
  definition.style.display = 'block';

  // Show the "Next" button
  pass.style.display = 'block';
  fail.style.display = 'block';

  // Hide the "Show Answer" button
  showAnswer.style.display = 'none';
});

function handleButtonClick(clickedButton) {
  // Get a new word and definition
  getRandomWord();

  // Hide the definition
  definition.style.display = 'none';

  // Hide the clicked button
  clickedButton.style.display = 'none';

  // Hide the other button
  if (clickedButton === pass) {
    fail.style.display = 'none';
  } else {
    pass.style.display = 'none';
  }

  // Show the "Show Answer" button
  showAnswer.style.display = 'block';
}

pass.addEventListener('click', function () {
  handleButtonClick(pass);
});

fail.addEventListener('click', function () {
  handleButtonClick(fail);
});