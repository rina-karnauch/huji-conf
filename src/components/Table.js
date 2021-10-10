import ConfessionsTable from "./ConfessionsTable";
import './Table.css';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import EmergencyTable from "./EmergencyTable";
import * as React from "react";

const Table = () => {

    return (
        <div className="main-table">
            <Switch>
                <Route exact path="/home" component={ConfessionsTable}/>
                <Route exact path="/hotlines" component={EmergencyTable}/>
            </Switch>
        </div>
    );
}

export default Table;