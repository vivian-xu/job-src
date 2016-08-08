import React from 'react';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Resume';
    }
    render() {
        return (
            <section className = "wrap-block resume">
                <div>
                    <p className="section-title"> 简历 </p>
                    <p className="rightBlock-title">
                        <span> 4年 </span>
                        豆瓣
                    </p>
                    <span className="ps-word" >
                        高级产品经理
                    </span>
                </div>
                <hr/>
                <div>
                    <p className="rightBlock-title">
                        <span> 2012届 </span>
                        北京大学
                    </p>
                    <span className="ps-word" >
                        心理学心理学 研究生
                    </span>

                </div>
                <div>
                    <p className="rightBlock-title">
                        <span> 2008届 </span>
                        浙江大学浙江大学浙江大学浙江大学浙江大学浙江大学
                    </p>
                    <span className="ps-word" >
                        数字媒体技术 本科
                    </span>
                </div>
            </section>
        );
    }
}

export default Resume;
