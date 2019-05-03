import React from "react";
import { graphql } from "react-apollo";
import { getBillsQuery } from "../queries/queries";
import { Link } from "react-router-dom";
class BillList extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="pa4">
        <div className="overflow-auto">
          <p>
            <Link className="link dim near-black f3 create" to="/create/">
              Create New Bill
            </Link>
          </p>
          <table className="f6 w-100 mw8 center" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-grey">#</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-grey">
                  Customer Name
                </th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-grey">Date</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-grey">
                  Model Number
                </th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-grey">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">{this.displayBillList()}</tbody>
          </table>
        </div>
      </div>
    );
  }

  displayBillList = () => {
    if (this.props.data.loading) {
      return (
        <tr>
          <td>Loading......</td>
        </tr>
      );
    } else {
      return this.props.data.bills.map(bill => {
        return (
          <tr key={bill.id}>
            <td className="pv3 pr3 bb b--black-20">{bill.billNumber}</td>
            <td className="pv3 pr3 bb b--black-20">{bill.date}</td>
            <td className="pv3 pr3 bb b--black-20">{bill.customerName}</td>
            <td className="pv3 pr3 bb b--black-20">{bill.modelNumber}</td>
            <td className="pv3 pr3 bb b--black-20">
              <Link className="link dim near-black f5 " to="/create/">
                Generate
              </Link>
            </td>
          </tr>
        );
      });
    }
  };
}

export default graphql(getBillsQuery)(BillList);
