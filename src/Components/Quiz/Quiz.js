import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const {data} = quiz;
    const {name, questions} = data;
    return (
        <div>
            <h3 className='text-center text-2xl font-bold underline underline-offset-4 '>Question of "{name}"</h3>
            {
            questions.map(questionn => <Question
            key={questions.id}
            questionn={questionn}
            ></Question>)
            }
        </div>
    );
};

export default Quiz;