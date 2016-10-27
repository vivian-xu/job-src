import React from 'react';
import CommentUl from '../commentUl/CommentUl'

class Comments extends React.Component {

    static propTypes = {
        data: React.PropTypes.object.isRequired,
     }

    constructor(props) {
        super(props);
        this.displayName = 'Comments';

        this.checkAllComments = this.checkAllComments.bind(this);
    }

    checkAllComments() {
        console.log('点击了查看全部评论');
    }

    render() {
        console.log( 'comments render start');
            console.log(this.props.data);

        let btn =( () => {
            if( this.props.data.commentsData.length < this.props.data.count) {
                return (
                    <a className="show-comments" onClick={this.checkAllComments}>
                        查看全部评论
                    </a>
                );
            }
        })();

        return (
            <section className="wrap-block comments">
                <p className="section-title">
                    同学们的评价
                </p>
                <CommentUl comments = {this.props.data.commentsData} />
                {btn}
            </section>
        );
    }
}

export default Comments;
