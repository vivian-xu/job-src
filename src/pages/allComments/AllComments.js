/* global React:true */
import ajax from 'superagent';
import Loading from '../../components/loading/Loading';
import InfiniteLoadScroll from '../../components/infiniteLoadScroll/InfiniteLoadScroll';
import CommentsList from '../../components/commentsList/CommentsList';

class Allcomments extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Allcomments';

    this.state = {
      comments: [],
      isloading: true, // loading 页面
    };
    this.hasMore = true; // 是否还有更多的数据可以请求
    this.baseURL = `/api/mentors/${this.props.params.mentorId}/comments/`;

/*
    向 InfiniteLoadScroll 输出的
*/
    this.loadingBlock = this.loadingBlock.bind(this);
    this.onLoading = this.onLoading.bind(this);

/*
  自己的
*/
    this.fetchingDatas = this.fetchingDatas.bind(this);
    this.onhandleBack = this.onhandleBack.bind(this);
  }

  //  fetch 新数据
  onLoading(page, limit) {
    console.log('ready to fetch');
    // fetch 新的数据 并更新页数
    this.fetchingDatas(this.baseURL, page, limit);
  }

  fetchingDatas(url, page, limit) {
    ajax
    .get(url)
    .query({ limit, offset: page })
    .end((error, response) => {
      if (!error && response) {
        const data = response.body.data;

          //  如果没有数据了，设置 hasMore
        if (!data.next) {
          this.hasMore = false;
        }

        console.log(data);
          // 赠添新的数据
        if (page === 0) {
          this.setState({
            comments: this.state.comments.concat(data.results),
          });

          const me = this;
          setTimeout(() => {
            me.setState({
              isloading: false,
            });
          }, 1000);

        } else {
          this.setState({
            comments: [
              ...this.state.comments,
              ...data.results,
            ],
          });
        }
        console.info('fetching success');
      } else {
        console.error(`Error fetching ${name}`, error);
      }
    });
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
      <p style={loadStyle} className="wrap-block wrap-block--vertical-small">
        {
          this.hasMore ? '正在加载中...' : '已经到底了！！'
        }
      </p>
    );
  }

  onhandleBack() {
    this.props.router.goBack();
  }

  render() {
    const { comments, isloading } = this.state;
    const addStyle = {
      opacity: isloading ? 0 : 1,
    };
    console.log(comments);

    return (
      <div>
        {isloading ? <Loading /> : null}
        <div className="all-comments">
          <InfiniteLoadScroll
            loadingBlock={this.loadingBlock}
            loadMore={this.onLoading}
            pageStart={0}
            pageLimit={10}
            hasMore={this.hasMore}
            gapTime={1000}
            needHeight={false}
            addStyle={addStyle}
          >
            <div
              className="all-comments__header"
            >
              <span className="iconfont icon-left all-comments__back" onClick={this.onhandleBack} />
              <h1 className="all-comments__title"> 全部评论 </h1>
            </div>
            <section className="wrap-block wrap-block--vertical-small" >

              <CommentsList
                comments={comments}
              />

            </section>
          </InfiniteLoadScroll>
        </div>
      </div>
    );
  }
}

export default Allcomments;
