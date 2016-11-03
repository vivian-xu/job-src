module.exports = [{
  pattern: 'http://wuguishifu.com/api/mentors/(\\d+)/comments/(.*)',

  fixtures: function (match, params, headers){
/*    if(match[1] === '5' ) {
      console.log('in fixtures');
      let data = require('./comments');
      let {id, comments} = data.data;
      comments = comments.slice(0, 20);
      let shortdata = {
        id,
        comments
      };
      return shortdata;
    };*/

    console.log('in fixtures');
    let count = params['page'] * 20;
    let data = require('./comments');
    let {id, comments} = data.data;
    comments = comments.slice(count, count+20);
    let shortdata = {
      id,
      comments
    };
    return shortdata;
  },

  get: function(match, data){
    return  {
      body: data
    };
  },

  post: function(match, data){
    return {
      code:  k01
    };
  }
}]
