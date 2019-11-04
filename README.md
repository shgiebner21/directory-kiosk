This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Comments on this repo;

#### `This is a project I am finishing up now.  I stripped out anything that could be considered proprietary so it will not run, but gives a good idea of how I like to approach building applications.`

### `This is a directory touch-screen like in the airport.  It is for a large entertainment facility that has about twenty points of interest for users to select.  There were some interesting problems to solve here;`

#### `The PromotionBoard (probably should have been an Organism, not a Molecule), is for an image slideshow of important upcoming events.  An interesting issue was that when a Point of Interest was clicked on, the information modal interrupted state data and the image slideshow went black until the modal was closed.  I have not yet had time to go back and look into why, but found that using localStorage solved the problem which is why there is that one deviation from React state management.`

#### `The client wanted the Points of Interest on the background map to be clickable and also open the Information Modal, so it was necessary to find a way to have multiple svg assets anywhere on the screen, and be able to draw custom shapes to meet the variety of POI images on the map.`

#### `The Project Manager decided to move away from the custom shapes and just put numbers on the POI items but add animation, so I found a nice animation that allows quite a bit of customization on our part.  I left the custom shapes and the animation as they were both interesting problems to solve.  This is what it looks like, pretty neat visual; https://codepen.io/guerreiro/pen/obhzc`

#### `The API needs for this project are very simple, there is only Read needed, and all data is provided in a single JSON object.`



-----------------------


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
