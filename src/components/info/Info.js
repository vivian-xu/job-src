import React from 'react';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data.id,
            avatar: props.data.avatar,
            gender: props.data.gender,
            nick_name: props.data.nick_name,
            industrys: props.data.industrys
        }
    }

    componentWillMount ( ) {
        console.log( this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log("info receive props");

        this.setState({
            id: nextProps.data.id,
            avatar: nextProps.data.avatar,
            gender: nextProps.data.gender,
            nick_name: nextProps.data.nick_name,
            industrys: nextProps.data.industrys
        });
    }

    render() {
        console.log("info render start");
        let industryLi = this.state.industrys.map(function( industry, index ) {
            return (
                <span className="circle"  key={index}> {industry}
                </span>
            );
        });

        return (
            <section className = "wrap-block info">
                <div >
                     <img src={this.state.avatar} className="img" />
                    <div>
                        <p className="section-title">
                            {industryLi}
                            {this.state.gender}
                        </p>
                        <p className="name">{this.state.nick_name}</p>
                    </div>
                </div>
                <p>
                    豌豆荚 产品总监 豌豆荚 产品总监 豌豆荚 产品总监 豌豆荚 产品总监 豌豆荚 产品总监 豌豆荚 产品总监 豌豆荚 产品总监
                </p>
            </section>
        );
    }
}

Info.propTypes = {
    children: React.PropTypes.node
}

export default Info;
