const btn   = document.getElementById('displayBnt');
const block = document.getElementById('hiddenImage');

  btn.addEventListener('click', () => {
    const isHidden = block.hidden;
    block.hidden   = !isHidden;                    // invert
    btn.textContent = isHidden ? 'Hide answer' : 'Show answer';
    btn.setAttribute('aria-expanded', String(!isHidden));
  });