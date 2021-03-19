    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.939257, 30.321617],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.938784, 30.323250], {
            hintContent: 'Не Краснодар конечно, увы.'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [231, 190],
            iconImageOffset: [-60, -200]
        });
    myMap.geoObjects
        .add(myPlacemark);
});
