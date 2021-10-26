import ConfessionsTable from "./ConfessionsTable";
import './Table.css';
import {Route, Switch, Redirect} from "react-router-dom";
import EmergencyTable from "./EmergencyTable";
import * as React from "react";

const Table = (props) => {

    return (
        <div className="main-table">
            {/*<Switch>*/}
            {/*    */}
            {/*</Switch>*/}
            {/* deployment in github*/}
            <Redirect from="/huji-conf/" to="/"/>
            <Route exact path="/"
                   render={() => (
                       <ConfessionsTable theme={props.theme}/>
                   )}
            />
            <Route exact path="/hotlines"
                   render={() => (
                       <EmergencyTable theme={props.theme}/>
                   )}/>
        </div>
    );
}

export default Table;