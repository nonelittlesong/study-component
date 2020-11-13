// $(".dropdown dt a").on('click', function() {
//   $(".dropdown dd ul").slideToggle('fast');
// });
// var $multiSelector = document.querySelector('.dropdown dt a');
// $multiSelector.addEventListener('click', function() {
//   var $tagList = document.querySelector('.dropdown dd ul');
//   $tagList.style.display = 'block';
//   var $test = document.querySelector('#shit');
//   console.log($test.textContent.trim());
//   console.log($test.innerHTML.trim());
// })

// $(".dropdown dd ul li").on('click', function() {
//   $(".dropdown dd ul").hide();
// });

// function getSelectedValue(id) {
//   return $("#" + id).find("dt a span.value").html();
// }

// $(document).bind('click', function(e) {
//   var $clicked = $(e.target);
//   if (!$clicked.parents().hasClass('dropdown'))
//     $('.dropdown dd ul').hide();
// });

// $('.multiSelect input[type="checkbox"]').on('click', function() {
//   var title = $(this).closest('.multiSelect').find('input[type="checkbox"]').val();
//   title = $(this).val() + ',';

//   if ($(this).is(':checked')) {
//     var html = '<span title="' + title + '">' + title + '</span>';
//     $('.multiSel').append(html);
//     $('.hida').hide();
//   } else {
//     $('span[title="' + title + '"]').remove();
//     var ret = $(".hida");
//     $('.dropdown at a').append(ret);
//   }
// })

// const source = document.getElementById('source');
// const textContentOutput = document.getElementById('textContentOutput');
// const innerTextOutput = document.getElementById('innerTextOutput');

// textContentOutput.innerHTML = source.textContent;
// innerTextOutput.innerHTML = source.innerText;

