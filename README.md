# Typeahead

### Technologies

#### Client
* ES6, React

#### Testing
* Enzyme, Jest, Mocha, Codecept.js

---
## Expense Trackr Dash:
![expenseTrackr](https://github.com/jenjwong/expenseTrackr/blob/development/client/public/etrackr.png)
---

## Getting Started

To get a copy of the project up and running on your local machine clone the repository and in the root directory execute:
```
npm i
```

Start the development environment by running:
```
npm run start
```

### Client-Side Technologies
To streamline development the project uses [Facebook's Create React App](https://github.com/facebookincubator/create-react-app)

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
