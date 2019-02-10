import React from 'react';
import ReactDOM from 'react-dom';

// 1 ============================================= React.CreateElement

const someElement = <div id='niceDiv' className='nice div' data-tab='6'>Hello World</div>;
// ReactDOM.render(someElement, document.querySelector('#target1'));
// re-write someElement using React.CreateElement


const anotherElement = <div aria-label='screen reader label'>Something interesting</div>;
// ReactDOM.render(anotherElement, document.querySelector('#target2'));
// re-write someElement using React.CreateElement


const yetAnother = <button onClick={() => console.log('you clicked!')}>Click me!</button>;
// ReactDOM.render(yetAnother, document.querySelector('#target3'));
// re-write someElement using React.CreateElement
