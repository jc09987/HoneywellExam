# React App for Students!

## Environment setup

### 1. Clone the repo 

### 2. Install all the required dependencies

     cd HoneywellExam/
     npm install

#### In Mac OS, if you see an error regarding `node-sass`, you must rebuild the package:

     npm rebuild node-sass


### 3. Start the mock-server

     cd /js/mock-server
     node app.js

#### You should see this string in your terminal: `listening on port 5678!`

### 4. Start the React app

#### 4.1 Local (the mock-server should be up and running)

     npm start

#### This will start a `webpack-dev-server` instance with the app running in: `http://local.mock.com:8080/`

#### 4.2 Generate bundle files

     npm run build

#### This will generate a webpack minified file: `bundle/app.bundle.js` that you can import as a single JS file through CDN.

### 5. Run the components' documentation (storybook)  

#### Run the following command

     npm run styleguide

#### This will start a `react-styleguidist-server` instance with the components' info in: `http://localhost:6060/` (webpack-dev-server should not be running)+

## Linters and Tests

### Run all the tests at once

     cd HoneywellExam/
     npm test

#### This will invoke the 'jest' testing files and the linters (eslint for JS code and csslint for stylesheets):

### Run only the linters

     cd HoneywellExam/
     npm run lint

### Run jest only

     cd HoneywellExam/
     npm run jest
