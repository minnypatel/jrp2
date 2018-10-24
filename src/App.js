import React from 'react';
import { render } from 'react-dom';
import pf from 'petfinder-client';
import { Pet } from './Pet';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: 'dog' });
    promise.then(console.log(), console.error);
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="doggy" breed="Havanessssse" />
        <Pet name="Pepper" animal="bird" breed="Co" />
        <Pet name="Luna" animal="doggy" breed="Havanessssse" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
