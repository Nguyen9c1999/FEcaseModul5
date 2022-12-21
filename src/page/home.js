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

            <Outlet/>
            <div>
                <footer className="bg-light text-center text-white">
                    {/* Grid container */}
                    <div className="container p-4 pb-0">
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* Facebook */}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#3b5998" }}
                                href="#!"
                                role="button"
                            > Facebook
                                <i className="fab fa-facebook-f" />
                            </a>
                            {/* Twitter */}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#55acee" }}
                                href="#!"
                                role="button"
                            >  Twitter
                                <i className="fab fa-twitter" />
                            </a>
                            {/* Google */}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#dd4b39" }}
                                href="#!"
                                role="button"
                            > Google
                                <i className="fab fa-google" />
                            </a>
                            {/* Instagram */}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#ac2bac" }}
                                href="#!"
                                role="button"
                            > Instagram
                                <i className="fab fa-instagram" />
                            </a>
                            {/* Linkedin */}

                        </section>
                        {/* Section: Social media */}
                    </div>
                    {/* Grid container */}
                    {/* Copyright */}
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2022 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">
                            QUIZ
                        </a>
                    </div>
                    {/* Copyright */}
                </footer>

            </div>
        </div>
    );
};

export default Home;