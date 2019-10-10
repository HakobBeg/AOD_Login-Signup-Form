import React from 'react';
import './App.css';
import LogRegForm from "./Components/LogRegForm/LogRegForm";
import i18n from "./Localization/i18next";

import { BrowserRouter } from "react-router-dom";


function App() {
    return (
        <div>

            <BrowserRouter>
                <LogRegForm i18n={i18n}/>
            </BrowserRouter>

        </div>
    );
}

export default App;
