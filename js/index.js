$(document).ready(function () {
  const btnMenu = $('.button-menu');
  const body = $('body');
  const header = $('.header');
  const menuItem = $('.js-menu-item');
  const menuTglClsNm = 'show-menu';
  const menuItemTglClsNm = 'active';

  btnMenu.click(function () {
    body.toggleClass(menuTglClsNm);

  });

  menuItem.click(function (e) {
    let delay;

    if (body.hasClass(menuTglClsNm)) {
      body.removeClass(menuTglClsNm);
      delay = 0;
    } else {
      delay = 1000;
    }

    $(this).addClass(menuItemTglClsNm).siblings().removeClass(menuItemTglClsNm);
    const id = '#' + $(this).attr('data-href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - $(header).outerHeight()
    }, delay);
    return false;
  });
});
