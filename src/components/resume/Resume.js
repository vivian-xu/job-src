import React from 'react';

class Resume extends React.Component {
    static propTypes = {
        data: React.PropTypes.any.isRequired,
     }

    constructor(props) {
        super(props);
        this.displayName = 'Resume';
    }

    render() {
        let worksLi = this.props.data.works.map(function( work, index){
            let start = parseInt(work.started_at.slice(0,4));
            let end;
            if(work.ended_at.indexOf("现在") != -1 ) {
                let date = new Date();
                end = date.getFullYear();
            } else {
                end = parseInt(work.ended_at.slice(0,4));
            }

            console.log( `${end} - ${start} = ${end-start}` );

            let year = end- start;

            return (
                <li key={index}>
                    <p className="rightBlock-title">
                        <span> {year}年 </span>
                        {work.company}
                    </p>
                    <span className="ps-word" >
                        {work.position}
                    </span>
                </li>
            );
        });

        let edusLi = this.props.data.edus.map(function( edu, index){
            let the = edu.ended_at.slice(0,4)
            return (
              <li key={index}>
                  <p className="rightBlock-title">
                      <span> {the}届 </span>
                      {edu.school}
                  </p>
                  <span className="ps-word" >
                      {edu.major} {edu.degree}
                  </span>
              </li>
            );
        })

        return (
            <section className = "wrap-block resume">
                <p className="section-title"> 简历 </p>
                <ul className={(this.props.data.works.length > 0 && this.props.data.edus.length > 0) ? "border-bottom" : ""} >
                    {worksLi}
                </ul>
                <ul>
                    {edusLi}
                </ul>
           </section>
        );
    }
}

export default Resume;
