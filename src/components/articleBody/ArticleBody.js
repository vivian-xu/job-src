import React from 'react';
import { IndexLink, Link } from 'react-router';
import avatar from '../../imgs/avatar.png';
import articleImg from '../../imgs/article-img.png';
import articleImg3 from '../../imgs/article-img3.png';

class ArticleBody extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleBody';
        this.state = {
            topic: "师兄师姐说职场",
            no: "No.35",
            title: "给马云爸爸搬砖的UI设计师( 上)",
            date: "2016.08.12",
            body: "嘉宾：一凡 UI设计师，本科在首都师范大学学习平面设计；经过多年努力考上北大研究僧。<br/> 一直都想做一个有关战争题材的合成作品，恰好素材库中找到了这个美女的素材，既然是战争题材，必然就少不了损坏建筑，燃烧火焰等等，找了一些其它作品做参考，具体如下。嗯，好久不更新，这个补上，还有下期也是c4d的教程，今后尽量多做平面配合3D的作品和教程。载地址附件中有我教程中用到的灯光预设，这个预设很有用，也很万能，安装方法网上找一下。<img src=articleImg3 alt='article image' />"
        };

        this.createMarkupArticle = this.createMarkupArticle.bind(this);
    }


    createMarkupArticle() {
        return {
            __html: this.state.body
        };
    }

    render() {
        return (
            <div className="wrap-block article" >
                <p className="c-tag">
                    <span className="
c-tag--bluebg c-tag--rectangular">{this.state.topic}</span>
                    {this.state.no}
                </p>
                <h1 className="article__title">
                    {this.state.title}
                </h1>
                <p className="article__time">
                    {this.state.date} &nbsp; {this.state.topic}
                 </p>
                 <img className="article__title-img" src={articleImg} alt='article-img' />
                <Link to="/mentors/5" className="article__container flex-box">

                    <img className="article__avatar"
                             src={avatar}
                             alt="师姐头像"
                             />

                    <p className="article__mentor flex-item">
                       <span>嘉宾 师姐</span>
                       <span className="name">一凡</span>
                    </p>
                    <span className="article__go-mentor iconfont icon-right">
                    </span>
                </Link>
                <p className="article__content" dangerouslySetInnerHTML={this.createMarkupArticle()} />
            </div>
        );
    }
}

export default ArticleBody;
