import React from 'react';
import NavBar from "../components/Nav-Bar";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../service/userService";
import {Link,useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
     const handleLogin = async (values)=>{

        let dataLogin=await dispatch(login(values))
         checkLogin(dataLogin)
           }

      const checkLogin = (dataLogin) =>{
        if(dataLogin.payload.mess){
            alert('Tài khoản sai nhé')
            localStorage.clear()

        }else {
            alert('đăng nhập thành công')
            navigate('/home')
        }

      }

    return (
        <div>
            <NavBar></NavBar>
            <section className="vh-100" style={{backgroundColor: '#eee'}}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius: '25px'}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                                           <Formik initialValues={{}} onSubmit={(values)=>{
                                              handleLogin(values)
                                           }}>

                                               <Form className="mx-1 mx-md-4">
                                                   <div className="d-flex flex-row align-items-center mb-4">
                                                       <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                       <div className="form-outline flex-fill mb-0">
                                                           <Field type="text" id="form3Example1c" className="form-control" name={'username'} />
                                                           <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                       </div>
                                                   </div>

                                                   <div className="d-flex flex-row align-items-center mb-4">
                                                       <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                       <div className="form-outline flex-fill mb-0">
                                                           <Field name={'password'} type="password" id="form3Example4c" className="form-control" />
                                                           <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                       </div>
                                                   </div>


                                                   <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                       <button  className="btn btn-primary btn-lg">Login</button>
                                                   </div>
                                               </Form>
                                           </Formik>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;