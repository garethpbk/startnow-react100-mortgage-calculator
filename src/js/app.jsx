import React from "react";

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = {
      title: "Mortgage Calculator",
      balance: "",
      rate: "",
      term: 15,
      calculated: 0
    };
    this.handleBalance = this.handleBalance.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.calculatePayment = this.calculatePayment.bind(this);
  }

  handleBalance(e) {
    this.setState({ balance: e.target.value });
    console.log(this.state.balance);
  }

  handleRate(e) {
    this.setState({ rate: e.target.value });
    console.log(this.state.rate);
  }

  handleTerm(e) {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  }

  calculatePayment(e) {
    e.preventDefault();
    let b = this.state.balance;
    let r = this.state.rate / 100 / 12;
    console.log(r);
    let t = this.state.term * 12;
    let p;

    let numerator = r * Math.pow(1 + r, t);
    console.log(numerator);
    let denominator = Math.pow(1 + r, t) - 1;
    console.log(numerator);

    p = b * (numerator / denominator);
    p = p.toFixed(2);
    this.setState({ calculated: "$" + p + " is your payment." });
  }

  render() {
    return (
      <div className="container">
        <h3>{this.state.title}</h3>
        <hr />
        <div className="row">
          <form>
            <div className="form-group row">
              <label htmlFor="balance" className="col-sm-2  col-form-label">
                Loan Balance
              </label>
              <div className="col-sm-10">
                <input
                  id="balance"
                  className="form-control"
                  type="number"
                  name="balance"
                  value={this.state.balance}
                  onChange={this.handleBalance}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="rate" className="col-sm-2 col-form-label">
                Interest Rate (%)
              </label>
              <div className="col-sm-10">
                <input
                  id="rate"
                  className="form-control"
                  type="number"
                  name="rate"
                  step="0.01"
                  value={this.state.rate}
                  onChange={this.handleRate}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="term" className="col-sm-2 col-form-label">
                Loan Term (years)
              </label>
              <div className="col-sm-10">
                <select
                  id="term"
                  className="form-control"
                  name="term"
                  value={this.state.term}
                  onChange={this.handleTerm}
                >
                  <option value="15">15</option>
                  <option value="30">30</option>
                </select>
              </div>
            </div>

            <div className="form-group-row">
              <div className="col-sm-2">&nbsp;</div>
              <div className="col-sm-10">
                <button id="submit" name="submit" className="btn btn-primary" onClick={this.calculatePayment}>
                  Calculate
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="row text-center">
          <div className="col h1" id="output">
            {this.state.calculated}
          </div>
        </div>

        {/* your JSX goes here */}
      </div>
    );
  }
}
