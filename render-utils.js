export function renderPoll(pastPollData) {
     // create new elements without mutating outside the loop
    const container = document.createElement('div');
    const pQuestionEl = document.createElement('p');
    const optionADiv = renderOption(pastPollData.optionATitle, pastPollData.optionAVotes);
    const optionBDiv = renderOption(pastPollData.optionBTitle, pastPollData.optionBVotes);

    container.append(pQuestionEl, optionADiv, optionBDiv);
    container.classList.add('past-poll-data');

    pQuestionEl.textContent = `Question: ${pastPollData.question}`;

    return container;

}

export function renderOption(option, votes) {
    const pastPollDiv = document.createElement('div');
    const optionDiv = document.createElement('p');
    const voteDiv = document.createElement('p');

    optionDiv.textContent = option;
    voteDiv.textContent = votes;
    
    pastPollDiv.append(optionDiv, voteDiv);
    return pastPollDiv;
}