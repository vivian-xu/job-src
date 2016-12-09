console.log("this is in common.js");

let FastClick = require('fastclick');
FastClick.attach(document.body);

let deviceWidth = document.documentElement.clientWidth;
if( deviceWidth > 980 ) {
    deviceWidth = 980;
}

document.documentElement.style.fontSize = deviceWidth/7.5 + 'px';

console.log('font-size: ' + document.documentElement.style.fontSize);

// mockfetch

import './mockfetch';
