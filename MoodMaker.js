function mood() {
  const moods = ['Angry', 'Happy', 'Curious', 'Drunk', 'Desperate', 'Lucky!'];

  return moods[Math.floor(Math.random() * moods.length)];
}

class MoodMaker extends React.Component {
  render() {
    return (
      <div>
        <h1>My current moods is:{mood()} </h1>
      </div>
    );
  }
}
