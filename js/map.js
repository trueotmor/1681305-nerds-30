



    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.939257, 30.321617],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),


        myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
            hintContent: 'Не Краснодар конечно, увы.'/*,
            balloonContent: ''*/
        }, {
            // Опции.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-marker.png',
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-60, -200]
        });



    myMap.geoObjects
        .add(myPlacemark)
        /*.add(myPlacemarkWithContent)*/;
});
