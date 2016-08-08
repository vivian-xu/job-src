import React from 'react';

class CommentUl extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CommentUl';

        this.state= {
            "comments": [
                {
                    "body" : "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验.略懂产品设计和用htu",
                    "author": "尼莫",
                    "day": "1天前"
                },
                {
                    "body" : "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。",
                    "author": "hello",
                    "day": "6天前"
                }
            ],
            "shortComments": []
        }
    }

    componentWillMount() {
        console.log( this.props);

        if( this.state.comments.length > 1 ){
            for( let i=0; i < 1; i++) {
                this.state.shortComments.push(this.state.comments[i]);
            }
        };
    }

    render() {
        let commentsList ;

        if( this.props.unfold ) {
            console.log("unfold" +this.props.unfold );

            commentsList = this.state.comments.map(function(comment, index) {

                return (<li key={index}>
                                <div className="img">
                                    <i className="iconfont icon-star" />
                                </div>
                                <div className="comment">
                                    <p className="comment-body">
                                        {comment.body}
                                    </p>
                                    <p className="author">{comment.author}
                                        <span className='time'>
                                            {comment.day}
                                        </span>
                                    </p>
                                </div>
                            </li>)
            });
        } else {
            console.log("shortComments" );

            commentsList = this.state.shortComments.map(function(comment, index) {
                return (<li key={index}>
                                <div className="img">
                                    <i className="iconfont icon-star" />
                                </div>
                                <div className="comment">
                                    <p className="comment-body">
                                        {comment.body}
                                    </p>
                                    <p className="author">{comment.author}
                                        <span className='time'>
                                            {comment.day}
                                        </span>
                                    </p>
                                </div>
                            </li>)
            });
        }

        return (
            <ul id="comments-list">
                {commentsList}
            </ul>
        );
    }
}

export default CommentUl;
