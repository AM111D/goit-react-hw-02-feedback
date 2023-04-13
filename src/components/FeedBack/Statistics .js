import React, { Component } from 'react';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <ul>
    <li>
      Good:<span>{good}</span>
    </li>
    <li>
      Neutral:<span>{neutral}</span>
    </li>
    <li>
      Bad:<span>{bad}</span>
    </li>
    <li>
      Total:<span>{total}</span>
    </li>
    <li>
      Postive feeback:
      <span>{percentage}%</span>
    </li>
  </ul>
);

export default Statistics;
