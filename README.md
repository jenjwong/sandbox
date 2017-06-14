# sandbox

[click here for board](https://jenjwong.github.io/sandbox/)

X and Y positions are declared on each element's class. Open the console to see the position of the clicked piece.



# Expense Trackr
Generate personalized big-data about spending habits by manually entering expenses!

### Technologies

* esNext
* React
* React-Router
* Redux
* Redux-Promise
* Redux-Forms
* Blueprint Core and Date-Time

* MongoDB
* Node.js
* Express
* Express-Sessions
* Passport

* Concurrently

* Normalizr
* Enzyme
* Jest
* Mocha


* JSDom
* Bluebird Promises
* Google Caja Sanitizer
* Flexbox

Bands Nearby Beta is available on web: http://beta.bandsnearby.com/

Bands Nearby Desktop:
![alt text](https://github.com/jenjwong/bands-nearby/blob/development/css/images/desktop.png "Bands Nearby Desktop")



## Getting Started

Clone the repository and run npm install to get a copy of the project up and running on your local machine. Start the development environment by running npm run dev from the root directory.

--write script for all the installs

### Client-Side Technologies
Expense Trackr uses a handle of open-source libraries to streamline production on the Front-End:

* [Facebook's Create React App](https://github.com/facebookincubator/create-react-app) enables fast initialization of React projects.
* [Blueprint](http://blueprintjs.com/), Palantir's [new React-based UI toolkit](https://medium.com/@palantir/scaling-product-design-with-blueprint-25492827bb4a) is used for elegant consistent styling of UI and has a handful of built-in accessibility features.
* Redux-Forms is used to minimize form boiler plate code



```
create APIKeys.js file in server/workers:

exports.YOUTUBE = 'your-key-here-as-a-string';
exports.LASTFM = 'your-key-here-as-a-string';
```


### Server-Side Technologies
Expense Trackr uses Express and MongoDB server-side.
Flow of control is implemented using ES6 async await; error-handling is managed with middleware and higher order components.

### Database Design
Expense Trackr's database is designed with User and Expense models and uses agregation for complex queries. Each expense is owned by one user. One possible design would be to nest expenses in the User model. Expense Trackr's implements this relationship with by placing User_id as a foreign key on Expenses, allowing for future features developemnt of shared expenses.

### API Design
Expense Trackr uses REST-APIs. Click here for complete documentation.

## Tests

Bands Nearby uses [Jest](https://facebook.github.io/jest/) with [Enzyme](https://github.com/airbnb/enzyme). Enzyme allows shallow rendering of components, making it easy to isolate tests. Shallow rendering in Enzyme renders components one level deep so a component can be tested in isolation of its child components.

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
jest no-cache
```

For self-documenting code, when adding tests, save your files in the directory alongside the file it is testing with the naming convention ComponentName.test.js.

To generate an Istanbul code coverage report run:
```
npm run coverage
```

## Redux Architecture
Bands Nearby manages state with Redux. Fetched data is flattened with Normalizr. The store is designed like a relational database to minimize duplication of data. Concerts are stored in a centralized dictionary and are accessed through arrays that track look-up ids.

Bands Nearby uses higher-order reducers to batch dispatching minimizing unnecessary renders.


## License

This application is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

