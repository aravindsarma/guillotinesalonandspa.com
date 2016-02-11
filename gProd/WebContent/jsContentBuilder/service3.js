/**
 * 
 */
service3_xhttp = new XMLHttpRequest();

service3_xhttp.onload = function(){
	if (service3_xhttp.status === 200) {
		service3_xhttploadContent();
	}
};

function service3_xhttploadContent(){
		var service3json = JSON.parse(service3_xhttp.responseText);
		var content = ' ';
		content += '<div class="wrap-image">';
		content += '<div class="service3 fadeIn">';
		content += '<div class="Center-Container is-Table">';
		content += '<div class="Table-Cell">';
		content += '<div class="Center-Block">';
		content += '<h4>'+service3json.h4+'</h4>';
		content += '</div>'		
		content += '</div>'
		content += '</div>'
		content += '</div>'
		content += '</div>'
		
		content += '<div class="table-prices">';
		content += '<table class="table two-cols">';
		content += '<tbody id="'+service3json.t1+'"></tbody>';		
		content += '</table>'
		
		document.getElementById("service-3").innerHTML = content;
}

service3_xhttp.open('GET','data/service3.json', true); 
service3_xhttp.send(null); 