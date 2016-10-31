import "./commentUl.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ReactTransitionGroup from 'react-addons-transition-group';

import {getDomStyle, _each} from '../../commons/utiles';

import CommentItem from '../commentItem/CommentItem';

class CommentUl extends React.Component {
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

    call ( ) {
        console.error("Appear");
    }

    componentWillAppear( call ) {
        console.error("Appear");

    }
    componentDidAppear() {
        console.error("Appear");
    }

    componentDidEnter() {
        console.error("Enter");
    }

    componentDidLeave() {
        console.error("Leave");
    }

    render() {
        let commentsList = this.props.comments.map(function(comment, index) {
            return (<CommentItem comment = {comment} key={index} />)
        });

        return (
            <div>
                <ul id="comments-list" className="comments-list">
                    <ReactCSSTransitionGroup
                        transitionName="commentComeOut"
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
