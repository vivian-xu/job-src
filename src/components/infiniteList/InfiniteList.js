import CommentItem from '../commentItem/CommentItem';
import Infinite from 'react-infinite';
import ajax from 'superagent';

class InfiniteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: 0,
      elements: [],
      isInfiniteLoading: false,
      isover: false
    };

// 存储原始的 请求回来的数据
    this.comments = [];
    // 储存 render 页面显示部分的行高
    this.lineHeight =0;
    // 基本的url
    this.baseURL = 'http://wuguishifu.com/api/mentors/5/comments/';
    // 下一页的url
    this.nextURL = "";

    // 屏幕滚动到了该请求新数据的时候调用，
    // 将 isInfiniteLoading 设为 true,
   // 调用 buildElements 创建／请求 新的elements
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
    this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);

    // buildElements 请求新数据并且创建新的节点 concat 到 this.state.elements 中
    this.buildElements = this.buildElements.bind(this);
    // 向服务器发送 get 请求，获得下一页的 comments 数据
    this.fetchingDatas = this.fetchingDatas.bind(this);
    // 当 fetch 数据，成功时所做的。。
    this.successFetch = this.successFetch.bind(this);

    this.setLineHeight = this.setLineHeight.bind(this);
  }

  setLineHeight( lh ) {
    // console.log(lh);
    // console.log(this.lineHeight);
    if (this.lineHeight === 0 || this.lineHeight != lh ) {
      this.lineHeight = lh;
    } else {
      return false;
    }
  }
/*
  @ page: num  请求的页数
  @ commentsArray: array 请求得到的 comments 数组
*/
  successFetch(page, commentsArray) {
    // let newElements = commentsArray.map((comment, index) => (<CommentItem key={comment.id} comment = {comment} />));
    if(commentsArray.length !== 0) {
      let newElements = commentsArray.map((comment, index) => (
        <CommentItem key={comment.id}
                                  comment = {comment}
                                  setLineHeight={this.setLineHeight}
                                  lineHeight={this.lineHeight}

                                  />));

      console.warn(page);
      console.log('Fetch New Comments : ' + commentsArray );
      console.warn(this.state.elements.length);

      this.setState({
        elements: this.state.elements.concat(newElements),
        isInfiniteLoading: false,
      })
    }else {
        this.setState({
          isover: true
        });
      }

  }
/*
    @ url: string 请求的 url 地址；
    @ page: num 请求的 页数; ( 之后可能不需要)
    @ successcallback: function 请求成功的回调函数
*/
  fetchingDatas(url, page, successcallback) {
    ajax
    .get(url)
    .send({page: page})
    .end((error, response) => {
      if( !error && response ) {
          let data = response.body;
          console.log(data);
          successcallback(page,data.comments);
          return data;
      } else {
      console.error(`Error fetching ${name} `, error);
     }
    });
  }
  /*
      @ page: num 请求的 页数; ( 之后可能不需要)
      @ successback: function 请求成功的回调函数
  */
  buildElements(page, successback) {
      let elements = [];
      console.log('%c' + 'page:'+ page, 'color: green; background: yellow; font-size: 20px');
      let url = this.baseURL;

      this.fetchingDatas( url, page, successback);
  }

/*
null ,undefined, "", NaN
if( !this.nextUrl ) {
    return;
}
*/
  componentWillMount() {
    console.log('%c pages in will Mountend! '+ this.state.pages, 'background-color: red ;font-size: 22px');
    this.buildElements(this.state.pages,this.successFetch);
  }

  handleInfiniteLoad() {
    console.log('%c loading', 'color: green; background: yellow; font-size: 20px');
      let that = this;

      if(this.state.isover){
        console.warn("it's over");
        return false;
      } else {
        this.setState({
            isInfiniteLoading: true,
            pages: this.state.pages + 1
        });

        let page = that.state.pages;
        that.buildElements(page, that.successFetch);
      }
    }

  elementInfiniteLoad() {
    return (
      <p className="infinite__loading">
        {this.state.isover?'已经到底啦～' : '加载中...'}
      </p>);
  }

// 50
  render() {
    console.log('%c infiniteList', 'green');

    return (
      <Infinite elementHeight={50}
                    containerHeight={window.innerHeight}
                    infiniteLoadBeginEdgeOffset={200}
                    onInfiniteLoad={this.handleInfiniteLoad}
                    loadingSpinnerDelegate={this.elementInfiniteLoad()}
                    isInfiniteLoading={this.state.isInfiniteLoading}
                    timeScrollStateLastsForAfterUserScrolls={0}
                    useWindowAsScrollContainer={true}
                    >
        {this.state.elements}
      </Infinite>
    );
  }
}

export default InfiniteList;
