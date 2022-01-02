import ConfessionsTable from "./ConfessionsTable";
import './Table.css';
import {Route, Redirect} from "react-router-dom";
import EmergencyTable from "./EmergencyTable";
import * as React from "react";
import MemeTutorial from "./MemeTutorial";

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
                       <ConfessionsTable
                           theme={props.theme}
                           disabledSwitch={true}/>
                   )}
            />
            <Route exact path="/hotlines"
                   render={() => (
                       <EmergencyTable theme={props.theme}/>
                   )}/>
            <Route exact path="/"
                   component = {() => {
                       window.location.href = 'https://www.facebook.com/ConfessionsHUJI/posts/1044714699711130';
                   }}
                   // render={() => (
                   //     //
                   //     <MemeTutorial theme={props.theme}/>
                   // )}
            />
        </div>
    );
}

export default Table;