import ajax from 'superagent';
import Loading from '../../components/loading/Loading';
import InfiniteLoadScroll from '../../components/infiniteLoadScroll/InfiniteLoadScroll';
import Slide from '../../components/slide/Slide';
import ArticleList from '../../components/articleList/ArticleList';

class ArticleListPage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleListPage';

        this.state = {
            isloading: true,
            slide: [],
            articlelist : []
        };

        this.hasMore = true;

        this.baseURL = '/api/essay/';

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

    fetchingDatas(url, page, limit) {

      ajax
      .get(url)
      .query({limit: limit, offset: page})
      .end((error, response) => {
        if( !error && response ) {
            let data = response.body.data;
            console.log(data.results);

            //  如果没有数据了，设置 isover
            if( !data.next ) {
              this.hasMore = false;
            };

            console.log(data.next );
              // 添加数据
            if(page === 0) {
              const me = this;
              this.setState({
                  slide: Array.isArray(data.slide) ? data.slide : [] ,
                  articlelist: [
                  ...this.state.articlelist,
                  ...data.results
                  ],
              })

              setTimeout(() => {
                me.setState({
                    isloading: false,
                })
              }, 1000);

            } else {
                this.setState({
                    articlelist: [
                        ...this.state.articlelist,
                        ...data.results
                    ]
                })
            }

            console.info('fetching success');
        } else {
        console.error(`Error fetching ${name} `, error);
       }
      });
    }

    //  fetch 新数据
    onLoading(page, limit) {
        console.log('ready to fetch');
        // fetch 新的数据 并更新页数
        this.fetchingDatas(this.baseURL, page, limit);
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
        let {isloading, slide, articlelist} = this.state;
        console.log('slide: ' + slide.length);
        let addStyle = {
          opacity: isloading ? 0 : 1
        };

        return (
            <div>
                {isloading ? <Loading /> : null}
                <InfiniteLoadScroll
                  loadingBlock = {this.loadingBlock}
                  loadMore = {this.onLoading}
                  pageStart = {0}
                  pageLimit = {2}
                  hasMore = {this.hasMore}
                  gapTime = {1500}
                  needHeight = {false}
                  addStyle = {addStyle}
                >

                    {(slide.length <= 0) ? <Slide /> : <Slide imgs={slide} />}
                    <ArticleList articlelist={articlelist} />
              </InfiniteLoadScroll>
            </div>
        );
    }
}

export default ArticleListPage;
