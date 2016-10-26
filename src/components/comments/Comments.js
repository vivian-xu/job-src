import React from 'react';
import CommentUl from '../commentUl/CommentUl'

class Comments extends React.Component {

    static propTypes = {
        data: React.PropTypes.array.isRequired,
     }

    constructor(props) {
        super(props);
        this.displayName = 'Comments';
        // unfold 代表 是否展开全部评论
        // btnflag 代表是否有 查看全部评论的 btn
        //  true 有
        //  false 没有
        this.state={
            unfold : false,
            btnflag: true
        }
    }

    foldCommit ( ) {
        console.log('fold Commit');
        let commentsList = $("#comments-list .comment-body");

        let rowWordsNum = commentsList.width()/parseInt(commentsList.css("font-size"));

        console.log('commentsList');
        console.log(this.refs.commentsList);
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
// 设置是否有 查看全部评论 按键
    hasCheckAllComments( bool ) {
        this.setState({
            btnflag: bool
        });
    }

// 点击 查看全部评论 ，展开评论
    checkAllComments() {
        this.setState({"unfold" : true});
    }

    componentDidMount() {
        this.foldCommit();
    }

    render() {
        console.log( 'comments render start');

        let btn =( () => {
            if( this.state.btnflag == true) {
                return (
                    <a className="show-comments" onClick={this.checkAllComments.bind(this)}>
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
                <CommentUl limit = '3' unfold={this.state.unfold}  comments = {this.props.data} onhandleBtn = {this.hasCheckAllComments.bind(this)}/>
                {btn}
            </section>
        );
    }
}

export default Comments;
