// import "./allComments.scss";

import React from 'react';
import ajax from 'superagent';

import CommentUl from '../../components/commentUl/CommentUl'

class Allcomments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  back() {
    window.history.back();
  }

  render() {
    console.log("render started");
    let comments = [{
      "notes": "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验.略懂产品设计和用htu",
      "student": "尼莫",
    }, {
      "notes": "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。",
      "student": "hello",
    }, {
      "notes": "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。",
      "student": "hello",
    }, {
      "notes": "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。",
      "student": "hello",
    }];
    return (
      <div className="all-comments">
        <div className="all-comments--title-block">
            <span className="iconfont icon-left" onClick={this.back}></span>
            <h1> 全部评论 </h1>
        </div>
        <section className="wrap-block">
            <CommentUl comments={comments} />
        </section>
    </div>
    );
  }
}

Allcomments.propTypes = {
  children: React.PropTypes.node
}

export default Allcomments;
