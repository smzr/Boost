$(document).ready(function() {
  $('.tabs > li > a').click(function(event){

    event.preventDefault();

    var active_tab = $('.tabs > li.active > a').attr('href');
    $(active_tab).removeClass('active');
    $(active_tab).addClass('hide');

    var actived_tab = $('.tabs > li.active');
    actived_tab.removeClass('active underline');

    $(this).parents('li').addClass('active underline');

    var target_tab_selector = $(this).attr('href');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
  });
});
