import Mask from '../components/mask/Mask';
import TimeItem from '../components/timeItem/TimeItem';
import TimeList from '../components/timeList/TimeList';


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Test';

        this.state = {
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
    }

    render() {
        return(<div>
            <Mask isShow={true}>
                <TimeList checktimelist={this.state.checktimelist} />
            </Mask>
        </div>);
    }
}

export default Test;
