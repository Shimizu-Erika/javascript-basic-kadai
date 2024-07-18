const Btn = document.getElementById('btn');

const Text = document.getElementById('text');

Btn.addEventListener('click',()=> {
  console.log('クリック済');
  text.textContent = 'ボタンをクリックしました';
});

