/**
 * 
 */
service5_xhttp = new XMLHttpRequest();

service5_xhttp.onload = function(){
	if (service5_xhttp.status === 200) {
		service5_xhttploadContent();
	}
};

function service5_xhttploadContent(){
		service5json = JSON.parse(service5_xhttp.responseText);
		var content = ' ';
		content += '<div class="wrap-image">';
		content += '<div class="service5 wow fadeIn">';
		content += '<div class="Center-Container is-Table">';
		content += '<div class="Table-Cell">';
		content += '<div class="Center-Block">';
		content += '<h4>'+service5json.h4+'</h4>';
		content += '</div>'		
		content += '</div>'
		content += '</div>'
		content += '</div>'
		content += '</div>'
		
		content += '<div class="table-prices">';
		content += '<table class="table two-cols">';
		content += '<tbody id="'+service5json.t1+'"></tbody>';		
		content += '</table>'
		
		document.getElementById("service-5").innerHTML = content;
}

service5_xhttp.open('GET','data/service5.json', true); 
service5_xhttp.send(null); 