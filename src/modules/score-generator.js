const container = document.querySelector('.scores');
const generateScores = (_data) => {
  container.innerHTML = '';

  _data.forEach((item, index) => {
    container.innerHTML += `
    <li>
      <span>${index + 1}.</span>
      <span>${item.user}</span>
      <span>${item.score}</span>
    </li>`;
  });
};

export default generateScores;