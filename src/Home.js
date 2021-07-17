import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import "./Home.css";
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
        <div className="container">
          <h1> Knowledge Empowers You</h1>
          <p>
            Education is the key to unlocking the world a passwort to freedom.
          </p>
          <label htmlFor="howmuch">
            <h3>Donate Now</h3>{" "}
          </label>
          <input
            className="howmuch"
            type="text"
            id="howmuch"
            value={this.state.amount}
            onChange={this.getamount.bind(this)}
          />
          <div className="payment">
            <PaypalExpressBtn
              env={this.state.env}
              client={this.state.client}
              currency={this.state.currency}
              total={this.state.amount}
              onError={this.jeetfun}
              onSuccess={this.ketufun}
              onCancel={this.ketucan}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
