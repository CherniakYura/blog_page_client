import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css'
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router basename="/blog_page_client">
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);


