// import functions and grab DOM elements
import { renderPastPoll } from './render-utils.js';

const form = document.querySelector('form');

const optionAAddButton = document.querySelector('#option-a-add');
const optionBAddButton = document.querySelector('#option-b-add');
const optionAUndoButton = document.querySelector('#option-a-undo');
const optionBUndoButton = document.querySelector('#option-b-undo');

const questionEl = document.querySelector('#poll-question');
const optionATitleEl = document.querySelector('#option-a-title');
const optionBTitleEl = document.querySelector('#option-b-title');
const optionAVotesEl = document.querySelector('#option-a-votes');
const optionBVotesEl = document.querySelector('#option-b-votes');

const closePollButton = document.querySelector('#close-poll');

const pastPollsEl = document.querySelector('#past-polls');

// let state
let optionAVotes = 0;
let optionBVotes = 0;
let optionATitle = '';
let optionBTitle = '';
let question = '';

// set event listeners 

// increment or decrement the vote count for option A & option B in the current poll
optionAAddButton.addEventListener('click', () => {
    optionAVotes++;
    optionAVotesEl.textContent = optionAVotes;
});

optionBAddButton.addEventListener('click', () => {
    optionBVotes++;
    optionBVotesEl.textContent = optionBVotes;
});

optionAUndoButton.addEventListener('click', () => {
    optionAVotes--;
    optionAVotesEl.textContent = optionAVotes;
});

optionBUndoButton.addEventListener('click', () => {
    optionBVotes--;
    optionBVotesEl.textContent = optionBVotes;
});

// grab data (3 inputs & "start poll" button) from HTML forms
// set event listener for "start poll" button
form.addEventListener('submit', (e) => {
    //prevent weird behavior from happening  
    e.preventDefault();
    
    const data = new FormData(form);
    //update state
    question = data.get('poll-question');
    optionATitle = data.get('poll-option-a');
    optionBTitle = data.get('poll-option-b');

    //display current polls
    questionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;
});


// set event listener for "close poll" button to display past polls
closePollButton.addEventListener('click', () => {






});




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
