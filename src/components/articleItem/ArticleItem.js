import { IndexLink, Link } from 'react-router';
import {  _headleMultilineTextOverflow} from '../../commons/utiles';

class ArticleItem extends React.PureComponent {

    static propTypes = {
      article: React.PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.displayName = 'ArticleItem';
    }

    componentDidMount() {
       let me = this.articleBody;
       _headleMultilineTextOverflow( me, 3);
    }

    render() {
    console.log('articleItem render');
      const {id, no, topic, cover_picture_desc, cover_picture, title, brief } = this.props.article;

      let imgShow = !cover_picture ? null : (
            <img src={cover_picture} alt={cover_picture_desc} className="article-item__img" />);


        return (
            <li className="wrap-block article-item">
                <Link to={`/articles/${id}`} className="flex-box" >
                    <div className="flex-item" >
                        <p className="c-tag">
                            <span className="
c-tag--bluebg c-tag--rectangular">{topic}</span>
                            No.{no}
                        </p>
                        <h2 className="article-item__title">{title}</h2>
                        <p className="article-item__body" ref={(o)=>{this.articleBody = o}}>{brief}</p>
                    </div>
                    {imgShow}
                </Link>
            </li>
        );
    }
}

export default ArticleItem;
