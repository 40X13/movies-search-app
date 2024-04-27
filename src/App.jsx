import {Route, Routes,} from "react-router-dom";

import Main from "./Components/Main/Main.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";

import classes from './App.module.css';


function App() {

    return (
        <div className={classes.app}>
            <Sidebar/>
            <Routes>
                <Route path="/movies" element={<Main/>}>
                    <Route index element={<div>movies</div>}/>
                    <Route path="rated" element={<div>rated</div>}/>
                    <Route path=":movie" element={<div>movie</div>}/>
                </Route>
                <Route path="*" element={<h1>Error</h1>}/>
            </Routes>
        </div>
    )
}

export default App
