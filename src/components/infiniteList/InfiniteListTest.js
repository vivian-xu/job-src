import CommentItem from '../commentItem/CommentItem';
import ReactList from 'react-list';

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
    this.displayName = 'InfiniteListTest';

    this.state = {
      commentsList: [],
      isInfiniteLoading: false,
      // isover: this.props.isover,
    };

    this.renderItem = this.renderItem.bind(this);
    this.getNewComments = this.getNewComments.bind(this);
  }

  getNewComments() {
    this.props.getDatas();
  }

  renderItem(index, key) {
    this.getNewComments();
    let comments = this.props.comments;

    // console.log(this.props.comments);
    console.log(index);
    console.log(key);
    // console.log(comments[0]);
    // console.log(this.props.comments[key]);
    return (
      <CommentItem key={key} comment={this.props.comments[key]} />
      );
  }

  render() {
    console.log('%c infiniteList', 'green');
    console.warn(this.state.commentsList.length);

    const option = {
      length: 100,
      itemRenderer: this.renderItem,
      type: 'variable',
      threshold: 0,
      pageSize: 5
    };

    return (
      <div>
        <ReactList
          {...option}
          />
      </div>
    );
  }
}

export default InfiniteList;
