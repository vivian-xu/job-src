import Header from '../header/Header';

const Declare = (props) => (
  <section
    className='declare'
    style={{
        minHeight: window.innerHeight,
    }}
  >
    <Header title={props.title} />
    <div className="
        wrap-block
        wrap-block--double-margin
        wrap-block--no-padding
        wrap-block--top-margin
        declare__content">

        {props.children}

    </div>
  </section>
);

export default Declare;
