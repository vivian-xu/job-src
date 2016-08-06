import React from 'react';

class Call extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Call';
    }
    render() {
        return(
            <section className="wrap-block call">
                <p className="section-title">
                    电话咨询
                </p>
                <p className="rightBlock-title">
                    <span> 查看时间表 <i className="iconfont icon-shouqi" /> </span>
                    <strong>¥200</strong> 元 / 次 , 45 分钟
                </p>
            </section>
        );
    }
}

export default Call;
