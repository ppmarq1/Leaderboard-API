const container = document.querySelector('.scores');

const generateScores = (data) => {
  container.innerHTML = '';

  data.forEach((item) => {
    container.innerHTML += `<li>${item.name}: ${item.score}</li>`;
  });
};

export default generateScores;