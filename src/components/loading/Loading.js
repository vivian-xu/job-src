class Loading extends React.PureComponent {
  constructor(props) {
    super(props);
    this.displayName = 'Loading';
  }

  componentWillUnmount() {
    console.log("LOADING will unmounted");
  }

  render() {
    return(
      <div className=" loading">
        <span className="icon-loading iconfont">
          &#xe756;
        </span>
      </div>
    );
  }
}

export default Loading;
