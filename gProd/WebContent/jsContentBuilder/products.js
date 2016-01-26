/**
 * 
 */
products_xhttp = new XMLHttpRequest();

products_xhttp.onload = function(){
	if (products_xhttp.status === 200) {
		products_xhttploadContent();
	}
};

function products_xhttploadContent(){
		productsjson = JSON.parse(products_xhttp.responseText);
		var content = ' ';
		content += '<div class="col-sm-12">';
		content += '<h2>'+productsjson.h2+'</h2>';
		content += '<p>'+productsjson.p1+'</p>';
		content += '<p>'+productsjson.p2+'</p>';
		content += '<div class="col-sm-4"><p>'+productsjson.p3+'</p></div>';
		content += '<div class="col-sm-4"><p>'+productsjson.p4+'</p></div>';
		content += '<div class="col-sm-4"><p>'+productsjson.p5+'</p></div>';
		content += '</div>'
		document.getElementById("products").innerHTML = content;
}

products_xhttp.open('GET','data/products.json', true); 
products_xhttp.send(null); 