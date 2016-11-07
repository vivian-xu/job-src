import React from 'react';
import { IndexLink, Link } from 'react-router';

class ArticleBody extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleBody';
        this.state = {
            "topic": "师兄师姐说职场",
             "no": "No.35",
             "title": "给马云爸爸搬砖的UI设计师( 上)",
             "date": "2016.08.12",
             "body": "一直都想做一个有关战争题材的合成作品，恰好素材库中找到了这个美女的素材，既然是战争题材，必然就少不了损坏建筑，燃烧火焰等等，找了一些其它作品做参考，具体如下。嗯，好久不更新，这个补上，还有下期也是c4d的教程，今后尽量多做平面配合3D的作品和教程。载地址附件中有我教程中用到的灯光预设，这个预设很有用，也很万能，安装方法网上找一下。"
        };
    }

    componentDidMount() {

    }

                    // <div className="img">
                    //     <i className="iconfont icon-star"></i>
                    // </div>
                    // <p>
                    //     <span>嘉宾 师姐</span><br/>
                    //     <span className="name">一凡</span>
                    // </p>
    render() {
        return (
            <div className="wrap-block" >
                <p className="c-tag">
                    <span className="
c-tag--bluebg c-tag--rectangular">{this.state.topic}</span>
                    {this.state.no}
                </p>
                <h2>{this.state.title}</h2>
                <p className="date">{this.state.date} {this.state.topic} </p>
                <Link to="/mentors/5">
                    <div className="note">

                        <div className="author">
                            <div className="img">
                                <i className="iconfont icon-star1"></i>
                            </div>
                            <p>
                               <span>嘉宾 师姐</span><br/>
                               <span className="name">一凡</span>
                           </p>

                        </div>
                        <p className="icon">
                            <i className="iconfont icon-right"> </i>
                        </p>
                    </div>
                </Link>
                <p className="article-body">{this.state.body}</p>
            </div>
        );
    }
}

export default ArticleBody;
