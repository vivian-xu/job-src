import React from 'react';
import ReactDOM from 'react-dom';

import {getDomStyle, _each} from '../../commons/utiles';

import CommentItem from './CommentItem_test';

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

// 评价中将大于 5 行的评论，加上 展开／关闭按钮
// 基础是 commentsUl ref = {(c) => this.rootNode = c}
    foldCommit ( ) {
        let commentsUl = this.rootNode;
        let commentsList = commentsUl.getElementsByClassName('comment-body');

        let rowWordsNum = commentsList[0].clientWidth/parseInt(getDomStyle(commentsList[0] , 'fontSize' ));

        _each( commentsList, function(index, el) {

            let me = this;
            let allText = me.innerText;
            let currentRows = allText.length/rowWordsNum;

            if(currentRows > 5) {
                let retText=allText.substring(0, rowWordsNum*5-7);
                let isFold = false;

                let newDom = document.createElement("div");
                newDom.className = "foldBtn";
                newDom.innerText = "展开";

                newDom.onclick = function (e) {
                    if(isFold){
                        console.log("本来是关的");
                      me.innerHTML = allText + "<span style='visibility:hidden;'> 占位</span>";
                      this.innerHTML = "关闭";

                    } else {
                      me.innerHTML= retText ;
                      this.innerText = "展开";
                    }
                    isFold = !isFold;
                    me.appendChild(newDom);
                }

                me.innerHTML = retText;
                me.appendChild(newDom);
            }

/*
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
        */

        } );

        // commentsList.each(
        //     function(index, el) {
        //     let that = $(this);

        //     let allStr = that.text() ;

        //     if( allStr.length/rowWordsNum > 5 ){

        //         let retStr=allStr.substring(0, rowWordsNum*5-7);
        //         let btnText = "展开";
        //         let isFold = false;

        //         let Btn = $(`<div>${btnText}</div>`).click(function(e){
        //             if(isFold){
        //               that.html(allStr + "<span style='visibility:hidden;'> 关闭</span>");
        //               $(this).text("关闭");
        //             } else {
        //               that.text(retStr);
        //               $(this).text("展开");
        //             }
        //             isFold = !isFold;
        //         }).addClass('foldBtn');

        //         that.text(retStr);
        //         Btn.insertAfter(that);
        //     } ;

        // }
        // );
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

    componentDidMount() {
        // console.log("commentUI did mount");
        if(this.props.comments.length > 0) {
            this.foldCommit();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("commentUI did update");
        // console.log(prevProps);
        if(this.props.comments.length > 0) {
            this.foldCommit();
        }
    }

    render() {
        // console.log( 'render commentUI');
        let commentsList ;
        if( (this.props.unfold && this.state.isOver) || !this.state.isOver ) {
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
            <div>
                <ul id="comments-list" className="comments-list" ref={(c) => this.rootNode = c}>
                    {commentsList}
                </ul>
                <CommentItem comment = {this.props.comments[0]} />

            </div>
        );
    }
}

export default CommentUl;
