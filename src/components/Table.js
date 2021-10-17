import ConfessionsTable from "./ConfessionsTable";
import './Table.css';
import {Route, Switch} from "react-router-dom";
import EmergencyTable from "./EmergencyTable";
import * as React from "react";

const Table = (props) => {

    return (
        <div className="main-table">
            <Switch>
                <Route exact path="/"
                       render={() => (
                           <ConfessionsTable theme={props.theme}/>
                       )}
                />
                <Route exact path="/hotlines"
                       render={() => (
                           <EmergencyTable theme={props.theme}/>
                       )}/>
            </Switch>
        </div>
    );
}

export default Table;