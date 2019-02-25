ymaps.ready(init);
// let windowSize = document.querySelector('#myMap');
let myMap, myPlacemark, myPlacemark1;
function init(){  // Создание карты.    
  myMap = new ymaps.Map("myMap", {
    center: [59.939095, 30.315868],
    zoom: 11
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      myMap.behaviors.disable("drag");
    };
    
  // if(windowSize.clientWidth<=768){
  //   myMap.behaviors.disable("drag");
  // }

  myMap.behaviors.disable("scrollZoom");
  (myPlacemark = new ymaps.Placemark(
    [59.917015, 30.494070],
    {
      hintContent: "Burgers",
      balloonContent: "улица Подвойского, 35к1"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "../style/img/map/map-marker.svg",
      iconImageSize: [60, 60],
      iconImageOffset: [-5,-38]
    }
  )),
  (myPlacemark1 = new ymaps.Placemark(
    [59.981243, 30.299128],
    {
      hintContent: "Burgers",
      balloonContent: "Каменноостровский проспект, 68"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "../style/img/map/map-marker.svg",
      iconImageSize: [60, 60],
      iconImageOffset: [-5,-38]
    }
  )),
  (myPlacemark2 = new ymaps.Placemark(
    [59.946651, 30.386553],
    {
      hintContent: "Burgers",
      balloonContent: "Одесская улица, 2"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "../style/img/map/map-marker.svg",
      iconImageSize: [60, 60],
      iconImageOffset: [-5,-38]
    }
  )),
  (myPlacemark3 = new ymaps.Placemark(
    [59.892428, 30.316974],
    {
      hintContent: "Burgers",
      balloonContent: "Московский проспект, 99Б"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "../style/img/map/map-marker.svg",
      iconImageSize: [60, 60],
      iconImageOffset: [-5,-38]
    }
  ));

  myMap.geoObjects.add(myPlacemark).add(myPlacemark1).add(myPlacemark2).add(myPlacemark3);
}