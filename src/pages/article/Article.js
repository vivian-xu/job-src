import ArticleBody from '../../components/articleBody/ArticleBody';
import Loading from '../../components/loading/Loading';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Article';
        this.state = {
            isloading: true,
        }
    }
    render() {
        return (
            <div className="article">
                <ArticleBody />
            </div>
        );
    }
}

export default Article;
