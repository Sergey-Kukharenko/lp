$(document).ready(function () {
  const btnMenu = $('.button-menu');
  const body = $('body');
  const header = $('.header');
  const menuItem = $('.js-menu-item');
  const menuTglClsNm = 'show-menu';
  const menuItemTglClsNm = 'active';

  const touchScroll = function (event) {
    event.preventDefault();
  };

  btnMenu.click(function () {
    body.toggleClass(menuTglClsNm);
    // $(this).bind('touchmove', touchScroll);
  });

  menuItem.click(function (e) {
    if (body.hasClass(menuTglClsNm)) {
      body.removeClass(menuTglClsNm);
      // $(document).unbind('touchmove', touchScroll);
    }
    $(this).addClass(menuItemTglClsNm).siblings().removeClass(menuItemTglClsNm);

    const id = '#' + $(this).attr('data-href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - $(header).outerHeight()
    }, 1000);
    return false;
  });
});
