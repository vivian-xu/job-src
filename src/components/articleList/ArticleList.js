import React from 'react';
import { IndexLink, Link } from 'react-router';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleList';

        this.state = {
            "articlelist" : [
                {"topic": "师兄师姐说职场",
                 "no": "No.35",
                 "title": "给马云爸爸搬砖的UI设计师( 上)",
                 "body": "一直都想做一个有关战争题材的合成作品，恰好素材库中找到了这个美女的素材，既然是战争题材，必然就少不了损坏建筑，燃烧火焰等等，找了一些其它作品做参考，具体如下。嗯，好久不更新，这个补上，还有下期也是c4d的教程，今后尽量多做平面配合3D的作品和教程。载地址附件中有我教程中用到的灯光预设，这个预设很有用，也很万能，安装方法网上找一下。"
                }
            ]
        };
    }


    componentDidMount() {
        console.log("mount");
        $(".article-body").each(function(index, el) {
            let that = $(this);
            let wrapH = parseInt(that.css("line-height"))*3;
            console.log( "height:" + wrapH);
            console.log(that.outerHeight());

            while ( that.outerHeight() > wrapH ) {
                that.text( that.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
            };
        });
    }

    render() {
        let articles = this.state.articlelist.map(
            function( article, index ) {
                return (
                    <li key={index}>
                        <Link className="wrap-block"  to="article">
                            <div>
                                <p className="tag">
                                    <span >{article.topic}</span>
                                    {article.no}
                                </p>
                                <h2>{article.title}</h2>
                                <p className="article-body">{article.body}</p>
                            </div>
                            <div className="flex-img">
                                <i className="iconfont icon-star"></i>
                            </div>
                        </Link>
                    </li>
                )
            }
        )
        return (
            <ul className="articleList">
                {articles}
            </ul>
        );
    }
}

export default ArticleList;
