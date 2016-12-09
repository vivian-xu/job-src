import {Link} from 'react-router';
import { _isArray } from '../../commons/utiles';
import CommentsList from '../commentsList/CommentsList'

class Comments extends React.PureComponent {
    static defaultProps = {
      data: {
        commentsData: [],
        count: 0,
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

        this.limit = 3;
        this.hasBtn = false;
    }

    checkAllComments() {
        console.log('点击了查看全部评论');
    }

    render() {
        let {mentorId} = this.context.router.params;
        let {commentsData, count} = this.props.data;
        let btn = null;
        if(Array.isArray(commentsData)) {
            this.hasBtn = (this.limit > count) ? false : true;
            btn = ( !this.hasBtn ) ? null : (
                <Link
                    to={`/mentors/${mentorId}/comments`} className="c-btn"
                    onClick={this.checkAllComments}>
                            查看全部评论
                </Link> );
        }

        let commentsRes = this.hasBtn ? commentsData.slice(0, this.limit) : commentsData;

        return (
            <section className="wrap-block comments">
                <p className="section-title">
                    同学们的评价
                </p>
                <CommentsList comments = {commentsRes} />
                {btn}
            </section>
        );
    }
}

export default Comments;
