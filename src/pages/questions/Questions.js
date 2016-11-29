import Declare from '../../components/declare/Declare';
import TabBtn from '../../components/tabBtn/TabBtn';
import HtmlTemplate from '../../components/htmlTemplate/HtmlTemplate';

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Questions';

        this.state = {
            onbtn: 0,
        }
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(id){
        this.setState({
            onbtn: id,
        });
    }

    render() {

        let createTab = (num) => (
            `
            <h1 key={num}>I'M ${num}</h1>
            <p> 段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落 </p>
            `
        );

        //  tab 的展示页面
        let tabs = [1,2].map((ele, idx) => {
            if(idx === this.state.onbtn){
                return <HtmlTemplate key={idx} content={createTab(idx)} />
            }
        });

        return(
            <div>
                <Declare title='常见问题' >
                    <TabBtn
                        changeTab={this.changeTab}
                        onbtn = {this.state.onbtn}
                    />
                    {tabs}
                </Declare>
            </div>
        );
    }
}

export default Questions;
