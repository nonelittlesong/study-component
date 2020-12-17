const $songTag = document.querySelectorAll('.song-tag .action-close');
console.log($songTag);
$songTag.forEach(function(element, key) {
  console.log(key, element);
  element.addEventListener('click', function() {
    console.log(this.parentNode);
    console.log(element.parentElement);
    this.parentNode.classList.add('song-tag-hidden')
  })
})
