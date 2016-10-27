import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {getDomStyle, _each} from '../../commons/utiles';

import CommentItem from '../commentItem/CommentItem';

class CommentUl extends React.Component {
    static defaultProps = {
        limit : 3,
        comments : [
        ],
        unfold: true,
    }

    static propTypes = {
        limit: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.number,
        ]),
        comments: React.PropTypes.array.isRequired,
        unfold: React.PropTypes.bool,
        checkAllComments: React.PropTypes.func,
     }

    constructor(props) {
        super(props);
        this.displayName = 'CommentUl';

        this.state= {
            isOver: false,
            shortComments: []
        }
    }

    componentWillMount() {
        if( this.props.comments.length > this.props.limit ){
            for( let i=0; i < this.props.limit; i++) {
                this.state.shortComments.push(this.props.comments[i]);
            }
            this.setState({isOver: true});
        } else {
            // 设置是否有 查看全部评论 按键
            this.props.onhandleBtn(false);
        } ;
    }


    render() {
        // console.log( 'render commentUI');
        let commentsList ;
        if( (this.props.unfold && this.state.isOver) || !this.state.isOver ) {
            commentsList = this.props.comments.map(function(comment, index) {
                return (<CommentItem comment = {comment} key={index} />)
            });
        } else {
            console.log('shortComments:');
            commentsList = this.state.shortComments.map(function(comment, index) {
                return (<CommentItem comment = {comment} key={index} />)
            });
        };

        return (
            <div>
                <ul id="comments-list" className="comments-list" ref={(c) => this.rootNode = c}>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                        component={this.FirstChild}
                        transitionAppear={true}
                        transitionAppearTimeout={1000}
                    >
                    {commentsList}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
}

export default CommentUl;
