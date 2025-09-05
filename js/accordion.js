'use strict';

{
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      content.classList.toggle('is-open');
    });
  });
}
