document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.getElementById('input-field');
  const outputField = document.getElementById('output-field');
  const uppercaseBtn = document.querySelector('.uppercase');
  const lowercaseBtn = document.querySelector('.lowercase');
  const capitalizeBtn = document.querySelector('.capitalize');
  const boldBtn = document.querySelector('.bold');
  const italicBtn = document.querySelector('.italic');
  const underlineBtn = document.querySelector('.underline');

  // Event listeners for button clicks
  uppercaseBtn.addEventListener('click', function () {
    outputField.textContent = inputField.value.toUpperCase();
  });

  lowercaseBtn.addEventListener('click', function () {
    outputField.textContent = inputField.value.toLowerCase();
  });

  capitalizeBtn.addEventListener('click', function () {
    const words = inputField.value.split(' ');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    outputField.textContent = capitalizedWords.join(' ');
  });

  boldBtn.addEventListener('click', function () {
    toggleStyle('font-weight', 'bold');
  });

  italicBtn.addEventListener('click', function () {
    toggleStyle('font-style', 'italic');
  });

  underlineBtn.addEventListener('click', function () {
    toggleStyle('text-decoration', 'underline');
  });

  // Function to toggle text style
  function toggleStyle(style, value) {
    if (outputField.style[style] === value) {
      outputField.style[style] = 'normal';
    } else {
      outputField.style[style] = value;
    }
  }
});
