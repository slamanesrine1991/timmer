import React from 'react'


var TimeApp = function() {
  
    var delim = ":";
    var time=14588000;
   
    var seconds = Math.floor(time /  1000 % 60);
   var minutes = Math.floor(time /(1000 * 60) % 60);
  var hours = Math.floor(time /   (1000 * 60 * 60) % 60);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
return <p>{ hours + delim + minutes + delim + seconds}</p>

    
}
export default TimeApp;