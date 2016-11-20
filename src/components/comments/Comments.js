import {Link} from 'react-router';
import { _isArray } from '../../commons/utiles';
import CommentUl from '../commentUl/CommentUl'

class Comments extends React.PureComponent {
    static defaultProps = {
      data: {
        commentsData: [],
        count: 0
      }
    }

    static propTypes = {
        data: React.PropTypes.shape({
            commentsData: React.PropTypes.array.isRequired,
            count: React.PropTypes.number.isRequired,
        }),
     }

    static contextTypes = {
       router: React.PropTypes.object,
     }

    constructor(props, context) {
        super(props, context);
        this.displayName = 'Comments';

        this.checkAllComments = this.checkAllComments.bind(this);
    }

    checkAllComments() {
        console.log('点击了查看全部评论');
    }

    render() {
        let {pathname} = this.context.router.location;
        let {commentsData, count} = this.props.data;

        let btn = null;
        if(_isArray(commentsData)) {
            btn =( () => {
                if( commentsData.length < count) {
                    return (
                        <Link to={`${pathname}/comments`} className="c-btn" onClick={this.checkAllComments}>
                            查看全部评论
                        </Link>
                    );
                }
            })();
        }

        return (
            <section className="wrap-block comments">
                <p className="section-title">
                    同学们的评价
                </p>
                <CommentUl comments = {commentsData} />
                {btn}
            </section>
        );
    }
}

export default Comments;
