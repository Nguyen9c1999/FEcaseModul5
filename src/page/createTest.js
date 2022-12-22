import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {createTest} from "../service/testCategory";
import {Link, useNavigate} from "react-router-dom";

const CreateTest = () => {
    let dataCategory = useSelector(state => {
        return state
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleCreateTest = async (values) => {
        let idUser = dataCategory.user.userNow.userFind[0].idUser
        values = {...values, idUserCreate: idUser}

        let {payload} = await dispatch(createTest(values))
        await navigate('/home/question/' + payload.idTest)

    }
    const showCategory = () => {
        return <Field as="select" name="idCategory">
            <option defaultValue={"selected"}>Category</option>
            {dataCategory.category.category.map(category => {
                return <option value={category.idCategory}>{category.nameCategory}</option>
            })}

        </Field>
    }
    return (
        <div>

            <section className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col text-center mb-5">
                            <h1 className="display-4">Create Quizz</h1>
                        </div>
                    </div>

                </div>
                <div className="offset-3 col-6 mt-5">
                    <Formik initialValues={{nameTest: ''}} onSubmit={(values) => {
                        handleCreateTest(values)
                    }}>
                        <Form>
                            {/* Name input */}
                            <div className="form-outline mb-4">
                                <Field type="text" id="form4Example1" className="form-control" name={'nameTest'}/>
                                <label className="form-label" htmlFor="form4Example1">
                                    Name Quiz
                                </label>
                            </div>
                            {/* Email input */}

                            {/* Message input */}
                            <div className="form-outline mb-4">

                                {showCategory()}

                                <label className="form-label" htmlFor="form4Example3">
                                    Category
                                </label>
                            </div>
                            {/* Checkbox */}

                            {/* Submit button */}
                            <button className="btn btn-primary btn-block mb-4">
                                continue
                            </button>
                        </Form>
                    </Formik>


                </div>


            </section>
        </div>
    );
};

export default CreateTest;