import React from "react";

import Nav from "../../components/nav/nav.comp";
import Sidebar from "../../components/sidebar/sidebar.comp";
import Table from "../../components/table/Table.comp";
import Profile from "../profile/Profile.page";
import Staff from "../staff/Staff.page";
import Credit from "../../components/table/credit.comp";
import Proxy from "../../components/proxy/Proxy.comp";
import Invoice from "../../components/invoice/invoice.comp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export function Dashboard() {
  
  return (
    <div className="Dash">
      <Router>
        <Nav />
        <div className="row" style={{margin:0,padding:0, marginTop: "70px"}}>
          <div className="col-2 " style={{margin:0,padding:0}}>
            <Sidebar />
          </div>
          
          <div className="col-8 mt-5" style={{margin:0,padding:0}}>
          <Switch>
            <Route path="/tables">
              <Table />
            </Route>
            <Route path="/credit">
              <Credit />
            </Route>
            <Route path="/staff">
              <Staff />
            </Route>
            <Route path="/proxy">
              <Proxy />
            </Route>
            <Route path="/invoice">
              <Invoice />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
};

export default Dashboard;
