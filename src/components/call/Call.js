import Mask from '../mask/Mask';
import TimeList from '../timeList/TimeList';

class Call extends React.PureComponent {
    static defaultProps = {
        checktimelist: [
            {
                 "day": "明天",
                 "date": "6月13日",
                 "time": "22:00 ~ 22:45"
             },
             {
                 "day": "后天",
                 "date": "6月14日",
                 "time": "22:00 ~ 22:45"
             }
        ]
    }

    static propTypes = {
        checktimelist: React.PropTypes.array.isRequired,
     }

    constructor(props) {
        super(props);
        this.displayName = 'Call';
        this.state = {
            selectedNum: -1,
            maskShow: false
        };

        this.alertCheckTime = this.alertCheckTime.bind(this);
        this.closeCheckTime = this.closeCheckTime.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    alertCheckTime() {
        console.log('toggle');
        this.setState({
            maskShow: true,
            selectedNum: -1
        })
    }

    closeCheckTime(){
        this.setState({
            maskShow: false,
            selectedNum: -1
        })
    }

    handleSelect(num) {
        console.log("%c selected ME! I'm" + num, "color: green; font-size: 20px");
        this.setState({
            selectedNum: num
        });
    }

    render() {
        return(
            <section className="wrap-block call">
                <Mask
                    isShow={this.state.maskShow}
                    closeMask={this.closeCheckTime}
                >

                    <TimeList {...this.props}
                        num={this.state.selectedNum}
                        onhandleSelect={this.handleSelect}
                    />

                </Mask>
                <p className="section-title">
                    电话咨询
                </p>
                <p className="rightBlock-title">
                    <span onClick={this.alertCheckTime}> 查看时间表
                         <i className="iconfont icon-right" />
                     </span>
                    <strong>¥200</strong> 元 / 次 , 45 分钟
                </p>
            </section>
        );
    }
}

export default Call;
