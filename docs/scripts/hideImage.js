const btn   = document.getElementById('displayButton');
const img = document.getElementById('hiddenImage');



btn.addEventListener('click', () => {
  const isHidden = img.hidden;
  img.hidden   = !isHidden;

  if (isHidden) {
	  btn.textContent = 'Lösung verstecken';
  } else {
	  btn.textContent = 'Anzeigen';
  }
});

const btnList = document.getElementById('listButton');
const list = document.getElementById('hiddenList');

btnList.addEventListener('click', () => {
  const isHidden = list.hidden;
  list.hidden = !isHidden;

  if (isHidden) {
    btnList.textContent = 'Lösung verstecken';
  } else {
    btnList.textContent = 'Hilfe';
  }
});
