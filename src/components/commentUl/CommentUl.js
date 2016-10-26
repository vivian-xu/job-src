import React from 'react';
import ReactDOM from 'react-dom';


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

    foldCommit ( ) {
        console.log('fold Commit');
        let commentsUl = ReactDOM.findDOMNode(this.rootNode);
        let commentsList = commentsUl.getElementsByTagName('li');
        console.log(commentsUl);
        console.log(commentsUl.querySelector(".comments-body" ) );
        console.log( commentsList);
        console.log( commentsList.length );

        for (let i = 0; i<commentsList.length; i++ ) {
            console.log( commentsList[ i ] );
        }

        // let rowWordsNum = commentsList[0].width()/parseInt(commentsList.css("font-size"));

        commentsList.each(function(index, el) {
            let that = $(this);

            let allStr = that.text() ;

            if( allStr.length/rowWordsNum > 5 ){

                let retStr=allStr.substring(0, rowWordsNum*5-7);
                let btnText = "展开";
                let isFold = false;

                let Btn = $(`<div>${btnText}</div>`).click(function(e){
                    if(isFold){
                      that.html(allStr + "<span style='visibility:hidden;'> 关闭</span>");
                      $(this).text("关闭");
                    } else {
                      that.text(retStr);
                      $(this).text("展开");
                    }
                    isFold = !isFold;
                }).addClass('foldBtn');

                that.text(retStr);
                Btn.insertAfter(that);

            } ;
        });
    }

    componentWillMount() {
        // console.log("commentUl will mount");
        // console.log( this.props.comments.length > this.props.limit );
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

    componentDidMount() {
        // console.log("commentUI did mount");
        this.foldCommit();
    }

    render() {
        // console.log( 'render commentUI');

        let commentsList ;
        if( (this.props.unfold && this.state.isOver) || !this.state.isOver ) {
            // console.log( this.props.comments );
            commentsList = this.props.comments.map(function(comment, index) {
                return (<li key={index}>
                                <div className="img">
                                </div>
                                <div className="comment">
                                    <p className="comment-body">
                                        {comment.notes}
                                    </p>
                                    <p className="author">{comment.student}
                                        <span className='time'>
                                            {comment.day}
                                        </span>
                                    </p>
                                </div>
                            </li>)
            });
        } else {
            console.log('shortComments:');
            console.log( this.state.shortComments );
            commentsList = this.state.shortComments.map(function(comment, index) {
                return (<li key={index}>
                                <div className="img">
                                </div>
                                <div className="comment">
                                    <p className="comment-body">
                                        {comment.notes}
                                    </p>
                                    <p className="author">{comment.student}
                                        <span className='time'>
                                            {comment.day}
                                        </span>
                                    </p>
                                </div>
                            </li>)
            });
        };

        return (
            <ul id="comments-list" className="comments-list" ref={(c) => this.rootNode = c}>
                {commentsList}
            </ul>
        );
    }
}

export default CommentUl;
