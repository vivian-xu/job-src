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
    comment: React.PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props);
    this.displayName = 'commentItem';

    // hasFoldBtn 是否有折叠展开的按钮
    // isFold 是否折叠
    this.state = {
      hasFoldBtn: false,
      isFold: false,
      limitWords: 0
    }

    this.onhandleClickFold = this.onhandleClickFold.bind(this);
  }

  // 评价中将大于 5 行的评论，加上 展开／关闭按钮
  foldCommit() {
    console.error('fold Commit');
    console.log(this.state);
    let body = this.bodyNode;
    let rowWordsNum = body.clientWidth / parseInt(getDomStyle(body, 'fontSize'));

    let allText = this.props.comment.notes;
    let currentRows = allText.length / rowWordsNum;

    if (currentRows > 5) {
      var limitWords = rowWordsNum * 5 - 7;
      let retText = allText.substring(0, limitWords);
      let isFold = false;
      this.setState({
        hasFoldBtn: true,
        isFold: true,
        limitWords: limitWords
      });

    } else {
      this.setState({
        hasFoldBtn: false,
        isFold: false,
        limitWords: 0
      });
    }
    console.log(this.state);

    // let newDom = document.createElement("div");
    // newDom.className = "foldBtn";
    // newDom.innerText = "展开";

    //   newDom.onclick = function(e) {
    //     if (isFold) {
    //       console.log("本来是关的");
    //       body.innerHTML = allText + "<span style='visibility:hidden;'> 占位</span>";
    //       this.innerHTML = "关闭";

    //     } else {
    //       body.innerHTML = retText;
    //       this.innerText = "展开";
    //     }
    //     isFold = !isFold;
    //     body.appendChild(newDom);
    //   }

    //   body.innerHTML = retText;
    //   body.appendChild(newDom);
    // }
  }

  onhandleClickFold() {
    this.setState({
      isFold: !this.state.isFold
    });
  }

  componentDidMount() {
    console.log('DID MOUNT');
    console.log(this.props.comment);
    if(this.props.comment != false) {
      this.foldCommit();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps || this.state !== nextState) {
      console.warn("should render");
      return true;
    } else {
      console.log("should not render");
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('DID UPDATE');
    console.log(this.props.comment);

    // props.comment 为空的时候为 false ，
    // 不为空的时候为 true
    if (this.props !== prevProps && this.props.comment != false) {
      console.log("***********************");
      console.log("***********************");
      console.log("***********************");
      this.foldCommit();
    }
  }

  render() {

    console.log("*");
    console.log("**");
    console.log("***");
    console.log(this.state);
    let allComment = this.props.comment.notes;
    let commentNotes = this.state.hasFoldBtn && this.state.isFold ? allComment.substring(0, this.state.limitWords) : allComment;
    let btnStyle = this.state.hasFoldBtn ? {display: ''}: {display:'none'};

    return (<li>
        <div className="img"></div>
        <div className = "comment" >
            <p className="comment-body" ref={(c) => this.bodyNode = c }>
                {commentNotes}
                <div className="foldBtn" onClick={this.onhandleClickFold} style = {btnStyle}>{this.state.isFold? '展开' : '收回'}</div>
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
