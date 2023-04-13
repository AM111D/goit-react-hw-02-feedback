import React from 'react';

const StatisticsButtons = () => {
  <div className="feedBack">
    <button type="button" onClick={() => this.handleChenge({ name: 'good' })}>
      Good
    </button>
    <button
      type="button"
      onClick={() => this.handleChenge({ name: 'neutral' })}
    >
      Neutral
    </button>
    <button type="button" onClick={() => this.handleChenge({ name: 'bad' })}>
      Bad
    </button>
  </div>;
};

export default StatisticsButtons;
