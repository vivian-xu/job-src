import { _isArray } from '../../commons/utiles';

class Resume extends React.PureComponent {
    static propTypes = {
        data: React.PropTypes.any.isRequired,
     }

    constructor(props) {
        super(props);
        this.displayName = 'Resume';
    }

    render() {
        const {works, edus} = this.props.data;

        let worksLi = null;
        let edusLi = null;

        if(_isArray(works)) {

            worksLi = works.map(function( work, index){
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
                    <li key={index} className='resume__item'>
                        <p className="resume__container clearfix">
                            <span className="float_right resume__time"> {year}年 </span>
                            {work.company}
                        </p>
                        <p className="resume__detail" >
                            {work.position}
                        </p>
                    </li>
                );
            });
        }

        if(_isArray(edus)) {
            edusLi = edus.map(function( edu, index){
                let the = edu.ended_at.slice(0,4);

                return (
                    <li key={index} className='resume__item'>
                        <p className="resume__container clearfix">
                          <span className="float_right resume__time"> {the}届 </span>
                          {edu.school}
                      </p>
                      <span className="resume__detail" >
                          {edu.major} {edu.degree}
                      </span>
                  </li>
                );
            })
        }

        let styleClass = (_isArray(works) && _isArray(edus) && works.length > 0 && edus.length > 0) ? "resume__list-border" : ""

        return (
            <section className = "wrap-block resume">
                <p className="section-title"> 简历 </p>
                <ul
                    className={ `resume__list ${styleClass}`}
                    >

                    {worksLi}

                </ul>
                <ul className="resume__list">
                    {edusLi}
                </ul>
           </section>
        );
    }
}

export default Resume;
