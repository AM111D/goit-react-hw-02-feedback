import React, { Component } from 'react';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="feedBack">
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h4>Statistics</h4>
      </div>

      <ul>
        <li>Good:<span>{this.state.good}</span></li>
        <li>Neutral:<span>{this.state.neutral}</span></li>
        <li>Bad:<span>{this.state.bad}</span></li>
      </ul>
    );
  }
}

export default FeedBack;
