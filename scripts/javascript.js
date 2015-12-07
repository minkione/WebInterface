document.getElementById('nav').innerHTML = 
    '<div class="navbar">'+
    '<div id="nav-top-left">'+
    '<ul>'+
    '<li><a href="index.html">HOME</a></li>'+
    '<li><a href="inputs.html">INPUTS</a></li>'+
    '<li><a href="outputs.html">OUTPUTS</a></li>'+
    '<li><a href="variabelen.html">VARIABELEN</a></li>'+
    '<li><a href="alarms.html">ALARMS</a></li>'+
    '<li><a href="info.html">INFO</a></li>'+
    '</ul>'+
    '</div>'+
    '<div id="nav-top-right">'+
    '<ul>'+
    '<li><a href="contact.html">CONTACT</a></li>'+
    '</ul>'+
    '</div> '+
    '</div> ';


/* import alarms */
  var alarmsB = new XMLHttpRequest();
  alarmsB.onreadystatechange = function() {
    if (alarmsB.readyState == 4 && alarmsB.status == 200) {
     document.getElementById("alarms_table").innerHTML = alarmsB.responseText;
    }
  }
  alarmsB.open("GET", "alarms_table.txt", true);
  alarmsB.send();

/* import alarms */
  var alarmsH = new XMLHttpRequest();
  alarmsH.onreadystatechange = function() {
    if (alarmsH.readyState == 4 && alarmsH.status == 200) {
     document.getElementById("alarms_header").innerHTML = alarmsH.responseText;
    }
  }
  alarmsH.open("GET", "alarms_header.txt", true);
  alarmsH.send();



            
var post = function(name, value) {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
    log("request status: " + request.readyState + ", " +        request.status);
    }
    
    var data = name + "=" + value;
    log('sending ' + data);
    request.open("POST", document.location, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(data);
    
    log('received ' + request.responseXML);
};


var knop = document.getElementById('resetfuseknop');
knop.addEventListener('mousedown', function(){post('ResFuse', 1);});           
knop.addEventListener('mouseup', function(){post('ResFuse', 0);});


var log = function(what) {
    return;
    var e = document.getElementById('log');
    e.innerHTML = '<li>' + what + "</li>" + e.innerHTML;
};