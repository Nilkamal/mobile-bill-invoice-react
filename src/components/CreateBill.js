import React from "react";
import { Link } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import { addBillMutation, getBillsQuery } from "../queries/queries";

class CreateBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billNumber: "",
      customerName: "",
      date: "",
      imeiNumber: "",
      modelNumber: "",
      chargerNumber: "",
      warranty: "",
      amount: "",
      address: ""
    };
  }

  saveBill = e => {
    console.log(this.state);
    e.preventDefault();
    this.props
      .addBillMutation({
        variables: {
          billNumber: this.state.billNumber,
          date: this.state.date,
          customerName: this.state.customerName,
          address: this.state.address,
          modelNumber: this.state.modelNumber,
          imeiNumber: this.state.imeiNumber,
          chargerNumber: this.state.chargerNumber,
          warrenty: this.state.warranty,
          amount: parseInt(this.state.amount)
        },
        refetchQueries: [{ query: getBillsQuery }]
      })
      .then(d => {
        if (d.data.addBill.id) {
          this.props.history.push("/");
        } else {
          alert("Problem, while creating new bill.");
        }
      });
  };
  render() {
    console.log(this.props);
    return (
      <main className="pa4 black-80">
        <div className="App container">
          <h1 className="center">Bill Generation App</h1>
        </div>
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Create New Bill</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="bill-number">
                Bill Number
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                name="bill-number"
                id="bill-number"
                onChange={e => {
                  this.setState({ billNumber: e.target.value });
                }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="date">
                Date
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="date"
                name="date"
                id="date"
                onChange={e => {
                  this.setState({ date: e.target.value });
                }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="customer-name">
                Customer Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="customer-name"
                id="customer-name"
                onChange={e => {
                  this.setState({ customerName: e.target.value });
                }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="address">
                Address
              </label>
              <textarea
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                name="address"
                id="address"
                rows="5"
                cols="12"
                valign="center"
                onChange={e => {
                  this.setState({ address: e.target.value });
                }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="model-number">
                Model Number
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="model-number"
                id="model-number"
                onChange={e => {
                  this.setState({ modelNumber: e.target.value });
                }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="imei-number">
                IMEI Number
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="imei-number"
                id="imei-number"
                onChange={e => {
                  this.setState({ imeiNumber: e.target.value });
                }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="charger-number">
                Charger Number
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="charger-number"
                id="charger-number"
                onChange={e => {
                  this.setState({ chargerNumber: e.target.value });
                }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="warranty">
                Warantee
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="warranty"
                id="warranty"
                onChange={e => {
                  this.setState({ warranty: e.target.value });
                }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="amount">
                Amount
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                name="amount"
                id="amount"
                onChange={e => {
                  this.setState({ amount: e.target.value });
                }}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              onClick={e => this.saveBill(e)}
              value="Save"
            />
          </div>
          <div className="lh-copy mt3">
            <Link to="/" className="f6 link dim black db">
              Go to Home
            </Link>
          </div>
        </form>
      </main>
    );
  }
}

export default compose(
  graphql(addBillMutation, { name: "addBillMutation" }),
  graphql(getBillsQuery, { name: "getBillsQuery" })
)(CreateBill);
