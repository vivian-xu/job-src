import React from 'react';
import CommentUl from '../commentUl/CommentUl'

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Comments';
        this.state={
            unfold : false
        }
    }


    foldCommit ( ) {
        console.log("Hi! I'm in!");

        let commentsList = $("#comments-list .comment-body");

        let rowWordsNum = commentsList.width()/parseInt(commentsList.css("font-size"));

        console.log(commentsList.width());
        console.log("commentsList-font-size:"+commentsList.css("font-size"));


        commentsList.each(function(index, el) {
            let that = $(this);

            let allStr = that.text() ;

            if( allStr.length/rowWordsNum > 5 ){

                console.log(allStr.length+"/"+rowWordsNum +"="+allStr.length/rowWordsNum  );

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

    checkAllComments() {
        this.setState({"unfold" : true});
    }

    componentWillMount() {
        console.log("this.state:" + this.state.unfold );
    }

    componentDidMount() {
        this.foldCommit();
    }

    render() {

        return (
            <section className="wrap-block comments">
                <p className="section-title">
                    同学们的评价

                </p>
                <CommentUl unfold={this.state.unfold}/>
                <a className="show-comments" onClick={this.checkAllComments.bind(this)}>
                    查看全部评论
                </a>
            </section>
        );
    }
}

export default Comments;
