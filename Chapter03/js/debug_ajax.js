function debugCallback(data){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(data))
};

function debugAjax(){

	fetch("MegaCities.geojson")
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			debugCallback(data);
		})
};
