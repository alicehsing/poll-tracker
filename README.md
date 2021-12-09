## The Golden Rule

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this?**
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model.
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
  - What are the key/value pairs?
  - What arrays might you need?
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

## HTML Setup & Events

-6 buttons:

1) option A add button
    Why? 💥💥💥 Add event listener to increment the vote count for option A in the current poll
2) option B add button
    Why? 💥💥💥 Add event listener to increment the vote count for option B in the current poll
3) option A subtract/undo button
  Why? 💥💥💥 Add event listener to decrement the vote count for option A in the current poll
4) option B subtract/undo buttons
  Why? 💥💥💥 Add event listener to decrement the vote count for option B in the current poll
5) create poll form
  Why? Add 'submit' listener to (not a click listener) to the form itself!

- three inputs (question, option 1, option 2)
  Why? Figure out the user's question and options
  💥💥💥 On submit, update the current poll question and options, and reflect that in the DOM

6) 1 'close poll' button
  Why?
  💥💥💥

- Append the current poll to the past polls state []
- "Update the list"
- clear DOM of the list
- Use a for loop to loop through all past polls, create some DOM and display each past poll in the list
- Clear out/reset current poll state and DOM.
  
-1 empty div for current poll section
  Why? a bunch of empty divs that we will inject state into (question, options, and vote totals)
-1 empty div for closed polls history/list (for appending to)
  Why? A place to put the history
