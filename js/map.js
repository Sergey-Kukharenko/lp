ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map('map', {
      center: [55.761036, 37.519593],
      zoom: 16,
      controls: []
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: '',
      balloonContent: '',
      iconContent: '',
    }, {
      // preset: 'islands#icon',
      // iconLayout: 'default#imageWithContent',
      // iconImageHref: 'https://sandbox.api.maps.yandex.net/examples/ru/2.1/icon_customImage/images/myIcon.gif',
      // iconImageSize: [30, 42],
      // iconImageOffset: [-5, -38]
    });
  myMap.geoObjects.add(myPlacemark);
}
