/**
 * 
 */
hours_xhttp = new XMLHttpRequest();

hours_xhttp.onload = function(){
	if (hours_xhttp.status === 200) {
		hours_xhttploadContent();
	}
};

function hours_xhttploadContent(){
		var hoursjson = JSON.parse(hours_xhttp.responseText);
		var content = ' ';
		content += '<div class="col-sm-12">';
		content += '<h2>'+hoursjson.h2+'</h2>';
		content += '<ul>';
		content += '<li class="closed bounceIn"><div class="day">SUN</div>'+hoursjson.sun+'</li>';
		content += '<li class="closed bounceIn"><div class="day">MON</div>'+hoursjson.mon+'</li>';
		content += '<li class="bounceIn"><div class="day">TUE</div>'+hoursjson.tue+'</li>';
		content += '<li class="bounceIn"><div class="day">WED</div>'+hoursjson.wed+'</li>';
		content += '<li class="bounceIn"><div class="day">THU</div>'+hoursjson.thu+'</li>';
		content += '<li class="bounceIn"><div class="day">FRI</div>'+hoursjson.fri+'</li>';
		content += '<li class="bounceIn"><div class="day">SAT</div>'+hoursjson.sat+'</li>';
		content += '</ul>'
		content += '</div>'
		document.getElementById("hours").innerHTML = content;
}

hours_xhttp.open('GET','data/hours.json', true); 
hours_xhttp.send(null);