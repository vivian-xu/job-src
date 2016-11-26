//  获取 js 原生 dom 的属性

/**
 * @param dom ( js dom Node ) js 原声dom 节点
 * @param styleName (string ) 需要查询的属性名称
 */
let getDomStyle = function(dom, styleName) {
  var getStyle = dom.currentStyle ? dom.currentStyle : window.getComputedStyle(dom, null);

  if (getStyle.getPropertyValue) {
    styleName = styleName.replace(/([A-Z])/g, (word) => {
      return "-" + word.toLowerCase();
    });
    // prop = prop.replace (/([A-Z])/g, "-$1");
    // prop = prop.toLowerCase ();
    return getStyle.getPropertyValue(styleName);
  } else {
    return getStyle.getAttribute(styleName);
  }
};

//  遍历 数组 ／ object
let _each = function(obj, fn) {
  if (!fn) return;
  if (obj instanceof Array) {
    for (var i = 0; i < obj.length; i++) {
      if (fn.call(obj[i], i) == false) {
        break;
      }
    }
  } else if (typeof obj === 'object') {
    var j;
    for (j in obj) {
      if (obj.hasOwnProperty(j)) {

        if (fn.call(obj[j], j) == false) {
          break;
        }

      }
    }
  }
}

/**
 * @param  ( js dom Node ) js 原声dom 节点
 * @param styleName (string ) 需要查询的属性名称
 */

let _getTime = function(strTime) {
  let now = new Date();
  let formatTime = new Date(strTime);

  let diff = now.getTime() - formatTime.getTime();

  let minutes = 1000*60;
  let hours = minutes*60;
  let days = hours*24;
  let months = days*31;
  let years = months*12;

  let shortDays = diff / days;

  let returnObj = {};

  returnObj = {

    // year : formatTime.getFullYear(),
    // month : formatTime.getMonth(),
    // date : formatTime.getDate(),
    // day : (0 === formatTime.getDay()) ? 7 : formatTime.getDay(),
  }
  return returnObj;
}
/*
    multiline text overflow display ellipses
    @ param dom 原生 js dom 节点，最靠近文本的外层dom;
    @ param numberRows (number)设置多少行后属于溢出

    只显示3行， 三行末尾用 ... 代替
    注意！是用的 while 函数／ while 的参数 必须是 实时的 parseInt(getDomStyle(me, "height"))

*/
let _headleMultilineTextOverflow = (dom, numberRows ) => {

  let me = dom;
  let lineH = getDomStyle(me, 'line-height');
  let goalHeight = parseInt(lineH)*numberRows;
        console.log(getDomStyle(me,"height"));
        console.log(lineH);

  while(parseInt(getDomStyle(me, "height")) > goalHeight){
       me.innerText = me.innerText.replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "...");
  }
};

/*
   判断是否是数组
  @ param array 需要做判断的变量
*/

 let _isArray = ( array ) => {
     return array && Object.prototype.toString.call( array ) === '[object Array]'
 }
/*
  DOM0 / DOM2 / IE 方法来添加事件
*/
let _addEvent = (element, action, event, fn) => {
  if(action === 'on' ) {

    if (element.addEventListener) {
      // DOM2 级事件处理  ,
      // 第三个参数 true ，添加到捕获阶段
      // 为 false 添加到 冒泡阶段
      element.addEventListener(event, fn, false);
    } else if(element.attachEvent) {
      //  IE 添加到冒泡阶段
      element.attachEvent( "on" + event, fn);
    } else {
      // DOM0 级事件处理
      element["on" + event ] = fn;
    }

  }else if(action === 'remove') {

    if (element.addEventListener) {
      element.removeEventListener(event, fn, false);
    } else if(element.detachEvent) {
      element.detachEvent( "on" + event, fn);
    } else {
      element["on" + event ] = null;
    }

  } else {
    throw Error('the second parameter of _addEvent Function can only be "on" or "remove" ');
  }
}


export {
  getDomStyle,
  _each,
  _getTime,
  _headleMultilineTextOverflow,
  _isArray,
  _addEvent
};
