import React from 'react';
import {Field} from "formik";

const InputAnswer = (props) => {
   let index = props.index
    return (
        <div>
            <div className="form-outline mb-4">
                <Field type="text" id="form4Example1" className="form-control" name={'answer'+index} />
                <label className="form-label" htmlFor="form4Example1">
                    answer {+index+1}
                </label>
                <label>
                    <Field style={{position: "relative",
                        left: "45rem",
                        top: "-32px"}} className="form-check-input" type="checkbox"  name={'status'+index}/>
                </label>


            </div>
        </div>
    );
};

export default InputAnswer;