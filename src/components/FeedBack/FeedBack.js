import React, { Component } from 'react';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className='feedBack'>
        <button type="button" >Good</button>
        <button type="button" >Neutral</button>
        <button type="button" >Bad</button>
      </div>
      <h2>Statistics</h2>
    );
  }
}

export default FeedBack;
