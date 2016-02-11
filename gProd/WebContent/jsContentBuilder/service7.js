/**
 * 
 */
service7_xhttp = new XMLHttpRequest();

service7_xhttp.onload = function(){
	if (service7_xhttp.status === 200) {
		service7_xhttploadContent();
	}
};

function service7_xhttploadContent(){
		service7json = JSON.parse(service7_xhttp.responseText);
		var content = ' ';
		content += '<div class="wrap-image">';
		content += '<div class="service7 wow fadeIn">';
		content += '<div class="Center-Container is-Table">';
		content += '<div class="Table-Cell">';
		content += '<div class="Center-Block">';
		content += '<h4>'+service7json.h4+'</h4>';
		content += '</div>'		
		content += '</div>'
		content += '</div>'
		content += '</div>'
		content += '</div>'
		
		content += '<div class="table-prices">';
		content += '<table class="table two-cols">';
		content += '<tbody id="'+service7json.t1+'"></tbody>';		
		content += '</table>'
		
		document.getElementById("service-7").innerHTML = content;
}

service7_xhttp.open('GET','data/service7.json', true); 
service7_xhttp.send(null); 