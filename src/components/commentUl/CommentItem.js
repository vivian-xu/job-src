import React from 'react';
import {
  findDOMNode
} from 'react-dom';
import {
  getDomStyle,
  _each
} from '../../commons/utiles';

class commentItem extends React.Component {
  static defaultProps = {
    comment: []
  }
  static propTypes = {
    // comment: React.PropTypes.obj.isRequired,
  }

  constructor(props) {
    super(props);
    this.displayName = 'commentItem';

    this.state = {}
  }

  // 评价中将大于 5 行的评论，加上 展开／关闭按钮
  foldCommit() {
    console.log('fold Commit');
    let body = this.bodyNode;
    let rowWordsNum = body.clientWidth / parseInt(getDomStyle(body, 'fontSize'));

    let allText = this.props.comment.notes;
    let currentRows = allText.length / rowWordsNum;

    if (currentRows > 5) {
      let retText = allText.substring(0, rowWordsNum * 5 - 7);
      let isFold = false;

      let newDom = document.createElement("div");
      newDom.className = "foldBtn";
      newDom.innerText = "展开";

      newDom.onclick = function(e) {
        if (isFold) {
          console.log("本来是关的");
          body.innerHTML = allText + "<span style='visibility:hidden;'> 占位</span>";
          this.innerHTML = "关闭";

        } else {
          body.innerHTML = retText;
          this.innerText = "展开";
        }
        isFold = !isFold;
        body.appendChild(newDom);
      }

      body.innerHTML = retText;
      body.appendChild(newDom);
    }
  }

  componentDidUpdate() {
    let $root = findDOMNode(this);
    console.log($root);
    this.foldCommit();
  }

  render() {
    return (<li>
        <div className="img"></div>
        <div className = "comment" >
            <p className="comment-body" ref={(c) => this.bodyNode = c }>
                {this.props.comment.notes}
            </p>
            <p className = "author" >
                {this.props.comment.student}
                <span className='time'>
                    {this.props.comment.day}
                </span>
            </p>
        </div>
    </li>);
  }
}

export default commentItem;
