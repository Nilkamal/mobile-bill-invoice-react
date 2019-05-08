import React from "react";
import { graphql, compose, Query } from "react-apollo";
import { getBillQuery, addBillMutation } from "../queries/queries";

class CreateBill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: null
    };
  }

  render() {
    return (
      <Query
        query={getBillQuery}
        variables={{ id: this.props.match.params.id }}
      >
        {({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          else console.log(data);

          return (
            <article
              className="main"
              style={{
                width: "60%",
                margin: "0 auto",
                boxSizing: "border-box"
              }}
            >
              <div>
                <span className="f4 tr">
                  <p className="tr pt0">Mobile Number: </p>
                  <ul className="list pl0 tr">
                    <li className="pt2">+(91) 9825556261</li>
                    <li className="pt2">+(91) 7016019665</li>
                    <li className="pt2">+(91) 9427136012</li>
                  </ul>
                </span>
              </div>
              <div>
                <h1 className="f1 tc">Mahavir Mobile</h1>
                <span
                  className="f6 tc pa0"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  9, Swagat Complex, Opp. Bus stand, Kadodara, Surat.
                </span>
              </div>
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="pt3"
              >
                <div>
                  <span>Customer Name: {data.bill.customerName}</span>
                </div>
                <div>
                  <span>Bill Number: {data.bill.billNumber}</span>
                </div>
              </div>
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="pt3"
              >
                <div>
                  <span>Address: {data.bill.address}</span>
                </div>
                <div>
                  <span>Date: {data.bill.date}</span>
                </div>
              </div>

              <div className="pt4">
                <div className="overflow-auto">
                  <table className="f6 w-100 mw8 center" cellSpacing="0">
                    <thead>
                      <tr>
                        <th className="fw6 f4 bb b--black-20 tl pb3 pr3 bg-grey">
                          Particulars
                        </th>
                        <th className="fw6 tr f4 bb b--black-20 tl pb3 pr3 bg-grey">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="lh-copy">
                      <tr>
                        <td className="pv3 pr3 bb b--black-20">
                          <div>
                            Model Name:{" "}
                            <span style={{ display: "block" }} className="pl2">
                              {data.bill.modelNumber}
                            </span>
                          </div>
                          <div className="pt2">
                            IMEI Number:{" "}
                            <span style={{ display: "block" }} className="pl2">
                              {data.bill.imeiNumber}
                            </span>
                          </div>
                          <div className="pt2">
                            Charger Number:{" "}
                            <span style={{ display: "block" }} className="pl2">
                              {data.bill.chargerNumber}
                            </span>
                          </div>
                          <div className="pt2">
                            Warrenty / Guarantee:{" "}
                            <span style={{ display: "block" }} className="pl2">
                              {data.bill.warrenty}
                            </span>
                          </div>
                          <div className="pt2">
                            GSTIN Number:{" "}
                            <span style={{ display: "block" }} className="pl2">
                              24CMOPS9959Q1ZJ
                            </span>{" "}
                          </div>
                        </td>
                        <td
                          className="pv3 pr3 tr bb b--black-20 "
                          style={{ verticalAlign: "top" }}
                        >
                          {data.bill.amount}
                        </td>
                      </tr>
                      <tr>
                        <td className="tr f4">TOTAL</td>
                        <td className="f4 tr">{data.bill.amount}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                style={{ display: "flex", justifyContent: "flex-end" }}
                className="pt5"
              >
                <div>
                  <span
                    className="w-50"
                    style={{
                      borderBottom: "1px solid black",
                      minWidth: "100px"
                    }}
                  >
                    {" "}
                  </span>
                  <span
                    style={{
                      display: "block",
                      borderTop: "1px solid black",
                      minWidth: "150px"
                    }}
                    className="f4 pt3 tc w-100"
                  >
                    For Mahavir
                  </span>
                </div>
              </div>
            </article>
          );
        }}
      </Query>
    );
  }
}

export default compose(graphql(getBillQuery, { name: "getBillQuery" }))(
  CreateBill
);
