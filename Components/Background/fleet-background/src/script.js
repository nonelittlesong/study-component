window.addEventListener('load', function () {
  const lis = this.document.querySelectorAll('li');

  const handleMouseMove = function (event) {
    const light = this.querySelector('.light');
    let x = event.pageX - this.offsetLeft - light.offsetWidth / 2;
    let y = event.pageY - this.offsetTop - light.offsetHeight / 2;
    light.style.left = x + 'px';
    light.style.top = y + 'px';
  }

  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', function () {
      const light = this.querySelector('.light');
      light.style.display = 'block';
      this.addEventListener('mousemove', handleMouseMove);
    });

    lis[i].addEventListener('mouseout', function () {
      const light = this.querySelector('.light');
      light.style.display = 'none';
    });
  }
});
