
import {Link, useLocation, useParams} from "react-router-dom";

const NavBar = () => {
       const location = useLocation()
    let signUp = 'nav-item'
    let login = 'nav-item'
    let test = 'nav-item dropdown'
    if(location.pathname=='/'){
        signUp = 'nav-item active'
         login = 'nav-item'
        test = 'nav-item dropdown'
    }else if (location.pathname=='/login'){
        login = 'nav-item active'
        signUp = 'nav-item'
        test = 'nav-item dropdown'

    }else {
        signUp = 'nav-item'
        login = 'nav-item'
        test = 'nav-item active dropdown'
    }
    return (
 <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link to={'/home'} className="navbar-brand" href="#">Quiz</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon" />
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mr-auto">
                 <li className={signUp}>
                     <Link className='nav-link'  to={'/'}>Signup <span className="sr-only">(current)</span></Link>
                 </li>
                 <li className= {login}>
                     <Link className='nav-link' to={'/login'}>Login</Link>
                 </li>
                 <li className={test}>
                     <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                         Test
                     </a>
                     <div className="dropdown-menu">
                         <a className="dropdown-item" href="#">List Test</a>
                         <a className="dropdown-item" href="#">Create Test</a>
                         <div className="dropdown-divider" />
                         <a className="dropdown-item" href="#">History Test</a>
                     </div>
                 </li>

             </ul>
             <form className="form-inline my-2 my-lg-0">
                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                     <button type="submit" className="btn btn-primary">Search</button>

             </form>

         </div>
     </nav>
 </div>


    );
};

export default NavBar;




