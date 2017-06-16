# sandbox

[click here for board](https://jenjwong.github.io/sandbox/)

X and Y positions are declared on each element's class. Open the console to see the position of the clicked piece.



# Expense Trackr
Generate personalized big-data about spending habits by manually entering expenses!

### Technologies

#### Client
* ES6, React, React-Router, Redux, Redux-Thunk, Redux-Forms, Blueprint, Flexbox

#### Server
* Node.js, Express, Express-Sessions, Passport, MongoDB, Mongoose, Concurrently

#### Testing
* Enzyme, Jest, Mocha, Codecept.js

Bands Nearby Beta is available on web: http://beta.bandsnearby.com/

Bands Nearby Desktop:
![alt text](https://github.com/jenjwong/bands-nearby/blob/development/css/images/desktop.png "Bands Nearby Desktop")

## Getting Started

To get a copy of the project up and running on your local machine clone the repository and from the root directory run npm install-packages. Start the development environment by running npm run dev from the root directory. This command starts the webpack dev-server, the express server and starts the mongo daemon.

### Client-Side Technologies
To streamline Front-End developement Expense Trackr uses:

* [Facebook's Create React App](https://github.com/facebookincubator/create-react-app)
* [Blueprint](http://blueprintjs.com/), Palantir's [new React-based UI toolkit](https://medium.com/@palantir/scaling-product-design-with-blueprint-25492827bb4a) is used for elegant consistent styling of UI and has a handful of built-in accessibility features.
* Redux-Forms is used to minimize form boiler plate code

### Server-Side Technologies
Expense Trackr uses Express and MongoDB server-side.
Flow of control is implemented using ES6 async await; error-handling is managed with middleware and higher order components.

### Database Design
Expense Trackr's database has a User and Expense model and uses agregation for complex queries. Expense Trackr implements this relationship with by placing User_id as a foreign key on Expenses, allowing for future feature developemnt of shared expenses.

### API Design
Expense Trackr uses REST-APIs. Click here for complete documentation (comming soon!)

### Routing
Expense Trackr uses React-Router 4. Auth is handled on the backend and API's are protected server-side. The client routes users who are not signed-in to login page and API endpoints only accept calls from logged-in users.

## Tests

Expense Trackr implements unit and end-to-end testing with Mocha, Enzyme, Jest, and Codecept.js.

Codecept.js, a JavaScript Selenium wrapper is used for end-to-end testing. Codecept.js stores pictures of browser state during failed tests in endToend.output. With your server and mongo deamon started run:

```
npm run headless-tests
```

React components are testsed with [Jest](https://facebook.github.io/jest/) with [Enzyme](https://github.com/airbnb/enzyme). Enzyme allows shallow rendering of components, making it easy to isolate tests. Shallow rendering in Enzyme renders components one level deep so a component can be tested in isolation of its child components.

To execute the test suite run:
```
npm run test
```

Static components are tested using Jest Snapshots. Snapshot tests render HTML markup and compare the current version to the previous version. The first time you add a Snapshot test create a baseline for comparison by running:

```
npm run test-update
```

Jest caches your Babel environment. If you update your Babel environment to clear the cache run:

```
jest no-cacheless
```
Mongo models and operations are tested with Mocha and stub-data.

## Redux Architecture
Expense Trackr manages state with Redux. The store is designed like a relational database to minimize duplication of data. Expenses are stored in a centralized dictionary and are accessed through arrays that track look-up indexes.


## License

This application is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

