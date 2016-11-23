class Loading extends React.PureComponent {
  static defaultProps = {
    addStyle: {},
  }

  static propTypes = {
    addStyle: React.PropTypes.object, // （非必需）有需要控制最外层的 样式。
  }
  constructor(props) {
    super(props);
    this.displayName = 'Loading';
  }

  componentWillUnmount() {
    console.log("LOADING will unmounted");
  }

  render() {
    return(
      <div className=" loading" style={this.props.addStyle}>
        <span className="icon-loading iconfont">
          &#xe756;
        </span>
      </div>
    );
  }
}

export default Loading;
