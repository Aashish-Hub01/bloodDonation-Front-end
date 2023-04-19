import { Outlet } from "react-router-dom";
import MainNavigaiton from "../Component/MainNavigation";
import classes from './Root.module.css';
import HamburgerMenu from "../Component/HamburgerMenu";
const RootLayout = ()=>{
    return (
        <>
            {/* <HamburgerMenu/> */}
            <MainNavigaiton/>
            <main className={classes.content}>
                <Outlet/>
            </main>
        </>
    );
}
export default RootLayout;

