module.exports = [{
  pattern: 'http://wuguishifu.com/api/mentors/(\\d+)/comments',

  fixtures: function (match, params, headers){
    if(match[1] === '5') {
      return match[1] + ' comments are required!'
    };
  },

  get: function(match, data){
    return  {
      body: data
    };
  },

  post: function(match, data){
    return {
      code: 201
    };
  }
}]
