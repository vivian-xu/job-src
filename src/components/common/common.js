console.log("this is in common.js");

let FastClick = require('fastclick');
FastClick.attach(document.body);

let deviceWidth = document.documentElement.clientWidth;
if( deviceWidth > 640 ) {
    deviceWidth = 640;
}

document.documentElement.style.fontSize = deviceWidth/7.5 + 'px';

console.log('font-size: ' + document.documentElement.style.fontSize);

