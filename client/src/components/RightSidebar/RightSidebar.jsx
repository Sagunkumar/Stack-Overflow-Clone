import React from 'react'
import "./RightSidebar.css";
import {Routes,Route} from "react-router-dom"
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";
//import { BrowserRouter as Router } from 'react-router-dom';
const RightSidebar = () => {
    return (
        <div>
            <aside className="right-sidebar">
                <Widget />
                <WidgetTags />
            </aside>
        </div>
    )
}

export default RightSidebar