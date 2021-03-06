import {
  getDomStyle,
  _each,
} from '../../commons/utiles';

class CommentItem extends React.PureComponent {
  static defaultProps = {
    comment: []
  }
  static propTypes = {
    comment: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.displayName = 'CommentItem';

    // hasFoldBtn 是否有折叠展开的按钮
    // isFold 是否折叠
    this.state = {
      hasFoldBtn: false,
      isFold: false,
    }

    this.foldCommit = this.foldCommit.bind(this);
    this.onhandleClickFold = this.onhandleClickFold.bind(this);

    this.foldHeight = "";
  }

  // 评价中将大于 5 行的评论，加上 展开／关闭按钮
  foldCommit() {
    let body = this.bodyNode;
    let lh = parseInt(getDomStyle(body, 'lineHeight'));
    let h = body.clientHeight;

    if(h > lh * 5) {
      this.foldHeight = lh*5 + "px";

      this.setState({
        hasFoldBtn: true,
        isFold: true,
      });

    } else {
      console.log("%c not over", "color: green");
    }
  }

  onhandleClickFold() {
    this.setState({
      isFold: !this.state.isFold
    });
  }

  componentDidMount() {
    // console.log('DID MOUNT');
    if(this.props.comment != false) {
      this.foldCommit();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps || this.state !== nextState) {
      console.log("should render");
      return true;
    } else {
      console.log("should not render");
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('DID UPDATE');
    // props.comment 为空的时候为 false
    // 不为空的时候为 true
    if (this.props !== prevProps && this.props.comment != false) {
      this.foldCommit();
    }
  }

  render() {
    let btnDisplay = this.state.hasFoldBtn ? {display: ''}: {display:'none'};

    return (
    <li className="comment-item" style={{overflow: 'hidden'}}>
        <div className="c-comment__comma"></div>
        <div
          className = "c-comment__body"
          key={this.props.comment.id}
          >
            <p
              className="c-comment__content"
              style={{
                height: (this.state.isFold === true) ? this.foldHeight : "",
              }}
              ref={(c) => this.bodyNode = c } >

              {this.props.comment.notes}

              <span style={{visibility: "hidden"}}>占位</span>

              <span
                className="c-comment__foldBtn"
                onClick={this.onhandleClickFold}
                style = {btnDisplay}>

                {this.state.isFold? '展开' : '收回'}

                </span>

            </p>
            <p className = "c-comment__author" >
                {this.props.comment.student}
            </p>
        </div>
    </li>
    );
  }
}

export default CommentItem;
