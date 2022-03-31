import ConfessionsTable from "./ConfessionsTable";
import fool from '../images/april1st.png';
import './Table.css';
import {Route, Redirect} from "react-router-dom";
import EmergencyTable from "./EmergencyTable";
import * as React from "react";
import Box from '@mui/material/Box';


const Table = (props) => {

    function aprilFoolsClick() {
        setShowAprilFools(!showAprilFool);
    }

    const [showAprilFool, setShowAprilFools] = React.useState(false)

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
            <Route exact path="/who-are-we"
                   render={() => (
                       <Box sx={{
                           display: 'flex',
                           alignItems: 'center',
                           flexDirection: 'column',
                           p: 1,
                           m: 1,
                           borderRadius: 1,
                           height: '40vh', /* Magic here */
                           justifyContent: 'center',
                       }}>
                           <div className="april-button"
                                onClick={aprilFoolsClick}
                           >
                               <div></div>
                           </div>
                           <div style={{margin: '10px',}}>
                               {showAprilFool ? <img src={fool}
                                                     alt="aprilFirst"
                               /> : null}
                           </div>
                       </Box>
                   )}
            />
            {/*<Route exact path="/m-tutorial"*/}
            {/*       component = {() => {*/}
            {/*           // bug*/}
            {/*           window.location.href = 'https://www.facebook.com/ConfessionsHUJI/posts/982578955924705';*/}
            {/*       }}*/}
            {/*/>*/}
        </div>
    );
}

export default Table;