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
      const {id, no, topic, imgdetail, imgsrc, title, body } = this.props.article;

      let imgShow = !imgsrc ? null : (
            <img src={imgsrc} alt={imgdetail} className="article-item__img" />);

        console.log('render');
        return (
            <li className="wrap-block article-item">
                <Link to={`article/${id}`} className="flex-box" >
                    <div className="flex-item" >
                        <p className="c-tag">
                            <span className="
c-tag--bluebg c-tag--rectangular">{topic}</span>
                            {no}
                        </p>
                        <h2 className="article-item__title">{title}</h2>
                        <p className="article-item__body" ref={(o)=>{this.articleBody = o}}>{body}</p>
                    </div>
                    {imgShow}
                </Link>
            </li>
        );
    }
}

export default ArticleItem;
