import {NavLink} from "react-router-dom";
import classes from "./Sidebar.module.css";
import logo from "../../pic/logo.svg";

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.header}>
                <img src={logo} alt="logo"/>
                <h2>ArrowFlicks</h2>
            </div>

            <nav>
                <NavLink to={"/movies"} className={({isActive}) => isActive ? classes.activeLink : ''} end>Movies</NavLink>
                <NavLink to={"/movies/rated"}className={({isActive}) => isActive ? classes.activeLink : ''}>Rated
                    movies</NavLink>
            </nav>
        </div>
    );
}
//
export default Sidebar;