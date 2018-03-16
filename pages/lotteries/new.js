import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import commission from "../../ethereum/commission";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class LotteryNew extends Component {
  state = {
    entryFee: "",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await commission.methods.commissionLottery(this.state.entryFee).send({
        from: accounts[0]
      });
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a lottery</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Lottery Entry Fee</label>
            <Input
              value={this.state.entryFee}
              onChange={event =>
                this.setState({ entryFee: event.target.value })
              }
              label="wei"
              labelPosition="right"
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default LotteryNew;
