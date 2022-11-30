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
      iconLayout: 'default#imageWithContent',
      iconImageHref: './img/icons/logo-inventive.svg',
      iconImageSize: [70, 70],
      // iconImageOffset: [-5, -38]
    });
  myMap.geoObjects.add(myPlacemark);
}
