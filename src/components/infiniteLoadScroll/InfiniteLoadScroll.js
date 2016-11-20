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
      isloading: true, // 是否关闭页面初进来时候的loading页面
      pageCount: 0,
      comments: [],
      isover: false, // 是否已经没有能请求的数据了
    };


        // 基本的url
    this.baseURL = 'http://wuguishifu.com/api/mentors/5/comments/';
  }

  fetchingDatas(url, page) {
    ajax
    .get(url)
    .send({page: page})
    .end((error, response) => {
      if( !error && response ) {
          let isover = false;
          let data = response.body;

          if( !data.comments || data.comments.length < 20) {
            isover = true;
          };

          this.setState({
            isloading: false,
            pageCount: page,
            comments: data.comments,
            id: data.id,
            isover: isover,
          });

          console.info('fetching success');

      } else {
      console.error(`Error fetching ${name} `, error);
     }
    });
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
    this.fetchingDatas(this.baseURL, this.state.pageCount);
    const option = {
      // interactiveScrollbars, 此属性可以让滚动条能拖动，用户可以与之交互
      // bounce: false, 当滚动器到达容器边界时他将执行一个小反弹动画。在老的或者性能低的设备上禁用反弹对实现平滑的滚动有帮助。
      // probeType: 1, 这个属性是调节在scroll事件触发中探针的活跃度或者频率。有效值有：1, 2, 3。数值越高表示更活跃的探测。探针活跃度越高对CPU的影响就越大。
      momentum: false, //在用户快速触摸屏幕时，你可以开/关势能动画。关闭此功能将大幅度提升性能。
      scrollbars: true, //是否显示默认滚动条
      // fadeScrollbars: true, // 是否渐隐滚动条，关掉可以加速
      mouseWheel: true, //是否监听鼠标滚轮事件。
      // preventDefault: true, //是否屏蔽默认事件。
    };
    const elem = document.getElementById('infiniteWrap');

    const myScroll = new Iscroll(elem, option);

    console.log(myScroll);
    myScroll.on('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    console.log(`this.x: ${this.x}`);
    console.log(`this.y: ${this.y}`);
    console.log(`this.currentPage: ${this.currentPage}`);
    console.log(`this.directionX: ${this.directionX}`);
    console.log(`this.directionY: ${this.directionY}`);
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
      height: window.innerHeight/2,
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
         </ul>
      </div>
    );
  }
}

export default InfiniteLoadScroll;
