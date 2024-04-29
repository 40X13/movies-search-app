import {Route, Routes,} from "react-router-dom";

import Main from "./Components/Main/Main.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";

import classes from './App.module.css';

import Movies from "./Components/Main/Movies/Movies.jsx";
import RatedMovies from "./Components/Main/RatedMovies/RatedMovies.jsx";


function App() {

    return (
        <div className={classes.app}>
            <Sidebar/>
            <Routes>
                <Route path="/movies" element={<Main/>}>
                    <Route index element={<Movies/>}/>
                    <Route path="rated" element={<RatedMovies/>}/>
                    <Route path=":movie" element={<div>movie</div>}/>
                </Route>
                <Route path="*" element={<h1>Error</h1>}/>
            </Routes>
        </div>
    )
}

export default App
