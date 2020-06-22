## Frontend Software Engineer Code Challenge, Finalis

Welcome to the Finalis' Frontend code challenge!

You are given 5 days for this challenge. It is perfectly OK to submit an incomplete solution! We are not looking for a 100% finished app, just to know how your coding skills and practices are 😁

### Context

Finalis is a modern broker-dealer and deal tech platform for investment bankers, placement agents, and fintechs. We give our customers a complete web app composed mainly by 2 parts: a compliance and supervisory platform and a deal-administration platform, integrated with a VDR and Q&A section.

We are looking for an extension of our deal-administration platform which allows our clients to select among multiple options, to which countries their deals are subscribed.

### Your mission

You will be in charge of developing the main layout of the client-side of the extension.

We already have the countries list UI, and we ask you to:

1. Develop a country search engine, which filters the main list of countries as a minimum according to the following 3 parameters: name, capital and subregion. This search engine should be activated automatically after typing at least 3 letters. It must have a delay of 1 second before executing the search.

2. When clicking on the "Details" button for each country in the main list, a summary dropdown box of the country must be displayed indicating its region, sub-region and capital. This box should be displayed under the row of the country.

3. When clicking on a country in the main list, the user should be redirected to a details page, in which the name of the country, its top-level domain, its region, sub-region, timezone, currency in which it is marketed and the languages spoken. This detail page should allow the user to return to the list of countries.

Some basic styling is applied, and all styles live in the `src/app/App.css` file. You will find the project's top-level component in `src/app/App.js`.

### Some tech indications

- All the API documentation can be found by clicking on the "Docs" tab of the [API GraphQL playground](https://countries-274616.ew.r.appspot.com/?query=query%20%7B%0A%09Country%20%7B%0A%20%20%20%20name%0A%20%20%20%20%23%20check%20the%20docs%20for%20more%20info%0A%20%20%7D%0A%7D%0A)
- Please manage in memory all the data related to the country search engine.
- When accessing the details UI of a country, you must call the queries of `Currency`,`Timezone` and `Region` of the GraphQL API.

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
