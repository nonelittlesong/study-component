const btn = document.querySelector('.btn');
const ripple = document.querySelector('.ripple');
const handleMouse = function (event) {
  let size = Math.max(this.offsetWidth, this.offsetHeight);
  ripple.style.width = size + 'px';
  ripple.style.height = size + 'px';
  ripple.style.top = event.offsetY - size / 2 + 'px';
  ripple.style.left = event.offsetX - size / 2 + 'px';
  this.children[0].classList.add('animated');
  setTimeout(function () {
    btn.children[0].classList.remove('animated');
  }, 800);
};

btn.addEventListener('click', handleMouse);
