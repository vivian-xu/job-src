import ajax from 'superagent';

import Loading from '../../components/loading/Loading';
import CommentsList from '../../components/commentsList/CommentsList';

class Allcomments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isloading: true, // 是否关闭页面初进来时候的loading页面
      id: 0,
      pageCount: 0,
      comments: [],
      isover: false, // 是否已经没有能请求的数据了
    };

    this.fetchingDatas = this.fetchingDatas.bind(this);
    this.onhandleBack = this.onhandleBack.bind(this);
    this.onhandleNewDatas = this.onhandleNewDatas.bind(this);


        // 基本的url
    this.baseURL = 'http://wuguishifu.com/api/mentors/5/comments/';
        // 下一页的url
    this.nextURL = "";
  }

  /*
      @ url: string 请求的 url 地址；
      @ page: num 请求的 页数; ( 之后可能不需要)
  */
    fetchingDatas(url, page) {
      ajax
      .get(url)
      .send({page: page})
      .end((error, response) => {
        if( !error && response ) {
            let isover = false;
            let data = response.body;

            if( !data.comments || data.comments.length < 20) {
              isover = true;
            };

            this.setState({
              isloading: false,
              pageCount: page,
              comments: data.comments,
              id: data.id,
              isover: isover,
            });

            console.info('fetching success');

        } else {
        console.error(`Error fetching ${name} `, error);
       }
      });
    }

  onhandleNewDatas() {
      console.log('newdata');
    // let newPage = this.state.pageCount + 1;
    // this.fetchingDatas(this.baseURL, newPage);
  }

  onhandleBack() {
    this.props.router.goBack();
  }

  componentWillMount() {
    this.fetchingDatas(this.baseURL, this.state.pageCount);
  }

  render() {
    // comments 为空, 并且 isover 是 false 时候loading
    let content = (this.state.isloading) ? (<Loading />) : (
        <div className="all-comments">
          <div className="all-comments__header">
              <span className="iconfont icon-left all-comments__back" onClick={this.onhandleBack}></span>
              <h1 className="all-comments__title"> 全部评论 </h1>
          </div>
          <section className="wrap-block wrap-block--vertical-small">
              <CommentsList
                comments={this.state.comments}
              />
          </section>
      </div>
        );
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default Allcomments;
