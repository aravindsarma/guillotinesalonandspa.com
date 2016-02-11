/**
 * 
 */
spa_xhttp = new XMLHttpRequest();

spa_xhttp.onload = function(){
	if (spa_xhttp.status === 200) {
		spa_xhttploadContent();
	}
};

function spa_xhttploadContent(){
		var spajson = JSON.parse(spa_xhttp.responseText);
		var content = ' ';
		content += '<div class="col-sm-12">';
		content += '<h2>'+spajson.h2+'</h2>';
		content += '<p>'+spajson.p1+'</p>';		
		content += '<div class="service-item" id="service-5"></div>';
		content += '<div class="service-item" id="service-6"></div>';
		content += '<div class="service-item" id="service-7"></div>';
		content += '<div class="service-item" id="service-8"></div>';
		content += '</div>'
		document.getElementById("spa").innerHTML = content;
}

spa_xhttp.open('GET','data/spa.json', true); 
spa_xhttp.send(null); 