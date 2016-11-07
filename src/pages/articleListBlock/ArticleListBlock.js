import Slide from '../../components/slide/Slide';
import ArticleList from '../../components/articleList/ArticleList';
import Loading from '../../components/loading/Loading';

import src1 from '../../imgs/img1.png';
import src2 from '../../imgs/img2.png';
import src3 from '../../imgs/img3.png';
import thumbnail from '../../imgs/article-thumbnail.png';
import thumbnail2 from '../../imgs/article-thumbnail2.png';

class ArticleListBlock extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleListBlock';

        this.state = {
            slideImgs: [
                {
                    src1,
                    imgdetail: "slide 1"
                },
                {
                    src2,
                    imgdetail: "slide 2"
                },
                {
                    src3,
                    imgdetail: "slide 3"
                }
            ],
            "articlelist" : [
                {"topic": "师兄师姐说职场",
                 "no": "No.35",
                 "title": "给马云爸爸搬砖的UI设计师( 上)",
                 "imgsrc": thumbnail,
                 "imgdetail": "缩略图",
                 "body": "一直都想做一个有关战争题材的合成作品，恰好素 材库中找到了这个美女的素材，既然是战争题材，必然就少不了损坏建筑，燃烧火焰等等，找了一些其它作品做参考，具体如下。嗯，好久不更新，这个补上，还有下期也是c4d的教程，今后尽量多做平面配合3D的作品和教程。载地址附件中有我教程中用到的灯光预设，这个预设很有用，也很万能，安装方法网上找一下。"
                },
                {"topic": "师兄师姐说职场",
                 "no": "No.34",
                 "title": "不需要上法庭的律师（下）",
                 "imgsrc": "",
                 "imgdetail": "",
                 "body": "嘉宾：彭律师。律所工作5年，现任职金融机构，华东理工大学本科学习英语和法律，华东理工大学本科学习英语和法律，毕业后前往。一直都想做一个有关战争题材的合成作品，恰好素材库中找到了这个美女的素材，既然是战争题材，必然就少不了损坏建筑，燃烧火焰等等，找了一些其它作品做参考，具体如下。嗯，好久不更新，这个补上，还有下期也是c4d的教程，今后尽量多做平面配合3D的作品和教程。载地址附件中有我教程中用到的灯光预设，这个预设很有用，也很万能，安装方法网上找一下。"
                },
                {"topic": "专题名",
                 "no": "No.34",
                 "title": "同学，你想创业吗？",
                 "imgsrc": thumbnail2,
                 "imgdetail": "",
                 "body": "为什么做男性买手电商？三个创始人是怎样组织到一起的？初期融资屡屡碰壁？男生跟女生“买。一直都想做一个有关战争题材的合成作品，恰好素材库中找到了这个美女的素材，既然是战争题材，必然就少不了损坏建筑，燃烧火焰等等，找了一些其它作品做参考，具体如下。嗯，好久不更新，这个补上，还有下期也是c4d的教程，今后尽量多做平面配合3D的作品和教程。载地址附件中有我教程中用到的灯光预设，这个预设很有用，也很万能，安装方法网上找一下。"
                }
            ]
        };
    }
    render() {
        let {slide, articlelist} = this.state;
        return (
            <div>
                <Loading />
                <Slide imgs={slide} />
                <ArticleList articlelist={articlelist} />
            </div>
        );
    }
}

export default ArticleListBlock;
