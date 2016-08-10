import React from 'react';
import Child from './Child';

class App extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
    }

    componentWillMount () {
        this.setState({
            data: 'data'
        });
    }
    componentDidMount() {
        this.setState({
            data: 'data2'
        });
    }

    render() {
        return (
                <div>
                    <h1> Unofficial Github Browser v0.1 </h1>
                    <Child data={this.state.data} />
                </div>
            );
    }
}

App.propTypes = {
    children: React.PropTypes.node
}

export default App;
