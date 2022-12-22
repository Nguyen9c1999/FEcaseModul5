import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {findQuestionByIdTest} from "../service/questionService";
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import "../ph.css"
const ShowQuestion = () => {

    const data = useSelector(state => {
        return state.question.questionTest
    })
    const [length,setLength] =useState(data.length)
    const [count,setCount] = useState(0)
    const [flag,setFlag] = useState(false)
    const [style,setStyle] = useState('')
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            await dispatch(findQuestionByIdTest(id))
        })()

    }, [])
    const showQuestion = () => {
        return data.map((item, indexQuestion) => {
            return (<>


                <h4 style={{marginBottom:'15px'}}>Question {indexQuestion + 1}: {item.question.nameQuestion} </h4>
                {item.answers.map((answer, indexAnswer) => {
                    {if(answer.status==1){
                        return  <div className="form-outline mb-4">
                            <label  style={{color:style, paddingLeft : "10px"}} className="form-label" htmlFor="form4Example1">
                                Answer {indexAnswer + 1}: {answer.nameAnswer}
                            </label>
                            <label>
                                <Field style={{
                                    left: "25rem",

                                }} className="form-check-input" type="radio"
                                       name={indexQuestion.toString()} value={answer.status.toString()}/>
                            </label>
                        </div>
                    }else{
                        return  <div className="form-outline mb-4">
                            <label style={{ paddingLeft : "10px"}} className="form-label" htmlFor="form4Example1">
                                Answer {indexAnswer + 1}: {answer.nameAnswer}
                            </label>
                            <label>
                                <Field style={{
                                    left: "25rem",

                                }} className="form-check-input" type="radio"
                                       name={indexQuestion.toString()} value={answer.status.toString()}/>
                            </label>
                        </div>

                    }
                    }



                })}
                <hr/>
            </>)
        })
    }

   const showResult = ()=>{
        if(flag==false){
            return <h1></h1>
        }

        return<>

            <h5 className="offset-1">You are correct {count}/{data.length} sentences !!!!</h5>
        </>

   }

    const showPH = ()=>{
        if(count==data.length){
            return  <div className="pyro">
                <div className="before"></div>
                <div className="after"></div>
            </div>
        }

        return<>


        </>

    }


    return (
        <div className="offset-4 col-6 mt-5" >
            {showPH()}
            <Formik initialValues={{}} onSubmit={(values) => {
                let countThis=0
                for (let prop in values)
                   if(values[prop]==1){
                       countThis++
                   }
                setCount(countThis)
                setFlag(true)
                setStyle('blue')


            }}>

                <Form>
                    {showQuestion()}
                    <div style={{marginTop :"80px",marginBottom :"40px"}}>

                        <Link  to={'/home'}>
                            <button style={{marginRight :"-70px",marginLeft :"90px"}} class="btn btn-primary">Back</button>
                        </Link>

                        <button  className="btn btn-danger offset-3">Check</button>


                    </div>

                </Form>
            </Formik>
            {showResult()}
            <Outlet></Outlet>
        </div>
    );
};

export default ShowQuestion;