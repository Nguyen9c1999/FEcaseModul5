import React from 'react';
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {changePassword} from "../service/userService";
import {useNavigate, useParams} from "react-router-dom";

const ChangePassword = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const dispatch = useDispatch()

    return (
        <div className="offset-3 col-6 mt-5" style={{paddingTop:"100px"}}>
            <Formik initialValues={{oldPassword: "", newPassword: ""}} onSubmit={async (values, {resetForm}) => {
                let data = await dispatch(changePassword({...values, id}))
                if (data.payload.user.check) {
                    alert(data.payload.mess)
                    navigate('/home')
                } else {
                    alert(data.payload.mess)
                    resetForm()
                }
            }}>
                <Form>
                    <Field
                        className="form-control"
                        required
                        name="oldPassword"
                        type="text"
                        placeholder="Old Password"
                    />
                    <br/>
                    <Field
                        className="form-control"
                        required
                        name="newPassword"
                        type="text"
                        placeholder="New Password"
                    />
                    <br/>
                    <button className="btn btn-primary btn-lg btn-block " type="submit">Save</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ChangePassword;