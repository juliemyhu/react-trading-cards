"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome! Ready to get trading? </p>
        <a href= "/cards"> Click here to view the trading cards. </a>
      	<img src="/static/img/balloonicorn.jpg" ></img> 
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
