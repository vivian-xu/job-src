import ajax from 'superagent';
import Slide from '../../components/slide/Slide';
import ArticleList from '../../components/articleList/ArticleList';
import Loading from '../../components/loading/Loading';

import src1 from '../../imgs/img1.png';
import src2 from '../../imgs/img2.png';
import src3 from '../../imgs/img3.png';
import thumbnail from '../../imgs/article-thumbnail.png';
import thumbnail2 from '../../imgs/article-thumbnail2.png';

class ArticleListBlock extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleListBlock';

        this.state = {
            isloading: true,
            slide: [
            ],
            articlelist: [
            ]
        };

        this.fetchingDatas = this.fetchingDatas.bind(this);
        this.onLoading = this.onLoading.bind(this);

        this.baseURL = 'http://wuguishifu.com/api/articlelist/';
    }

    fetchingDatas(url, page) {
      ajax
      .get(url)
      .send({page: page})
      .end((error, response) => {
        if( !error && response ) {
            let data = response.body;

            let { articlelist } = data;

            console.log(data);
            if(page === 0) {
                this.setState({
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
            // if( !data.comments || data.comments.length < 20) {
            //   this.hasMore = false;
            // };

            // 赠添新的数据
            // this.setState({
            //   comments: this.state.comments.concat(data.comments),
            //   isloading: false,
            // });
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

    componentWillMount() {
        this.onLoading(0);
    }
    componentDidMount() {
        let count = 1;

        let setTimeFetch = () => {
            this.onLoading(count++);
        }
        // setTimeout(function(){
        //     this.onLoading(count++);
        // } , 1000);
        setTimeout(setTimeFetch , 1000)
    }

    render() {
        let {isloading, slide, articlelist} = this.state;

        let content = isloading ? <Loading /> : (
            <Slide imgs={slide} />
            <ArticleList articlelist={articlelist} />
            );
        // <Slide imgs={slide} />
        // <ArticleList articlelist={articlelist} />
        return (
            <div>
                {content}

            </div>
        );
    }
}

export default ArticleListBlock;
