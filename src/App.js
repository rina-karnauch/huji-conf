import './App.css';
import * as React from 'react';
import MainContent from "./components/MainContent";
import {useHistory} from "react-router-dom";

export default function App() {

    const history = useHistory();
    history.push('/home');

    return (
        <MainContent/>
    );
}