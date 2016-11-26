import {_addEvent} from '../../commons/utiles';

class Loading extends React.PureComponent {
  static defaultProps = {
    prevent: true,
    addStyle: {},
  }

  static propTypes = {
    // 是否要阻止默认点击，移动事件。
    // true 的话，preventDefault 会在 component will mount 的时候设置，在 unmount 的时候取消
    prevent: React.PropTypes.bool,
    // （非必需）有需要控制最外层的 样式。
    addStyle: React.PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.displayName = 'Loading';

    this.prevTouch = this.prevTouch.bind(this);
  }

  prevTouch() {
    console.log('touch');
    event.preventDefault();
  }

  componentWillMount() {
    if(this.props.prevent) {
      _addEvent('on', 'touchstart', this.prevTouch);
      _addEvent('on', 'touchmove', this.prevTouch);
      _addEvent('on', 'touchend', this.prevTouch);
      _addEvent('on', 'click', this.prevTouch);
    }
  }

  componentWillUnmount() {
    console.log("LOADING will unmounted");
    if(this.props.prevent) {
      _addEvent('remove', 'touchstart', this.prevTouch);
      _addEvent('remove', 'touchmove', this.prevTouch);
      _addEvent('remove', 'touchend', this.prevTouch);
      _addEvent('remove', 'click', this.prevTouch);
    }
  }

  render() {
    return(
      <div className="loading__wrap">
        <div className="loading" style={this.props.addStyle}>
          <span className="icon-loading iconfont">
            &#xe756;
          </span>
        </div>
      </div>
    );
  }
}

export default Loading;
