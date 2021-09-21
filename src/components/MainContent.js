import './MainContent.css';

import Header from "./Header";
import Sidebar from "./Sidebar";
import Upnav from "./Upnav";
import Table from "./Table";

import {Grid} from "@mui/material";
import * as React from "react";
import Footer from "./Footer";

const MainContent = () => {
    return (
        <div>
            <Header/>
            <Upnav/>
            <Grid container spacing={2}>
                <Grid item sm={3} className="sidebar-grid">
                    <Sidebar/>
                </Grid>
                <Grid item xs={12} sm={9} className="table-grid">
                    <Table/>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    );
}

export default MainContent;
