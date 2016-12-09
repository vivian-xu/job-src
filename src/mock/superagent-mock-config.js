module.exports = [{
    pattern: 'http://wuguishifu.com/api/mentors/(\\d+)/comments/(.*)',

    fixtures: function (match, params, headers){
      console.log('in comments fixtures');

      let count = params['page'] * 20;
      let data = require('./comments');
      let {id, comments} = data.data;

      comments = comments.slice(count, count+20);
      console.log('get log  page:' + params['page']);

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
  },
  {
    pattern: 'http://wuguishifu.com/api/articlelist/',

    fixtures: (match, params, headers) => {
      console.log('in articlelist mock');
      let data = require('./articleList');
      let { slide, articlelist } = data.data;

      let tempReturn;
      const pageCount = params['page'] * 5;

      articlelist = articlelist.slice(pageCount, pageCount + 5);


      if(pageCount === 0) {
        tempReturn = {
          slide,
          articlelist
        }
      } else {
        tempReturn = {
          articlelist
        }
      }

      return tempReturn;
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
  },
  {
    pattern: 'http://wuguishifu.com/api/article/(\\d*)',

    fixtures: (match, params, headers) => {
      console.log('in articlelist mock');
      let data = require('./article');
      return data.data;
    },

    get: function(match, data){
      console.log('ready setTimeout');
       return  {
          body: data
        };
    },

    post: function(match, data){
      return {
        code:  k01
      };
    }
  }
]
