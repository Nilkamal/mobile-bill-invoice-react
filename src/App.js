import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "tachyons";

//components
import BillList from "./components/BillList";
import CreateBill from "./components/CreateBill";

//Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql/"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App container">
            <h1 className="center">Bill Generation App</h1>
          </div>

          <Route path="/" exact component={BillList} />
          <Route path="/create/" component={CreateBill} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
