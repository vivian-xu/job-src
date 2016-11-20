import { _isArray } from '../../commons/utiles';

class Info extends React.PureComponent {
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
        this.displayName = "Info";
    }

    render() {
        const { industrys, gender, nick_name, avatar, latest_work } = this.props.data;

        let industryLi = null;

        if(_isArray(industrys)){
            industryLi = industrys.map(function( industry, index ) {
                return (
                    <span className="c-tag--circle"  key={index}> {industry.name}
                    </span>
                );
            });
        }

        return (
            <section className = "wrap-block info">
                <div className="flex-box">
                    <div className="flex-item">
                        <p className=" c-tag">
                            {industryLi}
                            {gender}
                        </p>
                        <p className="info__name">{nick_name}</p>
                    </div>
                    <img src={avatar} className="info__img" />
                </div>
                <p>
                    {latest_work}
                </p>
            </section>
        );
    }
}

export default Info;
