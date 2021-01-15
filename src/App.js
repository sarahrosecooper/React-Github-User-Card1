import React from "react";
import "./styles.css";
import axios from "axios";
import Card from "./components/Card";
import styled from "styled-components";

// CardFlex = styled.div`
//   display: flex;
//   border: 1px solid red;
//   flex-wrap: row;

// `

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardInfo: {},
      following: []
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
        console.log(error.message);
      });
    axios
      .get("https://api.github.com/users/sarahrosecooper/following")
      .then((response) => {
        console.log(response);
        this.setState({
          following: response.data
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div>
        <div>
          <Card
            cardInfo={this.state.cardInfo}
            following={this.state.following}
          />
        </div>
      </div>
    );
  }
}

export default App;
