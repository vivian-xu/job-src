import Declare from '../components/declare/Declare';
import TabBtn from '../components/tabBtn/TabBtn';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Test';
    }

    render() {
        const content = () =>(
          <p>
          欢迎您（指“用户”）访问Join,请仔细阅读本协议，您必须完全同意以下所有协议条款，才能成为Join的正式注册用户。Join各项基于互联网的相关服务（简称“服务”）的所有权和运作权归师兄师姐说（北京）科技有限公司所有。

        </p>);

        return(
            <div>
                <Declare title='About' >
                    <TabBtn />
                    {content()}
                </Declare>
            </div>
        );
    }
}

export default Test;
