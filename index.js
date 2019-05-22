class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <NumPicker />
        <MoodMaker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
