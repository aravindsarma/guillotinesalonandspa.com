/**
 * 
 */
service1_xhttp = new XMLHttpRequest();

service1_xhttp.onload = function(){
	if (service1_xhttp.status === 200) {
		service1_xhttploadContent();
	}
};

function service1_xhttploadContent(){
		var service1json = JSON.parse(service1_xhttp.responseText);
		var content = ' ';
		content += '<div class="wrap-image">';
		content += '<div class="service1 fadeIn">';
		content += '<div class="Center-Container is-Table">';
		content += '<div class="Table-Cell">';
		content += '<div class="Center-Block">';
		content += '<h4>'+service1json.h4+'</h4>';
		content += '</div>'		
		content += '</div>'
		content += '</div>'
		content += '</div>'
		content += '</div>'
		
		content += '<div class="table-prices">';
		content += '<table class="table two-cols">';
		content += '<tbody id="'+service1json.t1+'"></tbody>';
		content += '</table>'
		
		content += '<p>'+service1json.p1+'</p>';
			
		content += '<table class="table two-cols">';
		content += '<tbody id="'+service1json.t2+'"></tbody>';
		content += '</table>'
		content += '</div>'
		document.getElementById("service-1").innerHTML = content;
}

service1_xhttp.open('GET','data/service1.json', true); 
service1_xhttp.send(null); 