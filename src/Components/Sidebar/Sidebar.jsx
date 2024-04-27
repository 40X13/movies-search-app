import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar =()=>{
    return(
        <nav className={classes.sidebar}>
            <NavLink to={"/movies"}>Movies</NavLink>
            <NavLink to={"/movies/rated"}>Rated movies</NavLink>
        </nav>
    );
}

export default Sidebar;