import { IndexLink, Link } from 'react-router';
import avatar from '../../imgs/avatar.png';
import articleImg from '../../imgs/article-img.png';

class ArticleBody extends React.Component {
    static defaultProps = {
        article: {}
    }

    static propTypes = {
        article: React.PropTypes.shape({
            body: React.PropTypes.string.isRequired,
            date: React.PropTypes.string.isRequired,
            no: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            cover_picture: React.PropTypes.string.isRequired,
            cover_picture_desc: React.PropTypes.string,
            topic: React.PropTypes.string.isRequired,
            author: React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                mentor: React.PropTypes.string.isRequired,
                avatar: React.PropTypes.string.isRequired,
            }),
        })
     }

    static contextTypes = {
       router: React.PropTypes.object,
     }

    constructor(props) {
        super(props);
        this.displayName = 'ArticleBody';

        //  html 显示
        this.createMarkupArticle = this.createMarkupArticle.bind(this);
    }

    createMarkupArticle() {
        return {
            __html: this.props.article.body
        };
    }

    render() {
        const { title, body, date, no, topic, cover_picture, cover_picture_desc, author: {
            avatar,
            name,
            id,
            mentor
        } } = this.props.article;
        console.log(this.props );
        return (
            <div className="wrap-block article" >
                <p className="c-tag">
                    <span
                        className="c-tag--bluebg c-tag--rectangular"
                    >
                        {topic}
                    </span>
                    No.{no}
                </p>
                <h1 className="article__title">
                    {title}
                </h1>
                <p className="article__time">
                    {date} &nbsp; {topic}
                 </p>
                 <img className="article__title-img" src={cover_picture} alt={cover_picture_desc} />
                <Link to=  {`/mentors/${id}`} className="article__container flex-box">
                    <img className="article__avatar"
                             src={avatar}
                             alt="头像"
                             />
                    <p className="article__mentor flex-item">
                       <span>嘉宾 {mentor}</span>
                       <span className="name">{name}</span>
                    </p>
                    <span className="article__go-mentor iconfont icon-right">
                    </span>
                </Link>
                <p className="article__content" dangerouslySetInnerHTML={this.createMarkupArticle()} />
            </div>
        );
    }
}

export default ArticleBody;
