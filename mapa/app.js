function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: new google.maps.LatLng(-23.55672092209231, -46.57420214380139),
      zoom: 18,
    });
  
    const iconBase =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
    const icons = {
      postos: {
        icon: iconBase + "parking_lot_maps.png",
      },
      atual: {
        icon: iconBase + "info-i_maps.png",
      },
    };
    const features = [
      {
        position: new google.maps.LatLng(-23.55672092209231, -46.57420214380139),
        type: "atual",
      },
      {
        position: new google.maps.LatLng(-23.56932695235992, -46.585632647590025),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.53302344248861, -46.566312736523145),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.52839214910779, -46.55033079400114),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.52195338168296, -46.56323383180132),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.532951076213063, -46.565958956162255),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.578772168076796, -46.612112325362055),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.565799315627014, -46.621880931643425),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.595285683877922, -46.64455380186659),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.57265601491721, -46.6437884595389),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.569356041155938, -46.650502773030716),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.568989641993035, -46.643750130702834),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.56744190586195, -46.64322783070275),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.564845433728685, -46.63767154419463),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.564948299783328, -46.64227170186682),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.560540644484863, -46.65075297250631),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.55628864117278, -46.639442717211345),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.557192721130676, -46.65382247303084),
        type: "postos",
      },
      {
        position: new google.maps.LatLng(-23.559276320945038, -46.655311330702936),
        type: "postos",
      },
    ];
  
    // Create markers.
    for (let i = 0; i < features.length; i++) {
      const marker = new google.maps.Marker({
        position: features[i].position,
        icon: icons[features[i].type].icon,
        map: map,
      });
    }
  }