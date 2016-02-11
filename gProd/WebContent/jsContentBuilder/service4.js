/**
 * 
 */
service4_xhttp = new XMLHttpRequest();

service4_xhttp.onload = function(){
	if (service4_xhttp.status === 200) {
		service4_xhttploadContent();
	}
};

function service4_xhttploadContent(){
		var service4json = JSON.parse(service4_xhttp.responseText);
		var content = ' ';
		content += '<div class="wrap-image">';
		content += '<div class="service4 fadeIn">';
		content += '<div class="Center-Container is-Table">';
		content += '<div class="Table-Cell">';
		content += '<div class="Center-Block">';
		content += '<h4>'+service4json.h4+'</h4>';
		content += '</div>'		
		content += '</div>'
		content += '</div>'
		content += '</div>'
		content += '</div>'
		
		content += '<div class="table-prices">';
		content += '<table class="table two-cols">';
		content += '<tbody id="'+service4json.t1+'"></tbody>';		
		content += '</table>'
		
		document.getElementById("service-4").innerHTML = content;
}

service4_xhttp.open('GET','data/service4.json', true); 
service4_xhttp.send(null); 