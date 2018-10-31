import React from 'react';
import { render } from 'react-dom';
import { Child } from './Child';

class App extends React.Component {
  componentDidMount() {
    // const promise = petfinder.breed.list({ animal: 'dog' });
    // promise.then(console.log(), console.error);
  }

  render() {
    return (
      <div>
        <h1>App.js</h1>
        <Child message="passed from app" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
