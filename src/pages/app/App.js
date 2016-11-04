import Loading from '../../components/loading/Loading';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="app">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
}

export default App;
