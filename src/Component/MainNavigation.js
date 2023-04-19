import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
function MainNavigaiton(){
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><Link to = '/'>Home Page</Link></li>
                    <li><Link to = '/eligibility'>Eligibility Page</Link></li>
                    <li><Link to = '/requested-history'>Request History</Link></li>
                </ul>
                <Link to = '/complete-profile'>Complete Your Profile</Link>
            </nav>
        </header>
    );
}

export default MainNavigaiton;