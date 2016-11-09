import CommentItem from '../commentItem/CommentItem';
import Infinite from 'react-infinite';

class InfiniteList extends React.PureComponent {
  static defaultProps = {
    isover: false,
  }

  static propTypes = {
    comments: React.PropTypes.array.isRequired,
    getDatas: React.PropTypes.func.isRequired,
    isover: React.PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      commentsList: [],
      isInfiniteLoading: false,
      // isover: this.props.isover,
    };

    // 屏幕滚动到了该请求新数据的时候调用，
    // 将 isInfiniteLoading 设为 true,
   // 调用 buildElements 创建／请求 新的elements
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
    this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);


    this.setLineHeight = this.setLineHeight.bind(this);

    // 从父组件那里拿到数据，设置子组件
    this.setCommentsList = this.setCommentsList.bind(this);

    // 储存 render 页面显示部分的行高
    this.lineHeight =0;

  }
/*
   @ params newComments : Array 从父组件拿到的新的 comment 数据。

   将数据整理成子组件 <CommentItem /> 放入数据库，
   更新数据

*/
  setCommentsList(newComments) {
    let newCommentsList = newComments.map((comment, index) => (
      <CommentItem
          key={comment.id}
          comment = {comment}
          setLineHeight={this.setLineHeight}
          lineHeight={this.lineHeight}
          />));

    this.setState({
      commentsList: this.state.commentsList.concat(newCommentsList),
      isInfiniteLoading: false,
    });
  }

  handleInfiniteLoad() {
    if( !this.props.isover ){
      this.props.getDatas();
    };
  }

  componentWillMount(){
    console.log(this.props.comments);
    this.setCommentsList( this.props.comments);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps ');

    this.setCommentsList(nextProps.comments);
  }


  setLineHeight( lh ) {
    // console.log(lh);
    // console.log(this.lineHeight);
    if (this.lineHeight === 0 || this.lineHeight != lh ) {
      this.lineHeight = lh;
    } else {
      return false;
    }
  }

  elementInfiniteLoad() {
    return (
      <p className="infinite__loading">
        {this.props.isover?'已经到底啦～' : '加载中...'}
      </p>);
  }

  render() {
    console.log('%c infiniteList', 'green');
    console.warn(this.state.commentsList.length);

    return (
      <Infinite elementHeight={50}
                    containerHeight={window.innerHeight}
                    infiniteLoadBeginEdgeOffset={200}
                    onInfiniteLoad={this.handleInfiniteLoad}
                    loadingSpinnerDelegate={this.elementInfiniteLoad()}
                    isInfiniteLoading={this.state.isInfiniteLoading}
                    timeScrollStateLastsForAfterUserScrolls={0}
                    useWindowAsScrollContainer={true}
                    >
        {this.state.commentsList}
      </Infinite>
    );
  }
}

export default InfiniteList;
