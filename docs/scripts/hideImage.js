const btn   = document.getElementById('displayButton');
const img = document.getElementById('hiddenImage');

  btn.addEventListener('click', () => {
    const isHidden = img.hidden;
    img.hidden   = !isHidden;                    // invert
    if (isHidden){
		btn.textContent = 'Lösung verstecken'
	}else{
		btn.textContent = 'Anzeigen'
	}
  });