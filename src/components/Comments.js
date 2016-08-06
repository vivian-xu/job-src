import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Comments';

        // this.state =
    }

    foldCommit () {
        console.log("Hi! I'm in!");
        let commentsList = $("#comments-list .comment-body");
        let allStr = "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验.略懂产品设计和用htu"+"<span style='visibility:hidden;'> 关闭</span>";

        let rowWordsNum = commentsList.width()/parseInt(commentsList.css("font-size"));

        let retStr=allStr.substring(0, rowWordsNum*5-4);

        let btnText = "展开";
        let isFold = false;
        let Btn = $(`<div>${btnText}</div>`).click(function(e){
            if(isFold){
              commentsList.html(allStr);
              $(this).text("关闭");
            } else {
              commentsList.text(retStr);
              $(this).text("展开");
            }
            isFold = !isFold;
        }).addClass('foldBtn');


        if( allStr.length/rowWordsNum > 5 ){
            commentsList.text(retStr);
            Btn.insertAfter(commentsList);
        // }).insertAfter(commentsList).addClass("foldBtn");

        } else {
            commentsList.html(allStr);
        }


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
                <ul id="comments-list">
                    <li>
                        <div className="img">
                            <i className="iconfont icon-star" />
                        </div>
                        <div className="comment">
                            <p className="comment-body">
                            </p>
                            <p className="author">尼莫
                                <span className='time'>
                                    6天前
                                </span>
                            </p>
                        </div>
                    </li>
                </ul>
                <button className="show-comments">
                    查看全部评论
                </button>
            </section>
        );
    }
}

export default Comments;
