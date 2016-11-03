import "./commentUl.scss";
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {getDomStyle, _each} from '../../commons/utiles';

import CommentItem from '../commentItem/CommentItem';

class CommentUl extends React.PureComponent {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: React.PropTypes.array.isRequired,
     }

    constructor(props) {
        super(props);
        this.displayName = 'CommentUl';
    }

    render() {
        let commentsList = this.props.comments.map(function(comment, index) {
            return (<CommentItem comment = {comment} key={index} />)
        });

        return (
            <div>
                <ul id="comments-list" className="comments-list">
                    <ReactCSSTransitionGroup
                        transitionName="fadeToggle"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={1000}
                        transitionAppearTimeout={1000}
                        transitionAppear={true}
                    >
                    {commentsList}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
}

export default CommentUl;
