import React from 'react';

class Call extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Call';
        this.state = {
            checktimelist : [
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
        };
    }

    componentWillMount() {
       console.log(this.state.checktimelist);
    }

    alertCheckTime() {
        console.log("alert");

        // $("#wrap-timeList").show('400');
        $("#wrap-timeList").fadeIn('400');

        this.timeListBg();

        $("#wrap-timeList .mask-timeList").click(function( e ) {
            $("#wrap-timeList").fadeOut('400');
        });
    }

    timeListBg() {
        $("#wrap-timeList li").click(function(event) {
            $(this).parent("ul").find("li.checked").removeClass('checked');
            $(this).addClass('checked');
        });

    }

    render() {
        let timesL = this.state.checktimelist.map(function(time, index) {
            console.log(index);
            let id = `time${index}`;
            let ref = `checked${index}`;
            return (
                <li key={index} >
                    <input type="radio" name="checkTime" id={id} />
                    <label htmlFor={id} >{time.day} {time.date}
                        <span className="right" htmlFor={id}>{time.time}</span>
                    </label>
                    <div className="check"></div>
                </li>
            )
        }.bind(this))

        return(
            <section className="wrap-block call">
                <div id="wrap-timeList" className="wrap-timeList" style={{"display": "none"}}>
                    <div className="mask-timeList">
                    </div>
                    <div className="timeList">
                        <p>选择师姐给你打电话的时段</p>
                        <ul>
                            {timesL}
                        </ul>
                    </div>
                </div>
                <p className="section-title">
                    电话咨询
                </p>
                <p className="rightBlock-title">
                    <span onClick={this.alertCheckTime.bind(this)}> 查看时间表 <i className="iconfont icon-right" /> </span>
                    <strong>¥200</strong> 元 / 次 , 45 分钟
                </p>
            </section>
        );
    }
}

export default Call;
