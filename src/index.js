// imports
import './style.css';
import { fetchData, postData } from './modules/data.js';
import generateScores from './modules/score-generator.js';

// Generate scores
fetchData();

// Add a score
const container = document.querySelector('.form');
const inputName = document.querySelector('#input-name');
const inputScore = document.querySelector('#input-score');
container.onsubmit = (e) => {
  e.preventDefault();

  const name = inputName.value;
  const score = inputScore.value;
  postData(name, score);

  container.reset();
  generateScores(fetchData());
};