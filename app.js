// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

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
let pastPollsArray = [];

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
    displayCurrentPoll();
    //clear DOM
    form.reset();
});

// set event listener for "close poll" button to display past polls
closePollButton.addEventListener('click', () => {
    // save a copy of the state (past poll) in an object to be pushed into an array ==> create a makePoll()
    const poll = makePoll();
    // push past poll object into an array so we have a history of past polls
    pastPollsArray.push(poll);
    //reset our state for a new question now that we have saved a copy
    question = '';
    optionATitle = '';
    optionBTitle = '';
    optionAVotes = 0;
    optionBVotes = 0;

    // empty the current poll div (reset the DOM with this new reset state)
    displayCurrentPoll();

    // display a list of all past polls
    displayAllPolls ();
    
});


export function displayCurrentPoll() {
    questionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;
}

export function makePoll() {
    return {
        question: question,
        optionATitle: optionATitle,
        optionBTitle: optionBTitle,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes,
    };
}

export function displayAllPolls() {
  // for each item
    //clear out the text content of the list in the DOM
    pastPollsEl.textContent = '';

    for (let pastPoll of pastPollsArray) {
      // create new elements without mutating outside the loop
        const pastPolls = renderPoll(pastPoll);
        // append container to the DOM Element
        pastPollsEl.append(pastPolls);
    }
}
