import React from 'react';

class CommentUl extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CommentUl';

        this.state= {
            comments: [
                {
                    "body" : "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验.略懂产品设计和用htu",
                    "author": "尼莫",
                    "day": "1天前"
                },
                {
                    "body" : "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。",
                    "author": "hello",
                    "day": "6天前"
                },
                {
                    "body" : "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。",
                    "author": "hello",
                    "day": "6天前"
                },
                {
                    "body" : "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。",
                    "author": "hello",
                    "day": "6天前"
                }
            ],
            isOverThree: false,
            shortComments: []
        }
    }

    componentWillMount() {
        console.log("commentUl will mount");
        console.log(this.props.onhandleBtn);

        if( this.state.comments.length > 3 ){
            for( let i=0; i < 3; i++) {
                this.state.shortComments.push(this.state.comments[i]);
            }
            this.setState({isOverThree: true});
        } else {
            this.props.onhandleBtn(false);
        } ;
    }

    render() {
        let commentsList ;
        if( (this.props.unfold && this.state.isOverThree) || !this.state.isOverThree ) {

            commentsList = this.state.comments.map(function(comment, index) {
                return (<li key={index}>
                                <div className="img">
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
            commentsList = this.state.shortComments.map(function(comment, index) {
                return (<li key={index}>
                                <div className="img">
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
        };

        return (
            <ul id="comments-list">
                {commentsList}
            </ul>
        );
    }
}

export default CommentUl;
