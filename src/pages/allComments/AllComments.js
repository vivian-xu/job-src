// import "./allComments.scss";
import ajax from 'superagent';

import CommentUl from '../../components/commentUl/CommentUl'
import InfiniteList from '../../components/infiniteList/InfiniteList'

class Allcomments extends React.Component {
  constructor(props) {
    super(props);

    this.onhandleBack = this.onhandleBack.bind(this);
  }

  onhandleBack() {
    this.props.router.goBack();
  }

  render() {
    return (
      <div className="all-comments">
        <div className="all-comments__header">
            <span className="iconfont icon-left all-comments__back" onClick={this.onhandleBack}></span>
            <h1 className="all-comments__title"> 全部评论 </h1>
        </div>
        <section className="wrap-block wrap-block--vertical-small">
            <InfiniteList />
        </section>
    </div>
    );
  }
}

export default Allcomments;
