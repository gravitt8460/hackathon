import React, { Component } from "react";
import Layout from "../../components/Layout";
import Lottery from "../../lottery";
import { Card, Grid } from "semantic-ui-react";
import EnterLottery from "../../components/EnterLottery";
import PickWinner from "../../components/PickWinner";

class LotteryShow extends Component {
  static async getInitialProps(props) {
    const lottery = Lottery(props.query.address);
    const summary = await lottery.methods.getSummary().call();

    return {
      address: props.query.address,
      entryFee: summary[0],
      balance: summary[1],
      playerCount: summary[2],
      isCompleted: summary[3],
      winner: summary[4],
      manager: summary[5],
      amountWon: summary[6]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      entryFee,
      playerCount,
      isCompleted,
      winner,
      amountWon
    } = this.props;
    const items = [
      {
        header: manager,
        meta: "Lottery Manager",
        description:
          "The manager created the lottery and decides when to issue a winner.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: entryFee,
        meta: "Lottery Entry Fee (wei)",
        description:
          "Entry fee is the amount of wei required to enter the lottery.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: balance,
        meta: "Balance (wei)",
        description: "The amount of wei available to win.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: playerCount,
        meta: "Number of Players",
        description: "Number of Players entered into the Lottery",
        style: { overflowWrap: "break-word" }
      },
      {
        header: winner,
        meta: "Winner",
        description: "Winner of the Lottery",
        style: { overflowWrap: "break-word" }
      },
      {
        header: isCompleted,
        meta: "Lottery Closed?",
        description:
          "Has the winner already been selected and closed the lottery?",
        style: { overflowWrap: "break-word" }
      },
      {
        header: amountWon,
        meta: "Amount Won",
        description: "If lottery is closed, how much did the winner win?",
        style: { overflowWrap: "break-word" }
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Lottery Details</h3>
        <Grid>
          <Grid.Column width={12}>{this.renderCards()}</Grid.Column>

          <Grid.Column width={4}>
            <EnterLottery address={this.props.address} />
            <PickWinner address={this.props.address} />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default LotteryShow;
