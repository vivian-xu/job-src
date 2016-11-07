import { IndexLink, Link } from 'react-router';
import {  _headleMultilineTextOverflow} from '../../commons/utiles';

class ArticleItem extends React.Component {

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
      let imgShow = !this.props.article.imgsrc ? null : (
            <img src={this.props.article.imgsrc} alt={this.props.article.imgdetail} className="article__img" />);


        console.log('render');
        return (
            <li className="wrap-block">
                <Link to="article" className="flex-box" >
                    <div className="flex-item" >
                        <p className="c-tag">
                            <span className="
c-tag--bluebg c-tag--rectangular">{this.props.article.topic}</span>
                            {this.props.article.no}
                        </p>
                        <h2 className="article__title">{this.props.article.title}</h2>
                        <p className="article__body" ref={(o)=>{this.articleBody = o}}>{this.props.article.body}</p>
                    </div>
                    {imgShow}
                </Link>
            </li>
        );
    }
}

export default ArticleItem;
