import src1 from '../../imgs/img1.png';
import src2 from '../../imgs/img2.png';
import src3 from '../../imgs/img3.png';

class Slide extends React.Component {
    static defaultProps = {
        imgs: [
            src1,
            src2,
            src3,
        ]
    }
    static propTypes = {
        imgs: React.PropTypes.array,
    }
    constructor(props) {
        super(props);
        this.displayName = 'Slide';
    }

    render() {
        let btnList = [];
        let imgList = this.props.imgs.map((img, index)=> {

            btnList.push(<li className="slide__btn" key={index} />);

            return(
                <li key={index}>
                    <img className="slide__img" src= {img} />
                </li>)
        });
        return (
            <div id="slideBox" className="slideBox wrap-block wrap-block--no-padding">
                <div className="hd">
                    <ul className="slide__btn-group">
                        {btnList}
                    </ul>
                </div>
                <div className="bd">
                    <ul>
                        {imgList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Slide;
