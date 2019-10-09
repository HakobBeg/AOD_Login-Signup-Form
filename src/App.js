import React from 'react';
import './App.css';
import LogRegForm from "./Components/LogRegForm/LogRegForm";


import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div>

            <BrowserRouter>
                <LogRegForm/>
            </BrowserRouter>

        </div>
    );
}

export default App;
