import './MainContent.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Upnav from "./Upnav";
import Table from "./Table";
import {Grid} from "@mui/material";
import * as React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
