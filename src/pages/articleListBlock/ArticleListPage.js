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
            slide: [
            ],
            articlelist : [
            ]
        };

        this.hasMore = true;

        this.baseURL = 'http://wuguishifu.com/api/articlelist/';

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

            let { articlelist } = data;
              // 添加数据
            if(page === 0) {
                this.setState({
                    isloading: false,
                    slide: data.slide,
                    articlelist,
                })
            } else {
                this.setState({
                    articlelist: [
                        ...this.state.articlelist,
                        ...articlelist
                    ]
                })
            }

            //  如果没有数据了，设置 isover
            if( !data.articlelist || data.articlelist < 20) {
              this.hasMore = false;
            };

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

    componentWillMount() {
      this.onLoading(0);
    }

    render() {
        let {isloading, slide, articlelist} = this.state;

        return (
            <div>
                {isloading ? <Loading /> : null}
                <InfiniteLoadScroll
                  loadingBlock = {this.loadingBlock}
                  loadMore = {this.onLoading}
                  pageStart = {1}
                  hasMore = {this.hasMore}
                  gapTime = {1500}
                  needHeight = {false}
                >

                    <Slide imgs={slide} />
                    <ArticleList articlelist={articlelist} />
              </InfiniteLoadScroll>
            </div>
        );
    }
}

export default ArticleListPage;
