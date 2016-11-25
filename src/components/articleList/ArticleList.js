import ArticleItem from '../articleItem/ArticleItem';

class ArticleList extends React.PureComponent {
    static defaultProps = {
    }
    static propTypes = {
      articlelist: React.PropTypes.array.isRequired,
    }
    constructor(props) {
        super(props);
        this.displayName = 'ArticleList';
    }

    render() {
        let articles = this.props.articlelist.map((article, index) => {
                return (
                    <ArticleItem article={article} key={index} />
                )
            }
        );

        return (
            <ul className="articleList">
                {articles}
            </ul>
        );
    }
}

export default ArticleList;
