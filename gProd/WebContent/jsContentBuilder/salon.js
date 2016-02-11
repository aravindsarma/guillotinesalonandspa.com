/**
 * 
 */
salon_xhttp = new XMLHttpRequest();

salon_xhttp.onload = function(){
	if (salon_xhttp.status === 200) {
		salon_xhttploadContent();
	}
};

function salon_xhttploadContent(){
		salonjson = JSON.parse(salon_xhttp.responseText);
		var content = ' ';
		content += '<div class="col-sm-12">';
		content += '<h2>'+salonjson.h2+'</h2>';
		content += '<p>'+salonjson.p1+'</p>';		
		content += '<div class="service-item" id="service-1"></div>';
		content += '<div class="service-item" id="service-2"></div>';
		content += '<div class="service-item" id="service-3"></div>';
		content += '<div class="service-item" id="service-4"></div>';
		content += '</div>'
		document.getElementById("salon").innerHTML = content;
}

salon_xhttp.open('GET','data/salon.json', true); 
salon_xhttp.send(null); 