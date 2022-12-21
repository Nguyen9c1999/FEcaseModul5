import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";

const NavBarHome = () => {
    let dataUser = useSelector(state=>{
        return state.user
    })
    const navigate = useNavigate()

       let test = 'nav-item active dropdown'

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/home'} className="navbar-brand" href="#">Quiz</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className={test}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Test
                            </a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to={'/home'}>List Test</Link>
                                <Link className="dropdown-item" to={'/home/create'}>Create Test</Link>
                                <Link className="dropdown-item" to={"/home/history"}>History Test</Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to={"/home/history"}>{dataUser.userNow.userFind[0].username}</Link>
                            </div>
                        </li>


                    </ul>

                    <ul className="navbar-nav mr-auto">


                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button type="submit" className="btn btn-primary">Search</button>

                        </form>

                    </ul>




                        <button onClick={()=>{
                            localStorage.clear()
                            navigate('/login')
                        }} className="btn btn-outline-danger">Logout</button>




                </div>
            </nav>
        </div>


    );
};

export default NavBarHome;