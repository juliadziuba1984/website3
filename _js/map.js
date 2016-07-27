




/*--------------------------Map-------------------------------------*/
function contact_map(coords1,coords2,id){
	
	function initialize_contact_map() {
		var map, marker;
		
		var image = {
		url: '_i/icons/icon_map.png'}
	
		var addr1 = new google.maps.LatLng(coords1, coords2);
		
		var styles = [
	  {
		
	  }
	];
	
	
    var center = new google.maps.LatLng(coords1, coords2);
	
    map = new google.maps.Map(document.getElementById(id), {
         zoom: 16,
         center: center,
		 scrollwheel: false,
         streetViewControl: false,
		 mapTypeControl: false,
		 
      
    });
	
    map.setOptions({styles: styles});
    map.setOptions({styles: styles});
	marker = new google.maps.Marker({
		map: map,
		position: addr1,
		visible: true,
		icon:image
	});
		
	map_instances.push({
		'map': map,
		'center': center
	});
}
google.maps.event.addDomListener(window, 'load', initialize_contact_map);
}





