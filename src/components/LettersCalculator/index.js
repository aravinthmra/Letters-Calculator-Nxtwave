import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: ''}

  onInputEntry = event => {
    this.setState({inputValue: event.target.value})
  }

  onClearText = () => {
    this.setState({inputValue: ''})
  }

  render() {
    const {inputValue} = this.state
    return (
      <div className="bg-container1">
        <div className="main-container1">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="input-phrase">Enter the phrase</label>
          <input
            type="text"
            id="input-phrase"
            onChange={this.onInputEntry}
            value={inputValue}
            placeholder="Enter the phrase"
          />
          <p className="letter-button1" onClick={this.onClearText}>
            No.of letters: {inputValue.length > 0 ? inputValue.length : '0'}
          </p>
        </div>
        <img
          className="letters-calculator-image1"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
