const main = document.querySelector('main');
const html = main.innerHTML;
const add = document.getElementById('add-content');
const remove = document.getElementById('remove-content');

add.addEventListener('click', ev => {
  ev.preventDefault();
  main.innerHTML += html;
});

remove.addEventListener('click', ev => {
  ev.preventDefault();
  main.querySelectorAll('p').forEach((el, i) => {
    if (i > 3) el.remove();
  });
});