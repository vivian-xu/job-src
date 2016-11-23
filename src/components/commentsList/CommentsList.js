import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {getDomStyle, _each} from '../../commons/utiles';

import CommentItem from '../commentItem/CommentItem';

class CommentsList extends React.PureComponent {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: React.PropTypes.array.isRequired,
     }

    constructor(props) {
        super(props);
        this.displayName = 'CommentsList';
    }

    render() {
        let commentsList = this.props.comments.map(function(comment, index) {
            return (<CommentItem comment = {comment} key={index} />)
        });

        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="fadeToggle"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={1000}
                    transitionAppearTimeout={1000}
                    transitionAppear={true}

                    id="comments-list"
                    className="comments-list"
                    component={'ul'}
                >
                {commentsList}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default CommentsList;
