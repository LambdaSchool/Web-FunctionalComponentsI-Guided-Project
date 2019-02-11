import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <ReturnsObject
    greet='Hello'
    person={{ name: 'John' }}
    desiredClass='some-class'
  />,
  document.querySelector('#target7'),
);


// Demonstrate a component that returns null
function ReturnsNull({ name }) {
  return null;
}

// Demonstrate a component that returns empty string
function ReturnsEmptyString({ number }) {
  return number > 10
    ? 'Yay'
    : '';
}

// Demonstrate a component that returns a string
function ReturnsString() {
  return 'Hello World';
}

// Demonstrate a component that returns object
function ReturnsObject({ person, greet, desiredClass }) {
  // return person; // ERROR!!!
  return (
    <div className={desiredClass}>
      {`${greet} ${person.name}!`}
    </div>
  );
}

// Demonstrate a component that returns a single child element,
// both HTML element or another React element
function ReturnsElement() {

}

// Demonstrate a component that returns an array
function ReturnsArray() {

}

// Demonstrate a component that returns multiple children
function ReturnsMultipleChildren() {

}

// Demonstrate injecting a string through props and interpolating it
function TakesData({ data }) {

}

// Demonstrate injecting a number through props and using it
function TakesNumber({ data }) {

}

// Demonstrate injecting an array through props and iterating over it
function TakesArray({ data }) {

}

// Build a component that takes a number, and returns an h1
// saying whether you passed an odd or even number.
function EvenOrOdd({ data }) {

}
