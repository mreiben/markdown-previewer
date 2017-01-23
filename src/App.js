import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var marked = require('marked');

function createMarkup(foo){
  return {__html: marked(foo)};
}

//<div dangerouslySetInnerHTML={createMarkup("I am using `markdown` so __boom__.")}/>

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Enter __markup__ *here* to see a preview on the right!\r\rcreated by [mreiben](https://github.com/mreiben)',
      htmlText: createMarkup('Enter __markup__ *here* to see a preview on the right!\r\rcreated by [mreiben](https://github.com/mreiben)')
    }
  }

  onInputChange(term){
    this.setState({ text: term, htmlText: createMarkup(term)});
  }

  render() {
    return (
      <div className="App">
        <div className="section">
          <textarea
            type="text"
            value={ this.state.text }
            onChange={ event => this.onInputChange(event.target.value) }
          ></textarea>
        </div>
        <div
          className="section"
          dangerouslySetInnerHTML={this.state.htmlText}>
        </div>
      </div>
    );
  }
}

export default App;
