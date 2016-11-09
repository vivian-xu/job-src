import ArticleBody from '../../components/articleBody/ArticleBody';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Article';
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
