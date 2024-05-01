import Star from "../../../UI/Star/Star.jsx";
import {useState} from "react";

import classes from './RatedStar.module.css';

const RatedStar = ({myRating, isRated = true,}) => {
    const [toggle, setToggle] = useState(isRated);


    return (
        <>
            <Star onclick={() => setToggle(!toggle)}
                  className={`${classes.ratedStar} ${toggle && classes.toggleIsRated}`}
            />
            {myRating && <span className={classes.voteAverage}>{'myRating'}</span>}
        </>
    );
}
export default RatedStar;
