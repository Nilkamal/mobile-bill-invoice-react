import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "tachyons";

//components
import BillList from "./components/BillList";
import CreateBill from "./components/CreateBill";
import GenerateBill from "./components/GenerateBill";

//Apollo client setup
const client = new ApolloClient({
  uri: "https://young-meadow-72634.herokuapp.com/graphql/"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route path="/" exact component={BillList} />
          <Route path="/create/" component={CreateBill} />
          <Route path="/generate/:id" component={GenerateBill} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
