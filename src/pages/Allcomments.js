import React from 'react';
import ajax from 'superagent';

import CommentUl from '../components/commentUl/CommentUl'

class Allcomments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentWillMount () {
    }

    back() {
      window.history.back();
    }

    render() {
        console.log("render started");
        let comments = [{
                "body" : "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验.略懂产品设计和用htu",
                "author": "尼莫",
                "day": "1天前"
            },
            {
                "body" : "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。",
                "author": "hello",
                "day": "6天前"
            },
            {
                "body" : "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。",
                "author": "hello",
                "day": "6天前"
            },
            {
                "body" : "以前在豌豆荚负责产品，略懂产品设计和用户，对创业公司的一些坑，也比较清楚。以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。",
                "author": "hello",
                "day": "6天前"
            }
        ];
        return (
            <div className="all-comments">
              <div className="all-comments--title-block">
                <span className="iconfont icon-left" onClick={this.back}></span>
                <h1> 全部评论 </h1>
              </div>
              <section className="wrap-block">
                <CommentUl unfold = {true} comments={comments} />
              </section>
            </div>
            );
    }
}

Allcomments.propTypes = {
    children: React.PropTypes.node
}

export default Allcomments;
