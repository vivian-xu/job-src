import CommentItem from '../commentItem/CommentItem';
import Infinite from 'react-infinite';
import ajax from 'superagent';

var ListItem = React.createClass({
    render: function() {
        return <div className="infinite-list-item">
        List Item {this.props.data}
        </div>;
    }
});


class InfiniteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: 0,
      elements: this.buildElements(0, 20),
      isInfiniteLoading: false
    };

    this.elements;

    this.buildElements = this.buildElements.bind(this);
    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
    this.elementInfiniteLoad = this.elementInfiniteLoad.bind(this);
    // this.fetchingDatas = this.fetchingDatas.bind(this);
  }

/*
  fetchingDatas(url, successback) {
    ajax.get(url)
        .end((error, response) => {
                if( !error && response ) {
                    let data = response.body.data;

                    console.log('data nnnnnnnnnn');
                } else {
                console.error(`Error fetching ${name} `, error);
         }
    });
  }*/
/*
  handleSuccessFetch() {
    let data = response.body.data;
    把数据 push  到 this.elements 中
    this.elements.concat(data);
    this.setState({
      pages: this.state.pages + 1,
      isInfiniteLoading: false,
    })

  }

  componentWillMount() {
    let baseURL = '';
    let url = baseURL + this.state.pages + 1;
    fetchingDatas(url, this.handleSuccessFetch);
  }
*/
  buildElements(start, end) {
      let elements = [];
      console.log('%c' + start, 'color: green; background: yellow; font-size: 20px');
      for (var i = start; i < end; i++) {
/*        let comment = {
          id: i ,
          notes: '以前在豌豆荚负责产品，略懂产',
          student: '小明',
          day: i
        };*/
        // elements.push(<CommentItem comment={comment} key={i}/>)
        elements.push(<ListItem key={i} data={i}/>)
      }
      return elements;
  }

  handleInfiniteLoad() {
    console.log('%c loading', 'color: green; background: yellow; font-size: 20px');
      let that = this;
      this.setState({
          isInfiniteLoading: true
      });
      setTimeout(function() {
          let elemLength = that.state.elements.length,
              newElements = that.buildElements(elemLength, elemLength + 1000);
          that.setState({
              isInfiniteLoading: false,
              elements: that.state.elements.concat(newElements)
          });
      }, 2500);
  }

  elementInfiniteLoad() {
      return <div className="infinite-list-item">
          Loading...
      </div>;
  }

  render() {
    console.log('%c infiniteList', 'green');
    return (<Infinite elementHeight={20}
                           containerHeight={250}
                           infiniteLoadingBeginBottomOffset={200}
                           onInfiniteLoad={this.handleInfiniteLoad}
                           loadingSpinnerDelegate={this.elementInfiniteLoad()}
                           isInfiniteLoading={this.state.isInfiniteLoading}

                           >
              {this.state.elements}
          </Infinite>);
  }
                           // preloadBatchSize={300}
            // <ul>
            // </ul>
}
                           // useWindowAsScrollContainer={true}
                           // timeScrollStateLastsForAfterUserScrolls={1000}
export default InfiniteList;
