import { configureStore } from '@reduxjs/toolkit';
import userSplice from "./userRedux/userSplice";
import categorySplice from "./categoryRedux/categorySplice";
import testSplice from "./testRedux/testSplice";
import questionSplice from "./questionSplice";
import answerSplice from "./answerSplice";


const store = configureStore({
    reducer: {
       user : userSplice,
        category : categorySplice,
        test : testSplice,
        question : questionSplice,
        answer : answerSplice
    },
})
export default store