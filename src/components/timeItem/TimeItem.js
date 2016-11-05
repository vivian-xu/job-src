class TimeItem extends React.PureComponent {
    static defaultProps = {
        checktime: {
             "day": "明天",
             "date": "6月13日",
             "time": "22:00 ~ 22:45"
         },
         num: 0,
         uSelected: false
    }
    static propTypes = {
        checktime: React.PropTypes.object,
        num: React.PropTypes.number.isRequired,
        onhandleSelect: React.PropTypes.func,
        uSelected: React.PropTypes.bool
     }

    constructor(props) {
        super(props);
        this.displayName = 'TimeItem';
    }

    render() {
        return (
            <li
                onClick={this.props.onhandleSelect}
                className={`c-radio clearfix ${this.props.uSelected ? 'c-radio--checked' : '' }`} >

                <input
                    type="radio"
                    name="checkTime"
                    id={this.props.num}
                    className="c-radio__input"
                    checked={this.props.uSelected}
                />

                <label
                    htmlFor={this.props.num}
                    className="c-radio__label">

                    {this.props.checktime.day} {this.props.checktime.date}

                    <span
                        className="float_right"
                        htmlFor={this.props.index}>
                        {this.props.checktime.time}
                    </span>

                </label>

                <div className="c-radio__check-circle"></div>
            </li>
        )
    }
}

export default TimeItem;
