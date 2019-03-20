"use strict";

$(document).ready(function(){

  // скрипт відкриває вікно при кліку на кнопку каталогу
  $('#catalog_site_link').click(function(){
    $("#catalog_window").fadeIn();
  });
  $('#close_catalog_button').click(function(){
    $("#catalog_window").fadeOut();
  });
  
});
