/**
 * 
 */
about_xhttp = new XMLHttpRequest();

about_xhttp.onload = function(){
	if (about_xhttp.status === 200) {
		about_xhttploadContent();
	}
};

function about_xhttploadContent(){
		aboutjson = JSON.parse(about_xhttp.responseText);
		var content = ' ';
		content += '<div class="col-sm-12">';
		content += '<h2>'+aboutjson.h2+'</h2>';
		content += '<p>'+aboutjson.p1+'</p>';
		content += '<p>'+aboutjson.p2+'</p>';
		content += '<p>'+aboutjson.p3+'</p>';
		content += '<p>'+aboutjson.p4+'</p>';
		content += '<p>'+aboutjson.p5+'</p>';
		content += '</div>'
		document.getElementById("about").innerHTML = content;
}

about_xhttp.open('GET','data/about.json', true); 
about_xhttp.send(null); 