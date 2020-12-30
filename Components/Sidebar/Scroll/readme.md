# Scroll

```js
function list_scroll_to_current_item() {
  if( _via_loaded_img_fn_list_file_index.includes(_via_image_index) ) {
    var sel_file     = document.getElementById( 'flist' + _via_image_index );
    var panel_height = img_fn_list.clientHeight;
    if ( sel_file.offsetTop >= ( img_fn_list.scrollTop + panel_height) ) {
      img_fn_list.scrollTop = sel_file.offsetTop;
    } else if (sel_file.offsetTop < img_fn_list.scrollTop) {
      img_fn_list.scrollTop = sel_file.offsetTop - panel_height + sel_file.offsetHeight;
    }
  }
}
```
