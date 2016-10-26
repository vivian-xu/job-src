import React from 'react';

class Info extends React.Component {

    static defaultProps = {
        data : {
            id: 1,
            avatar: 'http://wuguishifu.com/media/user-avatar/default-avatar.png',
            gender: "师姐",
            nick_name: "安然默默",
            latest_work: "中兴 移动终端",
            industrys: "互联网"
        }
    }

    static propTypes = {
        data: React.PropTypes.object.isRequired
     }

    constructor(props) {
        super(props);
    }

    componentWillMount ( ) {
        console.log( this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log("info receive props");
        console.log( this.props);

    }

    render() {
        console.log("info render start");
        let industryLi = this.props.data.industrys.map(function( industry, index ) {
            return (
                <span className="circle"  key={index}> {industry.name}
                </span>
            );
        });

        return (
            <section className = "wrap-block info">

                <div className="flex-box">

                    <div className="flex-item">
                        <p className="section-title">
                            {industryLi}
                            {this.props.data.gender}
                        </p>
                        <p className="name">{this.props.data.nick_name}</p>
                    </div>
                    <img src={this.props.data.avatar} className="img" />
                </div>

                <p>
                    {this.props.data.latest_work}
                </p>
            </section>
        );
    }
}

Info.propTypes = {
    children: React.PropTypes.node
}

export default Info;
