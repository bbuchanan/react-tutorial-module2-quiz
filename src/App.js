import React, { Component } from 'react'
import './App.css'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent.js'

class App extends Component {
  state = {
    inputLength: 0,
    inputText: ''
  }

  changeListener = (event) => {
    const text = event.target.value
    const length = text.length
    this.setState({
      inputLength: length,
      inputText: text
    })
  }

  deleteListener = (index) => {
    let val = this.state.inputText
    let newVal = val.substr(0, index) + val.substr(index + 1)
    console.log(newVal)
    const length = newVal.length
    this.setState({
      inputText: newVal,
      inputLength: length
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.inputText} onChange={this.changeListener}/>
        <ValidationComponent length={this.state.inputLength} />
        {this.state.inputText.split('').map((c, index) => {
          return <CharComponent letter={c} deleteListener={() => this.deleteListener(index)}/>
        })
        }
      </div>
    );
  }
}

export default App;
