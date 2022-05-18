// imports
import './style.css';
import data from './modules/data.js';
import generateScores from './modules/score-generator.js';

generateScores(data);

// Add a score
const container = document.querySelector('.form');
const inputName = document.querySelector('#input-name');
const inputScore = document.querySelector('#input-score');

container.onsubmit = (e) => {
  e.preventDefault();

  const name = inputName.value;
  const score = inputScore.value;
  data.push({ name, score });
  generateScores(data);
};