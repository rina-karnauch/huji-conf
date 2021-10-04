import ConfessionsTable from "./ConfessionsTable";
import './Table.css';
import {Route} from "react-router-dom";
import EmergencyTable from "./EmergencyTable";
import * as React from "react";

const Table = () => {
    return (
        <div className="main-table">
            <Route exact path="/">
                <ConfessionsTable/>
            </Route>
            <Route exact path="/hotlines">
                <EmergencyTable/>
            </Route>
        </div>
    );
}

export default Table;