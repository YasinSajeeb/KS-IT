import React from 'react';

const Question = ({questionn}) => {
    const {question, options, id} = questionn;
    
    return (
        
        <div>
            <div className='w-1/2 mx-auto border-red-400 border-2 my-4 rounded'>
                <h3 className='text-center my-5'> <strong>Q.</strong> {question.slice(3, -4)} </h3>
            <div>
                {
                    options.map(option => <div key={option[3]} className="border-2 my-2 mx-20 p-2 bg-amber-100 hover:bg-amber-400 active:bg-amber-600 focus:bg-amber-600 rounded  text-center">
                        <input type="radio" name={id} id={option}/> 
                         <label htmlFor={option} className="ml-2">{option} </label>
                            
                    </div>)
                }
            </div>
                

            </div>
        </div>
    );
};

export default Question;