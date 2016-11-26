import ajax from 'superagent';
import Loading from '../../components/loading/Loading';
import ArticleBody from '../../components/articleBody/ArticleBody';

class Article extends React.Component {
    static contextTypes = {
       router: React.PropTypes.object,
     }

    constructor(props, context) {
        super(props, context);
        this.displayName = 'Article';
        this.state = {
            isloading: true,
            article: {},
        }

        // 函数
        this.fetchingDatas = this.fetchingDatas.bind(this);

        //  变量
        this.baseURL = 'http://wuguishifu.com/api/article';
        this.articleid = (/[^0-9 ]/.test(this.props.params.articleid) ) ? 0 : this.props.params.articleid;
    }

    fetchingDatas(url) {
      ajax
      .get(url)
      .end((error, response) => {
        if( !error && response ) {
            let data = response.body;
            const me = this;
            setTimeout(() => {
              me.setState({
                  isloading: false,
              })
            }, 1000);

            this.setState({
                data
            })

            console.info('fetching success');
        } else {
        console.error(`Error fetching ${name} `, error);
       }
      });
    }

    componentWillMount() {
        this.fetchingDatas(`${this.baseURL}/${this.articleid}`);
    }

    render() {
        console.log(this.articleid);
        const {isloading, data} = this.state;

        let content = isloading ? <Loading /> :
        <ArticleBody article={data} />;

        return (
            <div className="article">
                {content}
            </div>
        );
    }
}

export default Article;
