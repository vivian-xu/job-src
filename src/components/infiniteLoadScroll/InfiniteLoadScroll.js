import ajax from 'superagent';
import CommentItem from '../commentItem/CommentItem';
import Iscroll from 'iscroll/build/iscroll-probe';

class InfiniteLoadScroll extends React.Component {
  static defaultProps = {
  }

  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.displayName = 'InfiniteLoadScroll';
    this.state = {
      id: 0,
      comments: [],
    };

    /*
        变量注册
    */
    //  请求数据--更新完成（可以进行下一次fetching）的状态记录
    this.loadingStatus = 0,
    // 0 空闲中，可以 fetching 数据
    // 1 正在 fetching 数据
    // 2 component render ,
    // 3 update, iscroll refresh() 重新计算 位置／大小

    this.pageCount = 0;
    this.isover = false; // 是否已经没有能请求的数据了
    this.touch = false; // 是否是 touch 事件， 为了区分是惯性滚动还是手动滚动

    // iScroll 实例
    this.myScroll = null;
    // 基本的url
    this.baseURL = 'http://wuguishifu.com/api/mentors/5/comments/';
    /*
     function 注册
    */
    this.fetchingDatas = this.fetchingDatas.bind(this);
    this.onLoading = this.onLoading.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  fetchingDatas(url, page) {
    this.loadingStatus = 1;

    ajax
    .get(url)
    .send({page: page})
    .end((error, response) => {
      if( !error && response ) {
          let data = response.body;

          //  如果没有数据了，设置 isover
          if( !data.comments || data.comments.length < 20) {
            this.isover = true;
          };

          // 赠添新的数据
          this.setState({
            comments: this.state.comments.concat(data.comments),
            id: data.id,
          });
          // 将 loading 的状态改为 2
          this.loadingStatus = 2;
          console.info('fetching success');
      } else {
      console.error(`Error fetching ${name} `, error);
     }
    });
  }

  //  fetch 新数据
  onLoading() {
    if(!this.isover) {
      this.loadingStatus = 1;
      console.log('ready to fetch');
      // fetch 新的数据 并更新页数
      this.fetchingDatas(this.baseURL, ++this.pageCount);
    }
  }

  //  监听是否有 touch
  onTouchStart() {
    this.touch = true;
  }

  onTouchEnd() {
    this.touch = false;
  }

  // options.tap
  // 设置此属性为true，当滚动区域被点击或者触摸但并没有滚动时，可以让iScroll抛出一个自定义的tap事件。

  // 这是处理与可以点击元素之间的用户交互的建议方式。侦听tap事件和侦听标准事件的方式一致。示例如下：

  // element.addEventListener('tap', doSomething, false); \\ Native
  // $('#element').on('tap', doSomething); \\ jQuery
  // 你可以通过传递一个字符串来自定义事件名称。比如：

  // tap: 'myCustomTapEvent'
  // 在这个示例里你应该侦听名为myCustomTapEvent的事件。


  componentDidMount() {

    this.fetchingDatas(this.baseURL, this.pageCount);
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
    const elem = document.getElementById('infiniteWrap');
    this.myScroll = new Iscroll(elem, option);
    this.myScroll.on('scroll', this.onScroll);
   // 阻止默认touchmove事件，否则，是页面在滚动
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  componentDidUpdate() {
    console.log( 'did update');
    this.loadingStatus = 3;

    // 确保页面加载完成后，( 等待 50ms 要不然计算的可能不正确)
    // 调用 myScroll.refresh()，重新计算高度
    setTimeout(()=>{
      this.myScroll.refresh();
    }, 50);

    // 一次 commponent updated 完成后，3000 毫秒内不能fetch 数据。
    // 防止短时间多次fetch 数据
    setTimeout(()=>{
      this.loadingStatus = 0;
    },3000)
  }

  onScroll() {
    console.log(`this.myScroll.y: ${this.myScroll.y}`);
    console.log(`this.myScroll.maxScrollY: ${this.myScroll.maxScrollY}`);

    if((this.myScroll.y < this.myScroll.maxScrollY - 30) && (this.loadingStatus === 0) && this.touch ) {
      console.warn('more');
      this.onLoading();
    }
  }



  render() {
    console.log('%c infiniteList', 'green');

    let { comments } = this.state;

    let commentList = null;

    if( Array.isArray(comments)) {
      commentList = comments.map((comment, idx) => {
        return <CommentItem key={idx} comment = {comment} />
        }
      )
    }

    let wrapStyle = {
      position: 'relative',
      height: window.innerHeight,
    }

    let testArray = (obj) => {
      console.log(obj);
      console.log([].slice.call(obj) );
      [].forEach.call(obj, (ele) => {
        console.log( ele );
      } );
    }

    let loadStyle = {
      position: 'absolute',
      bottom: '-30px',
      width: '100%',
      height: '30px',
      textAlign: 'center',
    };

    return (
      <div
        id="infiniteWrap"
        style={wrapStyle}
        onTouchStart = {this.onTouchStart}
        onTouchEnd = {this.onTouchEnd}
      >
        <ul>
         {commentList}
          <p style={loadStyle}>
            {this.isover? '已经到底了！！' : '正在加载中...'}
          </p>
         </ul>
      </div>
    );
  }
}

export default InfiniteLoadScroll;
