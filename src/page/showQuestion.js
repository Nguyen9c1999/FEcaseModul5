import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {findQuestionByIdTest} from "../service/questionService";
import {Link, useParams,Outlet} from "react-router-dom";
const ShowQuestion = () => {
    const data = useSelector(state => {
        return state.question.questionTest
    })
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            await dispatch(findQuestionByIdTest(id))
        })()

    }, [])
    const showQuestion = () => {
        return data.map(item => {
            return (<>

            </>)

        })
    }

    return (
        <div>
            {showQuestion()}
            <Outlet></Outlet>
        </div>
    );
};

export default ShowQuestion;