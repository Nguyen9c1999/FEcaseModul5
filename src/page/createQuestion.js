import React, {useEffect, useState} from 'react';
import NavBarHome from "../components/Nav-Bar-Home";
import InputAnswer from "../components/inputAnswer";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {createQuestionService} from "../service/questionService";
import {createAnswerService} from "../service/answerService";

const CreateQuestion = () => {
    let dataCategory = useSelector(state => {
        return state
    })
    const navigate = useNavigate()
    let {id} = useParams()
    const dispatch = useDispatch()

    const [numbers,setNumbers] = useState([1,2])
    const [test,setTest] = useState(1)
    console.log(test)
    const createQuestion = ()=>{
      return  numbers.map((number,index)=>{
         return <InputAnswer index={index}/>

        })
    }
    const handleQuestion = async (values)=>{
        console.log(values)
        let idUser = dataCategory.user.userNow.userFind[0].idUser
        let question = {
         nameQuestion : values.question,
         idTest : +id,
            idUserCreate: idUser
        }
  let {payload} =    await dispatch(createQuestionService(question))
  //    await   console.log(payload.idQuestion)
    handleAnswer(payload.idQuestion,values)
    }

    const handleAnswer = (idQuestion,values)=>{

        numbers.map(async (number,index)=>{
            let nameAnswer = values['answer' + index]
            let status = values['status' + index]
            if(status==undefined){
                status = false
            }
            let answer = {
                nameAnswer : nameAnswer,
                status : status,
                idQuestion : idQuestion
            }
            await dispatch(createAnswerService(answer))




        })
      navigate('/home/question/'+id)
    }


    return (
        <div className="offset-3 col-6 mt-5">
            <Formik initialValues={{question:'',answer0:'',answer1:'',answer2:'',answer3:''}} enableReinitialize={true} onSubmit={async (values,{resetForm})=>{
               await handleQuestion(values)
               await navigate('/home/question/'+id)
                resetForm()
            }}>

                <Form>
                    {/* Name input */}
                    <div className="form-outline mb-4">
    <Field
        className="form-control"
        id="form4Example3"
        rows={4}
        name={'question'}
        defaultValue={""}
    />
                        <label className="form-label" htmlFor="form4Example3">
                            Question
                        </label>
                    </div>
                    {createQuestion()}
                    <button type={'button'} onClick={()=>{
                        setNumbers([...numbers,3])

                    }}>ADD Question</button>
                    <button type={'button'} onClick={()=>{
                        let newArr = numbers
                        if(newArr.length<3){
                            alert('khum xóa được nữa')
                            setNumbers([...numbers])
                            return
                        }
                        newArr.splice(newArr.length-1,1)
                        setNumbers([...newArr])
                    }}>delete</button>
                    <button  className="btn btn-primary btn-block mb-4">
                        Send
                    </button>
                </Form>

            </Formik>
            <Link to={'/home'}>
                <button>Done</button>
            </Link>


        </div>
    );
};

export default CreateQuestion;