import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CategoryTest} from "../service/categoryTestService";
import {deleteTest, showTest} from "../service/testCategory";
import {Link} from "react-router-dom";

const ListTest = () => {
     let dataTest = useSelector(state => {
         return state.test.listTest
     })
    let dataUser = useSelector(state => {
      return  state.user.userNow.userFind[0].idUser
    })
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(CategoryTest())
        dispatch(showTest())
    },[])
    const displayDelete = (idUserCreate,idTest)=>{
        console.log("1",dataTest)
        console.log(dataUser)
         if(idUserCreate == dataUser){

             return <button class="btn btn-danger" style={{marginLeft : "8px"}} onClick={()=>{
             handleDeleteTest(idTest)
             }
             }>Delete</button>
         }

         return <></>
    }
    const handleDeleteTest = async (idTest)=>{
        await dispatch(deleteTest(idTest))
        await dispatch(showTest())
    }
    const showListTest = ()=>{

      return    dataTest.map(test=>{
             return  <div className="col" style={{marginBottom:"30px"}}>
                 <div className="card h-100">
                     <img
                         src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                         className="card-img-top"
                         alt="Hollywood Sign on The Hill"
                     />
                     <div className="card-body">
                         <h5 className="card-title">{test.nameTest}</h5>
                         <div className=" d-grid gap-2 d-md-block">
                           <Link to={'/home/test/'+test.idTest}>
                               <button className="btn btn-primary" type="button">Test</button>
                           </Link>
                             {displayDelete(test.idUserCreate,test.idTest)}
                         </div>
                     </div>
                 </div>
             </div>
         })
    }
    return (
        <div>
            <section className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col text-center mb-5">
                            <h1 className="display-4">LIST QUIZ</h1>
                            <p className="lead">
                                CLICK TO TAKE THE TEST
                            </p>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {showListTest()}

                    </div>
                </div>









            </section>
        </div>
    );
};

export default ListTest;