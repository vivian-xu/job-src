import Declare from '../../components/declare/Declare';
import HtmlTemplate from '../../components/htmlTemplate/HtmlTemplate';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'About';
    }

    render() {
        let createTab = (page) => (
            `
            <h1>I'M in ${page}</h1>
            <p> 段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落 </p>
            `
        );

        return(
            <div>
                <Declare title='关于「乌龟师傅 ! 」' >
                    <div className='about__my-info' >
                        <div className='logo' />
                        <p className='copyright'>
                            © 2016 wuguishifu.com,
                        </p>
                        <p className='copyright' >
                            all rights reserved
                            北京师兄师姐说科技有限公司
                        </p>
                    </div>
                    <HtmlTemplate content={createTab('About')} />
                </Declare>
            </div>
        );
    }
}

export default About;
