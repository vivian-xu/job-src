import { IndexLink, Link } from 'react-router';
import ArticleItem from '../articleItem/ArticleItem';
import thumbnail from '../../imgs/article-thumbnail.png';

class ArticleList extends React.Component {
    static defaultProps = {
        "articlelist" : [
            {"topic": "师兄师姐说职场",
             "no": "No.35",
             "title": "给马云爸爸搬砖的UI设计师( 上)",
            "imgsrc": thumbnail,
            "imgdetail": "缩略图",
             "body": "一直都想做一个有关战争题材的合成作品，恰好素 材库中找到了这个美女的素材，既然是战争题材，必然就少不了损坏建筑，燃烧火焰等等，找了一些其它作品做参考，具体如下。嗯，好久不更新，这个补上，还有下期也是c4d的教程，今后尽量多做平面配合3D的作品和教程。载地址附件中有我教程中用到的灯光预设，这个预设很有用，也很万能，安装方法网上找一下。"
            }
        ]
    }
    static propTypes = {
      articlelist: React.PropTypes.array.isRequired,
    }
    constructor(props) {
        super(props);
        this.displayName = 'ArticleList';
    }

    render() {
        let articles = this.props.articlelist.map((article, index) => {
                return (
                    <ArticleItem article={article} key={index} />
                )
            }
        );

        return (
            <ul className="articleList">
                {articles}
            </ul>
        );
    }
}

export default ArticleList;
