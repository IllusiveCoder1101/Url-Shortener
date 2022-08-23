import React from "react";
import  ReactDOM  from "react-dom";
import './Styles/index.css'
import App from "./App";
import { AppProvider } from "./Context/flow";
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <AppProvider>
        <App/>
    </AppProvider>
)