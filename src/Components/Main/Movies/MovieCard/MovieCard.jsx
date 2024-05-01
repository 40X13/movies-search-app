import Card from "../../../UI/Card/Card.jsx";
import classes from "./MovieCard.module.css";
import Star from "../../../UI/Star/Star.jsx";
import RatedStar from "../RatedStar/RatedStar.jsx";


const MovieCard = ({link, poster, movieName,year,genre,rating}) => {

    return(
        <Card className={classes.movieCard}>
            <a href={link}>
                <img className={classes.poster} src={poster} alt={'poster'}/>
                <div className={classes.description}>
                    <h3>{'movieName'}</h3>
                    <span>{'year'}</span>
                    <div className={classes.rating}>
                        <Star className={classes.goldStar}/>
                        <p>{'rating.score'} <span>{'rating.votes'}</span></p>
                    </div>
                    <p><span>genres</span>{'ааа'}</p>
                </div>
                <RatedStar/>
            </a>
        </Card>

    );
}

export default MovieCard;