chrome.runtime.sendMessage({method:"getTime"},function(response){
 	console.log(response)
 	$('#readTime').text(response);
}); 