// Game name: Starwars
// Game id: Id01dkjflakdjf

import generateScores from './score-generator.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Id01dkjflakdjf/scores/';

export const fetchData = async () => {
  const response = await fetch(url);
  const json = await response.json();

  const sorted = json.result.sort((a, b) => {
    let num;
    if (parseInt(a.score, 10) > parseInt(b.score, 10)) {
      num = -1;
    } else if (parseInt(a.score, 10) < parseInt(b.score, 10)) {
      num = 1;
    } else {
      num = 0;
    }
    return num;
  });

  generateScores(sorted);
};

export const postData = (_name, _score) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: _name,
      score: _score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};