import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Mask extends React.PureComponent {

    static defaultProps = {
        isShow: false,
    }
    static propTypes = {
        isShow: React.PropTypes.bool.isRequired,
        closeMask: React.PropTypes.func.isRequired
     }

    constructor(props) {
        super(props);
        this.displayName = 'Mask';
        // this.hideMask = this.hideMask.bind(this);
    }
/*
    hideMask(event) {
      console.log('click mask');
      event.preventDefault();
      event.stopPropagation();
      console.log(event.isDefaultPrevented());
      this.setState({
        isShow: false,
      });
    }
*/

    FirstChild(props) {
      const childrenArray = React.Children.toArray(props.children);
      return childrenArray[0] || null;
    }

    render() {
      let children = null;
      if(this.props.isShow){
        children = (
          <div >
            <div className="c-mask" onClick={this.props.closeMask} >
            </div>
            <div className="c-panel--half">
                <p className="c-panel__title">选择师姐给你打电话的时段</p>

                {this.props.children}

            </div>
          </div>
        );
      }

      return (
        <ReactCSSTransitionGroup
            transitionName="fadeToggle"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            transitionAppearTimeout={500}
            transitionAppear={true}
            component="div"
        >
        {children}
        </ReactCSSTransitionGroup>
        );
    }
}

export default Mask;
