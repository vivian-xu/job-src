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
                <Declare title='用户协议' >
                    <HtmlTemplate content={createTab('Deal')} />
                </Declare>
            </div>
        );
    }
}

export default About;
