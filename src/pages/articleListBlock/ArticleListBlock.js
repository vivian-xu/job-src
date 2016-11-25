import ajax from 'superagent';
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
            isloading: true,
            slide: [
            ],
            articlelist: [
                // {"topic": "师兄师姐说职场",
                //  "no": "No.35",
                //  "title": "给马云爸爸搬砖的UI设计师( 上)",
                //  "imgsrc": thumbnail,
                //  "imgdetail": "缩略图",
                //  "body": "一直都想做一个有关战争题材的合成作品，恰好素 材库中找到了这个美女的素材，既然是战争题材，必然就少不了损坏建筑，燃烧火焰等等，找了一些其它作品做参考，具体如下。嗯，好久不更新，这个补上，还有下期也是c4d的教程，今后尽量多做平面配合3D的作品和教程。载地址附件中有我教程中用到的灯光预设，这个预设很有用，也很万能，安装方法网上找一下。"
                // },
                // {"topic": "师兄师姐说职场",
                //  "no": "No.34",
                //  "title": "不需要上法庭的律师（下）",
                //  "imgsrc": "",
                //  "imgdetail": "",
                //  "body": "嘉宾：彭律师。律所工作5年，现任职金融机构，华东理工大学本科学习英语和法律，华东理工大学本科学习英语和法律，毕业后前往。一直都想做一个有关战争题材的合成作品，恰好素材库中找到了这个美女的素材，既然是战争题材，必然就少不了损坏建筑，燃烧火焰等等，找了一些其它作品做参考，具体如下。嗯，好久不更新，这个补上，还有下期也是c4d的教程，今后尽量多做平面配合3D的作品和教程。载地址附件中有我教程中用到的灯光预设，这个预设很有用，也很万能，安装方法网上找一下。"
                // },
                // {"topic": "专题名",
                //  "no": "No.34",
                //  "title": "同学，你想创业吗？",
                //  "imgsrc": thumbnail2,
                //  "imgdetail": "",
                //  "body": "为什么做男性买手电商？三个创始人是怎样组织到一起的？初期融资屡屡碰壁？男生跟女生“买。一直都想做一个有关战争题材的合成作品，恰好素材库中找到了这个美女的素材，既然是战争题材，必然就少不了损坏建筑，燃烧火焰等等，找了一些其它作品做参考，具体如下。嗯，好久不更新，这个补上，还有下期也是c4d的教程，今后尽量多做平面配合3D的作品和教程。载地址附件中有我教程中用到的灯光预设，这个预设很有用，也很万能，安装方法网上找一下。"
                // }
            ]
        };

        this.fetchingDatas = this.fetchingDatas.bind(this);
        this.onLoading = this.onLoading.bind(this);

        this.baseURL = 'http://wuguishifu.com/api/articlelist/';
    }

    fetchingDatas(url, page) {
      ajax
      .get(url)
      .send({page: page})
      .end((error, response) => {
        if( !error && response ) {
            let data = response.body;

            let { articlelist } = data;

            console.log(data);
            if(page === 0) {
                this.setState({
                    slide: data.slide,
                    articlelist,
                })
            } else {
                this.setState({
                    articlelist: [
                        ...this.state.articlelist,
                        ...articlelist
                    ]
                })
            }
            //  如果没有数据了，设置 isover
            // if( !data.comments || data.comments.length < 20) {
            //   this.hasMore = false;
            // };

            // 赠添新的数据
            // this.setState({
            //   comments: this.state.comments.concat(data.comments),
            //   isloading: false,
            // });
            console.info('fetching success');
        } else {
        console.error(`Error fetching ${name} `, error);
       }
      });
    }

    //  fetch 新数据
    onLoading(page) {
        console.log('ready to fetch');
        // fetch 新的数据 并更新页数
        this.fetchingDatas(this.baseURL, page);
    }

    componentWillMount() {
        this.onLoading(0);
    }
    componentDidMount() {
        let count = 1;

        let setTimeFetch = () => {
            this.onLoading(count++);
        }
        // setTimeout(function(){
        //     this.onLoading(count++);
        // } , 1000);
        setTimeout(setTimeFetch , 1000)
    }

    render() {
        let {isloading, slide, articlelist} = this.state;

        return (
            <div>
                <Slide imgs={slide} />
                <ArticleList articlelist={articlelist} />
            </div>
        );
    }
}

export default ArticleListBlock;
