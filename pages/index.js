import React, { Component } from "react";
import commissioner from "../commissioner";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

class LotteryIndex extends Component {
  static async getInitialProps() {
    const lotteries = await commissioner.methods
      .getCommissionedLotteries()
      .call();
    return { lotteries };
  }

  renderLotteries() {
    const items = this.props.lotteries.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/lotteries/${address}`}>
            <a>View Lottery</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Lotteries</h3>

          <Link route="/lotteries/new">
            <a>
              <Button
                floated="right"
                content="Create Lottery"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderLotteries()}
        </div>
      </Layout>
    );
  }
}

export default LotteryIndex;
