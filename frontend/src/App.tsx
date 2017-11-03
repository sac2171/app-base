import * as React from 'react';
import './App.css';

import 'whatwg-fetch'
const logo = require('./logo.svg');

class App extends React.Component {

  componentDidMount() {
    let propKey = 'initial_props';
    let csrf = 'csrf';

    global.console.log(
        window[propKey],
        'Jank Django => React communication'
    );

    let headers = new Headers();
    headers.append("X-CSRFToken", window[csrf])
    fetch('/' , {
        method: "POST",
        credentials:'include',
          headers:headers,
        body : JSON.stringify({
          month:true,
        })
      }).then((resp) => resp.json())
      .then(data => {
        global.console.log(data)
      }
    )
  }

  render() {
    return (
      <div className="App">
            <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
