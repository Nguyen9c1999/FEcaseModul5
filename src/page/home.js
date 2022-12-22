import React from 'react';
import NavBar from "../components/Nav-Bar";
import NavBarHome from "../components/Nav-Bar-Home";
import {Link,Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const Home = () => {
    const userNow = useSelector(state=>{
        return state.user
    })
    return (
        <div>
            <div style={{marginBottom:"50px"}}>
                <NavBarHome></NavBarHome>
            </div>

            <Outlet />
            {/*style={{*/}
            {/*top: "120px",*/}
            {/*left: "0",*/}
            {/*bottom:" 50px",*/}
            {/*margin: "0 auto",*/}
            {/*padding: "20px",*/}
            {/*textAlign: "left",*/}
            {/*overflow: "auto"}}*/}
            {/*<div style={{background: "#222",*/}
            {/*    color: "#ccc",*/}
            {/*    fontWeight: "bold",*/}
            {/*    height: "50px",*/}
            {/*    lineHeight: "50px",*/}
            {/*    marginBottom:"80px",*/}
            {/*    position: "absolute",*/}
            {/*    bottom:" 0",*/}
            {/*    left: "0",*/}
            {/*    width: "100%",*/}
            {/*    textAlign:" center"}}>*/}
            {/*    <footer  className="bg-light text-center text-white">*/}
            {/*        /!* Grid container *!/*/}
            {/*        <div className="container p-4 pb-0">*/}
            {/*            /!* Section: Social media *!/*/}

            {/*            /!* Section: Social media *!/*/}
            {/*        </div>*/}
            {/*        /!* Grid container *!/*/}
            {/*        /!* Copyright *!/*/}
            {/*        <div*/}
            {/*            className="text-center p-3"*/}
            {/*            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}*/}
            {/*        >*/}
            {/*            © 2022 Copyright:*/}
            {/*            <a className="text-white" href="https://mdbootstrap.com/">*/}
            {/*                QUIZ*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*        /!* Copyright *!/*/}
            {/*    </footer>*/}

            {/*</div>*/}
        </div>
    );
};

export default Home;