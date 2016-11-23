import ajax from 'superagent';
import Loading from '../../components/loading/Loading';
import InfiniteLoadScroll from '../../components/infiniteLoadScroll/InfiniteLoadScroll';
import CommentsList from '../../components/commentsList/CommentsList';

class Allcomments extends React.PureComponent {
  constructor(props) {
    super(props);
    this.displayName = "Allcomments";

    this.state = {
      comments: [],
      isloading: true, // loading 页面
    };

    this.hasMore = true; // 是否还有更多的数据可以请求
    this.baseURL = 'http://wuguishifu.com/api/mentors/5/comments/';

/*
    向 InfiniteLoadScroll 输出的
*/
    this.loadingBlock = this.loadingBlock.bind(this);
    this.onLoading = this.onLoading.bind(this);

/*
  自己的
*/
    this.fetchingDatas = this.fetchingDatas.bind(this);
  }

  fetchingDatas(url, page) {
    ajax
    .get(url)
    .send({page: page})
    .end((error, response) => {
      if( !error && response ) {
          let data = response.body;

          //  如果没有数据了，设置 isover
          if( !data.comments || data.comments.length < 20) {
            this.hasMore = false;
          };

          // 赠添新的数据
          this.setState({
            comments: this.state.comments.concat(data.comments),
            isloading: false,
          });
          console.info('fetching success');
      } else {
      console.error(`Error fetching ${name} `, error);
     }
    });
  }

  //  fetch 新数据
  onLoading(page) {
      console.log('ready to fetch');
      // fetch 新的数据 并更新页数
      this.fetchingDatas(this.baseURL, page);
  }

  //  正在加载中。。 状态指示， 在页面最下方，向上拖动可看到
  loadingBlock() {
    const loadStyle = {
      position: 'absolute',
      bottom: '-50px',
      width: '100%',
      height: '50px',
      lineHeight: '50px',
      padding: 0,
      textAlign: 'center',
    };
    return (
      <p style={loadStyle} className='wrap-block wrap-block--vertical-small'  >
        {this.hasMore? '正在加载中...' : '已经到底了！！'}
      </p>
    )
  }

  render() {
    let { comments , isloading} = this.state;

    return (
      <div>
        {isloading ? '<Loading />' : null}
        <div className="all-comments">
          <InfiniteLoadScroll
            loadingBlock = {this.loadingBlock}
            loadMore = {this.onLoading}
            pageStart = {0}
            hasMore = {this.hasMore}
            gapTime = {1000}
            needHeight = {false}
          >
          <div
            className="all-comments__header"
          >
              <span className="iconfont icon-left all-comments__back" onClick={this.onhandleBack}></span>
              <h1 className="all-comments__title"> 全部评论 </h1>
          </div>
            <section
              className="wrap-block wrap-block--vertical-small"
              ref={(o) => this.commentsWrap = o}
              >
                <CommentsList
                  comments={this.state.comments}
                />
            </section>
          </InfiniteLoadScroll>
        </div>
      </div>
    );
  }
}

export default Allcomments;
