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
        this.url = `/api/essay/${this.props.params.articleid}`;
    }

    fetchingDatas(url) {
      ajax
      .get(url)
      .end((error, response) => {
        if( !error && response ) {
            let data = response.body.data;
            const me = this;
            console.log(data);
            setTimeout(() => {
              me.setState({
                  isloading: false,
              })
            }, 1000);

            const { no, content, title, topic, cover_picture, cover_picture_desc, create_time, author } = data;

            this.setState({
                article: {
                    body: content,
                    date: create_time.split(" ")[0],
                    no,
                    title,
                    topic,
                    cover_picture,
                    cover_picture_desc,
                    author: {
                        id: author.id,
                        name: author.nick_name,
                        mentor: (author.gender === 1) ? '师姐' : '师兄',
                        avatar: author.avatar,
                    }
                }
            })

            console.info('fetching success');
        } else {
        console.error(`Error fetching ${name} `, error);
       }
      });
    }

    componentWillMount() {
        this.fetchingDatas(this.url);
    }

    render() {
        const {isloading, article} = this.state;

        let content = isloading ? <Loading /> :
        <ArticleBody article={article} />;

        return (
            <section className="article">
                {content}
            </section>
        );
    }
}

export default Article;
