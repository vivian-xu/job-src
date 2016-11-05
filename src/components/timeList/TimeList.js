import TimeItem from '../timeItem/TimeItem';
class TimeList extends React.PureComponent {
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
             },
             {
                 "day": "后天",
                 "date": "6月14日",
                 "time": "22:00 ~ 22:45"
             },
             {
                 "day": "后天",
                 "date": "6月14日",
                 "time": "22:00 ~ 22:45"
             }
        ],
    }
    static propTypes = {
        checktimelist: React.PropTypes.array.isRequired
     }

    constructor(props) {
        super(props);
        this.displayName = 'TimeList';
    }
/*
    handleSelect(num) {
        console.log("%c selected ME! I'm" + num, "color: green; font-size: 20px");
        this.setState({
            selectedNum: num
        });
    }
*/
    render() {
        console.log(this.props.num);
        let timelist = this.props.checktimelist.map((item, index) => {
            let key = 'item' + index;
            return (
                <TimeItem
                    key={index}
                    uSelected = {this.props.num === index}
                    checktime = {item}
                    num={index}
                    onhandleSelect={this.props.onhandleSelect.bind(this, index)}
                />
                );
        })
        return (
            <ul>
                {timelist}
            </ul>
        )
    }
}

export default TimeList;
