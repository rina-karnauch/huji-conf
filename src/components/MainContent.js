import './MainContent.css';
import * as React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Upnav from "./Upnav";
import Table from "./Table";
import Footer from "./Footer";

const MainContent = () => {
    return (
        <div>
            <Header/>
            <Upnav/>
            <div className="flex-container">
                <Sidebar/>
                <Table/>
            </div>
            <Footer/>
        </div>
    );
}

export default MainContent;
