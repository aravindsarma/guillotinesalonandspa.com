/**
 * 
 */
service8_xhttp = new XMLHttpRequest();

service8_xhttp.onload = function(){
	if (service8_xhttp.status === 200) {
		service8_xhttploadContent();
	}
};

function service8_xhttploadContent(){
		service8json = JSON.parse(service8_xhttp.responseText);
		var content = ' ';
		content += '<div class="wrap-image">';
		content += '<div class="service8 wow fadeIn">';
		content += '<div class="Center-Container is-Table">';
		content += '<div class="Table-Cell">';
		content += '<div class="Center-Block">';
		content += '<h4>'+service8json.h4+'</h4>';
		content += '</div>'		
		content += '</div>'
		content += '</div>'
		content += '</div>'
		content += '</div>'
		
		content += '<div class="table-prices">';
		content += '<table class="table two-cols">';
		content += '<tbody id="'+service8json.t1+'"></tbody>';		
		content += '</table>'
		
		document.getElementById("service-8").innerHTML = content;
}

service8_xhttp.open('GET','data/service8.json', true); 
service8_xhttp.send(null); 