# Udacity Portfolio with Socket.io Chat Feature

### Technologies

#### Client
* ES6, React, Socket.io

#### Server
* Node.js, Express

#### Testing
* Enzyme, Jest, Mocha, Codecept.js

---
## Mobile:
![Mobile](https://github.com/jenjwong/udacity-sockets/blob/master/client/src/images/mobileScreen.png)
---
---
## Desktop:
![Desktop](https://github.com/jenjwong/udacity-sockets/blob/master/client/src/images/largeScreen.png)
---

## Getting Started

To get a copy of the project up and running on your local machine clone the repository and in both the root directory and client directory execute:
```
npm i
```
From the root directory start the development environment by running:
```
npm run dev
```
This command uses the concurently module to start the Express server and run the React environment. 

To streamline development the project uses [Facebook's Create React App](https://github.com/facebookincubator/create-react-app)

### Features
- provides contextual help explaning supported functions and comparators
- if user enters invalid invalid input typeahead displays a help message with a link to mock-documentation
- uses a reusable regular expressions helper function to match the start of words
- input field always stays in focus so users don't have to click to continue typing
- auto-completes today's date if user starts function with @created_at

## Tests

Expense Trackr implements unit and end-to-end testing with Mocha, Enzyme, Jest, and Codecept.js.

React components are tested with [Jest](https://facebook.github.io/jest/) with [Enzyme](https://github.com/airbnb/enzyme). Enzyme allows shallow rendering of components, making it easy to isolate tests. Shallow rendering in Enzyme renders components one level deep so a component can be tested in isolation of its child components. 

To execute the client test suite, in the client directory run:
```
npm run test
```

Codecept.js, a JavaScript Selenium wrapper, stores pictures of browser state during failed tests in endToend.output. With your dev environment running execute:
```
npm run selenium-start
```
and
```
npm run headless-tests
```
This will start the selenium server and run your Codecept tests.

Mongo models and operations are tested with Mocha and stub-data. From the root directory execute:
```
npm run test-db
```
