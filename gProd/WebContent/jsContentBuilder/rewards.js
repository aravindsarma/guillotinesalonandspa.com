/**
 * 
 */
rewards_xhttp = new XMLHttpRequest();

rewards_xhttp.onload = function(){
	if (rewards_xhttp.status === 200) {
		rewards_xhttploadContent();
	}
};

function rewards_xhttploadContent(){
		var rewardsjson = JSON.parse(rewards_xhttp.responseText);
		var content = ' ';
		content += '<div class="col-sm-12">';
		content += '<h2>'+rewardsjson.h2+'</h2>';
		content += '<p id="heading">'+rewardsjson.p1+'</p>';
		content += '<p>'+rewardsjson.p2+'</p>';
		content += '<p id="link">'+rewardsjson.p3+'</p>';
		content += '</div>'
		document.getElementById("rewards").innerHTML = content;
}

rewards_xhttp.open('GET','data/rewards.json', true); 
rewards_xhttp.send(null); 