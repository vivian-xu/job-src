import ajax from 'superagent';
import Loading from '../../components/loading/Loading';
import InfiniteLoadScroll from '../../components/infiniteLoadScroll/InfiniteLoadScroll';
import CommentItem from '../../components/commentItem/CommentItem';


class Allcomments extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = "Allcomments";

    this.state = {
      comments: []
    };

    this.hasMore = true;

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
    this.loadingStatus = 1;

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
          });
          // 将 loading 的状态改为 2
          // this.loadingStatus = 2;
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
      bottom: '-30px',
      width: '100%',
      height: '30px',
      textAlign: 'center',
    };
    return (
      <p style={loadStyle}>
        {this.hasMore? '正在加载中...' : '已经到底了！！'}
      </p>
    )
  }

  render() {
    let { comments } = this.state;

    let commentList = null;

    if( Array.isArray(comments)) {
      commentList = comments.map((comment, idx) => {
        return <CommentItem key={idx} comment = {comment} />
        }
      )
    }

    console.log(this.hasMore);
    return (
      <div>
        <InfiniteLoadScroll
          loadingBlock = {this.loadingBlock}
          loadMore = {this.onLoading}
          pageStart = {0}
          hasMore = {this.hasMore}
          gapTime = {1000}
        >
          <ul>
            {commentList}
          </ul>
        </InfiniteLoadScroll>
      </div>
    );
  }
}

export default Allcomments;
