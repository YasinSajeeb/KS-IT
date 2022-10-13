import React from 'react';

const Question = ({questionn}) => {
    const {question, options} = questionn;
    return (
        <div>
            <div className='w-1/2 mx-auto border-red-400 border-2 my-4 rounded'>
                <h3> <strong>Q.</strong> {question.slice(3, -4)} </h3>
                

            </div>
        </div>
    );
};

export default Question;