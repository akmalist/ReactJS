function randomNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = randomNum();

    let msg;

    if (num === 7) {
      msg = (
        <div>
          <p>You WOoooon!</p>
          <img src='https://images.unsplash.com/photo-1517957646076-00122c5e7f51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' />
          ;
        </div>
      );
    } else {
      msg = 'You lost!';
    }

    return (
      <div>
        <h1>My number is: {num}</h1>
        {msg}

        {/*         
        <h1>My number is: {num}</h1>
        <p> {num === 7 ? 'You won!' : 'You Lost'}</p>
        {num === 7 ? (
          <img src='https://images.unsplash.com/photo-1517957646076-00122c5e7f51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' />
        ) : null} */}
      </div>
    );
  }
}
