var user='joshtimonen';

var url = require('http');

function printMessage(user,count,points)
{
	var msg = user + 'has ' + count;
	console.log(msg);
}

var request = url.get('http://teamtreehouse.com/'+ user+".json", function(response){  console.dir(response);});