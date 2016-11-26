import ajax from 'superagent';
import Iscroll from 'iscroll/build/iscroll-probe';
import CommentItem from '../commentItem/CommentItem';
import {_addEvent} from '../../commons/utiles';

//  需要把需要 滚动的加进来
//  可以提供 只有滚动的地方滚动，其他地方不滚动
class InfiniteLoadScroll extends React.Component {
  static defaultProps = {
    hasMore: true,
    pageStart: 0,
    pageLimit: 1,
    gapTime: 2000,
    addStyle: {},
    needHeight: false,
    height: window.innerHeight,
  }

  //  pageStart, pageLimit 用法
  //  假设 pageStart = 0, pageLimit = 2;
  //  这一次请求的 datas 的数量为 2 个，id 是 1，2
  //  下一次应该请求的 pageStart = 0 + 2 =2, 当 pageLimit = 3,
  //  得到的 datas 的数量为 3个，id 是 3，4，5
  static propTypes = {
    loadMore: React.PropTypes.func.isRequired, // 在加载数据时执行的 loadMore 函数
    pageStart: React.PropTypes.number, // 从第几页开始
    pageLimit: React.PropTypes.number, // 这一页请求的数量
    hasMore: React.PropTypes.bool, // 还有下一页么？
    loadingBlock: React.PropTypes.func.isRequired, // loading 等待 最下方的 显示
    gapTime: React.PropTypes.number, // 每一次 update 后 多久可以开始再次请求加载数据 , 最小 1000
    addStyle: React.PropTypes.object, // （非必需）有需要控制最外层的 样式。
    needHeight: React.PropTypes.bool, //是否需要自定义 height
    height: React.PropTypes.number, // myScroll 最外层的高度
  }

  constructor(props) {
    super(props);
    this.displayName = 'InfiniteLoadScroll';


    this.state = {
      pageLoaded: this.props.pageStart, // 从第几页开始,已经到第几页了（第几条数据了）
      isOnScroll: false,     // LoadingBlock 才出现
    }
    /*
        变量注册
    */
    this.loading = false; // 是否还没有更新完（ false 表示一个阶段完了，可以 fetch 新的数据了）

    this.touch = false; // 是否是 touch 事件， 为了区分是惯性滚动还是手动滚动
    //  myScroll 的最外层的 height
    this.height = window.innerHeight;
    // iScroll 实例
    this.myScroll = null;

    /*
     function 注册
    */
    this.onScroll = this.onScroll.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.prevTouch = this.prevTouch.bind(this);
  }

  //  监听是否有 touch
  onTouchStart() {
    this.touch = true;
  }

  onTouchEnd() {
    this.touch = false;
  }

  onScroll() {
    console.log(this.myScroll.y);
    console.log(this.myScroll.maxScrollY);

    //  如果  isOnScroll 为 false 的话， 设置其为 true
      console.log('%c'+ this.state.isOnScroll, 'color:green');
    if(!this.state.isOnScroll) {
      this.setState({
        isOnScroll: true
      })
    }

    if((this.myScroll.y < this.myScroll.maxScrollY - 30) && (!this.loading) && this.touch && this.props.hasMore ) {
      console.warn('more');
      this.loading = true;
      this.props.loadMore( this.state.pageLoaded, this.props.pageLimit );

    // 更新 state 中的 pageLoaded
      this.setState({
        pageLoaded: this.state.pageLoaded + this.props.pageLimit
      })
    }
  }

  prevTouch() {
    console.log('touch');
    event.preventDefault();
  }

   // 阻止默认touchmove事件，
   //  防止在该开始的原生／非原生滚动造成计算的失误
   //  防止是页面自己原生的滚动
  componentWillMount() {
    _addEvent(document, 'on', 'touchmove', this.prevTouch);
  }

  componentDidMount() {
    // 矫正 height
    // this.height = window.innerHeight - this.wrap.offsetTop;
    // 将 loading 状态改为 true ，防止短时间多次 fetch
    this.loading = true;
    //  fetch 首页
    this.props.loadMore(this.state.pageLoaded, this.props.pageLimit);

    // 更新 pageLoaded
    this.state.pageLoaded = this.state.pageLoaded + this.props.pageLimit;

    const option = {
       //是否显示默认滚动条
      scrollbars: true,
      //是否屏蔽默认事件。
      preventDefault: false,
      // 是否渐隐滚动条，关掉可以加速
      fadeScrollbars: true,
      // 这个属性是调节在scroll事件触发中探针的活跃度或者频率。有效值有：1, 2, 3。数值越高表示更活跃的探测。探针活跃度越高对CPU的影响就越大。
      probeType: 2,
      //在用户快速触摸屏幕时，你可以开/关势能动画。关闭此功能将大幅度提升性能。
      momentum: true,
      //是否监听鼠标滚轮事件。
      mouseWheel: true,
      // 此属性可以让滚动条能拖动，用户可以与之交互
      interactiveScrollbars: true,
      // 当滚动器到达容器边界时他将执行一个小反弹动画。在老的或者性能低的设备上禁用反弹对实现平滑的滚动有帮助。
      bounce: true,
    }

    const elem = this.wrap;
    this.myScroll = new Iscroll(elem, option);
    this.myScroll.on('scroll', this.onScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps;
  }

  componentDidUpdate() {
    // 确保页面加载完成后，( 等待 50ms 要不然计算的可能不正确)
    // 调用 myScroll.refresh()，重新计算高度
    setTimeout(()=>{
      this.myScroll.refresh();
    }, 100);

    // 一次 commponent updated 完成后，gapTime 毫秒内不能fetch 数据。
    // 防止短时间多次fetch 数据
    let { gapTime } = this.props.gapTime;
    console.log(this.props.gapTime );
    setTimeout(()=>{
      this.loading = false;
    }, (gapTime >= 1000) ? gapTime : 1000)
  }

  componentWillUnmount() {
    console.log('infiniteLoadScroll will unmount' );

    // 解除绑定 touch move 否则其他页面不能正常滚动
    _addEvent(document, 'remove', 'touchmove', this.prevTouch );
  }

  render() {

    console.log('%c infiniteList render', 'color:green');

    let { needHeight, height, addStyle } = this.props;
    let wrapStyle = {
      position: 'relative',
      height: this.height,
      ...addStyle,
    }
      // height: needHeight && height ? height : this.height,

    let relativeWrap = {
      position: 'relative'
    };

    return (
      <div
        ref = {(o)=> this.wrap = o}
        style={wrapStyle}
        onTouchStart = {this.onTouchStart}
        onTouchEnd = {this.onTouchEnd}
      >
        <div style={relativeWrap}>
            { this.props.children }
            { this.state.isOnScroll ? this.props.loadingBlock() : null}
        </div>
      </div>
    );
  }
}

export default InfiniteLoadScroll;
