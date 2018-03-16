import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Lottery from "../ethereum/lottery";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class PickWinner extends Component {
  state = {
    loading: false,
    errorMessage: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    const lottery = Lottery(this.props.address);

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await lottery.methods.pickWinner().send({
        from: accounts[0]
      });
      Router.replaceRoute(`/lotteries/${this.props.address}`);
    } catch (err) {
      console.log(err);
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Pick Winner
        </Button>
      </Form>
    );
  }
}

export default PickWinner;
