'use strict';

{
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      // クリックされたボタンの「すぐ下の兄弟要素」を取得（＝.works-content）
      // nextElementSibling＝「自分の次の兄弟要素」を取得するプロパティ
      content.classList.toggle('is-open');
    });
  });
}
