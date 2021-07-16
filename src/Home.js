import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      env: "sandbox",
      currency: "USD",
      amount: 15,
      client: {
        sandbox:
          "AfWnHyirevVSIXalNAdDoPzaZXZracDHl-AmqmiF3ZKJm9EgC2Du1CaK3BvOQMBvjNbS4SghNVUfaST6",
        production: "YOUR-PRODUCTION-APP-ID"
      }
    };
  }

  jeetfun(err) {
    console.log(err);
  }
  ketufun(suc) {
    console.log("i am successful");
  }

  getamount(ev) {
    this.setState({ amount: ev.target.value });
  }
  ketucan(can) {
    console.log(can);
  }
  render() {
    return (
      <>
        <h1> Welcome</h1>
        <input
          type="text"
          value={this.state.amount}
          onChange={this.getamount.bind(this)}
        />
        <PaypalExpressBtn
          env={this.state.env}
          client={this.state.client}
          currency={this.state.currency}
          total={this.state.amount}
          onError={this.jeetfun}
          onSuccess={this.ketufun}
          onCancel={this.ketucan}
        />
      </>
    );
  }
}

export default Home;
