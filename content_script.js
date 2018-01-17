$(document).ready(function(){
  var averageWPM = 275;
  var estimate = document.body.innerText.split(" ").length / averageWPM;
  //var time = Math.round(estimate);
  //$( document.body ).append( $( "<img>" ) );
  var count = $("img").length/2;
  var imgTime = 0;
  for (var k = 12; (count > 0 && k > 2); k--){
  	imgTime += k;
  	count--;
  }

  imgTime += (count * 3);

  imgTime = imgTime / 60;
  var time = Math.round(estimate+imgTime);

  function sendTime(time_var){
    chrome.runtime.sendMessage({from: 'content_script', subject: 'sendTime', time: time_var});
  }
  sendTime(time);
});