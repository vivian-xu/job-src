import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Child';
        this.state = {
            data: props.data
        }
    }
    componentWillReceiveProps( nextProps) {
        this.setState({
            data: nextProps.data
        });
    }


    render() {
        return <div>{this.state.data}</div>;
    }
}

export default Child;
