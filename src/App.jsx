import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home, About, Topics } from './Child';

class App extends React.Component {
  componentDidMount() {
    // const promise = petfinder.breed.list({ animal: 'dog' });
    // promise.then(console.log(), console.error);
    console.log('hioadhfoiasdfh');
  }

  render() {
    return (
      <div>
        <h1>App.js</h1>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">HII</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
