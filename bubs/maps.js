      function initialize() {
        var mapOptions = {
          zoom: 12,
          center: new google.maps.LatLng(41.8781, -87.6298)
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
		var map_list = [{lat: 41.892404, lng: -87.638597 }, 
						{lat: 41.900272, lng: -87.626383}, 
						{lat: 41.907431, lng: -87.675579},
						{lat: 41.888518, lng: -87.644423},
						{lat: 41.897244, lng: -87.617948},
						{lat: 41.871999, lng: -87.617852}];

		map.setMapTypeId( google.maps.MapTypeId.HYBRID);
		for (i in map_list) {
			var marker = new google.maps.Marker({
				map: map,
				position: map_list[i],
				icon: "./images/dog.png",
				title: i
			});
			
		}
	  }
      window.onload = initialize;