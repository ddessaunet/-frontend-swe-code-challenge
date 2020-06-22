## Frontend Software Engineer Code Challenge, Finalis

Welcome to the Finalis' Frontend code challenge!

You are given 5 days for this challenge. It is perfectly OK to submit an incomplete solution! We are not looking for a 100% finished app, just to know how your coding skills and practices are 😁

### Context

### Your mission

This project displays a list of trivia questions with two arrow buttons to the right.
Some basic styling is applied, and all styles live in the App.css file. You will find the project's top-level component in App.js.

The challenge will be to add the following functionality to this React app. Please complete these items in order:

1. Add the ability to click on an item in the trivia list to select that item. You can only select one item at a time. The selected item should have a black border and a black background behind the list number.

2. Add functionality to the existing arrow buttons so that clicking the up arrow will select the previous item in the trivia list, and clicking the down arrow will select the next item in the trivia list. If the first or last item in the list is selected, and the arrow is pressed that would make the selection go 'out of bounds', we should just leave the selection where it is.

3. Add keyboard functionality to the selection. Allow the user to use the up and down arrow keys on the keyboard to change the selected item in the trivia list. This should behave similar to step 2.

4. Add scrolling functionality to the selection. If the user uses the keyboard or arrow buttons to select an item that is currently off the screen, scroll the screen to keep the selected item in view.

### Running the app locally

There's an already configured React app on this repository. To get it up and running on your local enviorment you just have to:

1. Clone this repo in your machine.
2. Install the app dependencies `yarn` or `npm install`.
3. Start the app by running `yarn start` or `npm start`.

### Considerations

- We do not expect 'perfect' code or 100% completion. We are looking for a functional solution that displays familiarity with React and API management.
- Please try to commit your changes. Its important for us to have a consistent Git commit history, easy to follow and understand.
- Try to write easily to understood and communicative code (eg. comments, variable names, etc).
- Please adjust or add any styling as necessary to the App.css file, but styling is not the focus of this challenge.
- Feel free to modify the existing code or component structure as much or as little as you see fit.
- You are welcome to use the internet to look up anything you need to complete the challenge.

### Useful resources

- [React documentation](https://reactjs.org/)
- [GraphQL documentation](https://graphql.org/)
- [Apollo GraphQL documentation](https://www.apollographql.com/)
- [Apollo Client documentation](https://www.apollographql.com/docs/react/)
- [Countries API code and docs](https://github.com/lennertVanSever/graphcountries)
