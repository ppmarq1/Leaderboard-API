const container = document.querySelector('.scores');

const generateScores = (_data) => {
  container.innerHTML = '';

  _data.forEach((item) => {
    container.innerHTML += `<li>${item.user}: ${item.score}</li>`;
  });
};

export default generateScores;