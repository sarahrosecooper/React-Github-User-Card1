import React from "react";
import "./styles.css";
import axios from "axios";
import Card from "./components/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardInfo: {}
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/sarahrosecooper")
      .then((response) => {
        console.log(response);
        this.setState({
          cardInfo: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>This is the App Component</h1>
        <Card userCard={this.state.cardInfo} />
      </div>
    );
  }
}

export default App;
