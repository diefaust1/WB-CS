const btn   = document.getElementById('displayButton');
const img = document.getElementById('hiddenImage');

const crosswordButton = document.getElementById('crosswordButton2');
const crossword = document.getElementById('hiddenCrossword2');

crosswordButton.addEventListener('click', () => {
  const isHidden = crossword.hidden;
  crossword.hidden = !isHidden;

  if (isHidden) {
    crosswordButton.textContent = 'Lösung verstecken';
  } else {
    crosswordButton.textContent = 'Anzeigen';
  }
});

btn.addEventListener('click', () => {
  const isHidden = img.hidden;
  img.hidden   = !isHidden;

  if (isHidden) {
	  btn.textContent = 'Lösung verstecken';
  } else {
	  btn.textContent = 'Aufdecken';
  }
});

