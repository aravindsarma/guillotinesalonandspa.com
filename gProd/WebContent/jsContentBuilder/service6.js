/**
 * 
 */
service6_xhttp = new XMLHttpRequest();

service6_xhttp.onload = function(){
	if (service6_xhttp.status === 200) {
		service6_xhttploadContent();
	}
};

function service6_xhttploadContent(){
		var service6json = JSON.parse(service6_xhttp.responseText);
		var content = ' ';
		content += '<div class="wrap-image">';
		content += '<div class="service6 fadeIn">';
		content += '<div class="Center-Container is-Table">';
		content += '<div class="Table-Cell">';
		content += '<div class="Center-Block">';
		content += '<h4>'+service6json.h4+'</h4>';
		content += '</div>'		
		content += '</div>'
		content += '</div>'
		content += '</div>'
		content += '</div>'
		
		content += '<div class="table-prices">';
		content += '<p><strong>'+service6json.p1+'</strong></p>';
		content += '<table class="table two-cols">';
		content += '<tbody id="'+service6json.t1+'"></tbody>';		
		content += '</table>'
		
		document.getElementById("service-6").innerHTML = content;
}

service6_xhttp.open('GET','data/service6.json', true); 
service6_xhttp.send(null); 