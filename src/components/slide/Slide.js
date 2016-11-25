import Slider from 'react-slick';
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
        console.log( this.props);
        let imgList = this.props.imgs.map((img, index)=> {
            const { imgdetail, src} = img;

            return(
                <div key={index}>
                    <img className="slide__img" src= {src} alt={imgdetail} />
                </div>)
            });

        var settings = {
            className: 'slideBox',
                arrows: false,
                autoplay: true,
                // autoplaySpeed: 3000,
                centerMode: true,
                centerPadding: '0',
                lazyLoad: false,
                pauseOnHover: false,
                swipe: true,
                swipeToSlide: true,
                touchMove: true,

              dots: true,
              dotsClass: 'slide__btn-group',
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
            };

        return (
            <Slider {...settings}>
                    {imgList}
            </Slider>
        );
    }
}

export default Slide;
