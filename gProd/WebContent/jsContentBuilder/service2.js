/**
 * 
 */
service2_xhttp = new XMLHttpRequest();

service2_xhttp.onload = function(){
	if (service2_xhttp.status === 200) {
		service2_xhttploadContent();
	}
};

function service2_xhttploadContent(){
		service2json = JSON.parse(service2_xhttp.responseText);
		var content = ' ';
		content += '<div class="wrap-image">';
		content += '<div class="service2 wow fadeIn">';
		content += '<div class="Center-Container is-Table">';
		content += '<div class="Table-Cell">';
		content += '<div class="Center-Block">';
		content += '<h4>'+service2json.h4+'</h4>';
		content += '</div>'		
		content += '</div>'
		content += '</div>'
		content += '</div>'
		content += '</div>'
		
		content += '<div class="table-prices">';
		content += '<table class="table two-cols">';
		content += '<tbody id="'+service2json.t1+'"></tbody>';		
		content += '</table>'
		content += '<p>'+service2json.p1+'</p>';
		
		document.getElementById("service-2").innerHTML = content;
}

service2_xhttp.open('GET','data/service2.json', true); 
service2_xhttp.send(null); 