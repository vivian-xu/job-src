class Mentor extends React.PureComponent {
    constructor(props) {
        super(props);
        this.displayName = 'Mentor';

        this.state = {
            gender: props.data.gender,
            text: props.data.text
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            gender: nextProps.data.gender,
            text: nextProps.data.text
        });
    }

    render() {
        return (
            <section className="wrap-block mentor">
                <p className="section-title">
                    {this.state.gender}说
                </p>
                <p>
                    {this.state.text}
                </p>
            </section>
        );
    }
}

export default Mentor;
