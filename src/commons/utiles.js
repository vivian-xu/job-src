
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

let _each = function(obj, fn) {
  if(!fn) return;
  if( obj instanceof Array ) {
    for (var i = 0; i< obj.length; i++) {
      if( fn.call(obj[i], i) == false) {
        break;
      }
    }
  } else if( typeof obj === 'object') {
    var j;
    for( j in obj) {
      if( obj.hasOwnProperty(j) ){

        if( fn.call(obj[j], j) == false) {
          break;
        }

      }
    }
  }
}

export {getDomStyle, _each};