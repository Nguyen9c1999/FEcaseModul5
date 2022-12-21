
import './App.css';
import NavBar from "./components/Nav-Bar";
import {Route,Routes} from "react-router-dom";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import Home from "./page/home";
import ListTest from "./page/listTest";
import CreateTest from "./page/createTest";
import HistoryTest from "./page/historyTest";
import {useSelector} from "react-redux";
import CreateQuestion from "./page/createQuestion";
import ShowQuestion from "./page/showQuestion";




function App() {
    let dataUser = useSelector(state => {
        return state.user.userNow
    })
  return (
    <Routes>

        <Route path={'/'} element={<SignUp/>}></Route>
        <Route path={'/login'} element={<Login/>}></Route>
        {
            dataUser !=null ?

            <Route path={'/home'} element={<Home/>}>
                <Route path={'/home'} element={<ListTest/>}></Route>
                <Route path={'create'} element={<CreateTest/>}></Route>
                <Route path={'history'} element={<HistoryTest/>}></Route>
                <Route path={'question/:id'} element={<CreateQuestion/>}></Route>
                <Route path={'test/:id'} element={<ShowQuestion/>}></Route>
            </Route>
                :
                <Route path="*" element={<Login/>}/>
        }




    </Routes>
  );
}

export default App;
