const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {

  console.log('クリック済');
    
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);

});