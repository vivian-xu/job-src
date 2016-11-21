import ajax from 'superagent';
import CommentItem from '../commentItem/CommentItem';

import Iscroll from 'iscroll/build/iscroll-probe';

class InfiniteLoadScroll extends React.Component {
  static defaultProps = {
    setTop: 20,

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


    // true 的时候，不能fetch
    // false 的时候可以
    this.isloading = true; // 是否正在请求数据。
    this.isrefreshing = true; // 一次 commponent updated 完成后，3000 毫秒内不能fetch 数据。

    this.pageCount = 0;
    this.isover = false; // 是否已经没有能请求的数据了

    // iScroll
    this.myScroll = null;
        // 基本的url
    this.baseURL = 'http://wuguishifu.com/api/mentors/5/comments/';

    this.fetchingDatas = this.fetchingDatas.bind(this);
    this.onLoading = this.onLoading.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  fetchingDatas(url, page) {
    ajax
    .get(url)
    .send({page: page})
    .end((error, response) => {
      if( !error && response ) {
          let isover = false;
          let data = response.body;

          //  如果没有数据了，设置
          if( !data.comments || data.comments.length < 20) {
            this.isover = true;
          };

          console.error(data.comments);

          // 标记现在在第几页
          // this.pageCount = page;
          this.isloading = false;

          this.setState({
            comments: this.state.comments.concat(data.comments),
            id: data.id,
          });

          console.info('fetching success');

      } else {
      console.error(`Error fetching ${name} `, error);
     }
    });
  }

  onLoading() {

    if(!this.isover) {
      this.isloading = true;
      this.isrefreshing = true;
      console.log('ready to fetch');
      // fetch 新的数据 并更新页数
      this.fetchingDatas(this.baseURL, ++this.pageCount);
    }

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
      scrollbars: true,
      preventDefault: false,
      mouseWheel: true,
      probeType: 2,
      momentum: true,
      mouseWheel: true,
      interactiveScrollbars: true,
      bounce: true,
    }
      // interactiveScrollbars, 此属性可以让滚动条能拖动，用户可以与之交互
      // bounce: false, 当滚动器到达容器边界时他将执行一个小反弹动画。在老的或者性能低的设备上禁用反弹对实现平滑的滚动有帮助。
      // probeType: 1, 这个属性是调节在scroll事件触发中探针的活跃度或者频率。有效值有：1, 2, 3。数值越高表示更活跃的探测。探针活跃度越高对CPU的影响就越大。
      // momentum: false, //在用户快速触摸屏幕时，你可以开/关势能动画。关闭此功能将大幅度提升性能。
      // scrollbars: true, //是否显示默认滚动条
      // fadeScrollbars: true, // 是否渐隐滚动条，关掉可以加速
      // mouseWheel: true, //是否监听鼠标滚轮事件。
      // preventDefault: true, //是否屏蔽默认事件。
    // };
    const elem = document.getElementById('infiniteWrap');


    this.myScroll = new Iscroll(elem, option);


    this.myScroll.on('scroll', this.onScroll);

 // 阻止默认touchmove事件
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  componentDidUpdate() {
    console.log( 'did update');

    // this.myScroll.refresh();
    // 刷新myScroll，重新计算高度
    setTimeout(()=>{
      this.myScroll.refresh();
    }, 50);

    setTimeout(()=>{

      console.log(this.myScroll.maxScrollY);
      this.isrefreshing = false;
    },3000)

  }

  onScroll() {
    console.log(`this.myScroll.y: ${this.myScroll.y}`);
    console.log(`this.myScroll.maxScrollY: ${this.myScroll.maxScrollY}`);

    console.log(`this.myScroll.directionY: ${this.myScroll.directionY}`);

    if(this.myScroll.y < this.myScroll.maxScrollY - 5) {
      console.warn('more');
      console.log(`isloading: ${this.isloading}`);
      console.log(`isrefreshing: ${this.isrefreshing}`);
      if(!this.isloading && !this.isrefreshing){
        this.onLoading();
      }
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
      height: window.innerHeight - 10,
      // overflow: 'scroll',
    }

    let testArray = (obj) => {
      console.log(obj);
      console.log([].slice.call(obj) );
      [].forEach.call(obj, (ele) => {
        console.log( ele );
      } );
    }

// 如果你有一个复杂的DOM结构，最好在onload事件之后适当的延迟，再去初始化iScroll。最好给浏览器100或者200毫秒的间隙再去初始化iScroll。
    return (
      <div id="infiniteWrap" style={wrapStyle}>
        <ul>
         {commentList}
          <p>上啦发起加载 </p>
         </ul>
      </div>
    );
  }
}

export default InfiniteLoadScroll;
