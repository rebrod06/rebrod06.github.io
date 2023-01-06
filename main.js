// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];

// add HTML piano key references to notes array
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

/*
// EXTRA CHALLENGE: highlight letters
const letters = ["letter-note-one", "letter-note-two", "letter-note-three", "letter-note-four", "letter-note-five", "letter-note-six", "word-optional"];
const letterNotes = [];

// add letter elements' children to array (i.e. the actual letter. e.g. 'D', 'A') - NOT WORKING
letters.forEach(function(letter){
  letters.push(document.getElementById(letter).firstElementChild.innerHTML);
})
*/

/* Event Functions*/
// Functions that change the color of the keys when pressed down
const keyPlay = function(event) {
  event.target.style.backgroundColor = 'gray';
}
const keyReturn = function(event) {
  event.target.style.backgroundColor = '';
}

/* Event Handler For Keys*/
// Note: we're creating a function that contains both event handlers (mousedown and mouseup) for the event/target 'note'. As a function, we can pass it as a parameter in a forEach iterator on the array 'notes'. That way each note in notes will know how to handle a click of a mouse. 
const playNote = function(note) {
  note.addEventListener('mousedown', keyPlay);
  note.addEventListener('mouseup', keyReturn);
} 

// Add event handler to each note in notes array
notes.forEach(playNote);

/*
// EXTRA CHALLENGE: highlights letters with each piano key pressed
function highlightLetter(note) {
  // retrieve the note's letter from its child element
  let noteLetter = note.firstElementChild.innerHTML;
  if(note.firstElementChild.innerHTML === letter.firstElementChild.innerHTML) {}
}
*/

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  //change the next line statement
  nextTwo.hidden = false;
  nextOne.hidden = true;
  //update the music notes for letter notes 5 and 6
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
  //update the next line statement
  nextThree.hidden = false;
  nextTwo.hidden = true;
  //update the words for 5 and 6
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  //display optional song box
  lastLyric.style.display = 'inline-block';
  // update the music notes for letter notes 3, 4, 5, and 6
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
  //update the next line statement
  startOver.hidden = false;
  nextThree.hidden = true;

  //update words for 5 and 6; remove optional
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  lastLyric.style.display = 'none';

  //update letters for 1, 2, 3, 4, 5, 6
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}
// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// EXTRA CHALLENGE 1: Can you highlight the corresponding word and note boxes when the correct piano key is clicked? 

// EXTRA CHALLENGE 2: Can you highlight the next line box when the last note is played? Can you make it unclickable until the last note is played?

// EXTRA CHALLENGE 3: Can you automatically update the song box when the last note is played?