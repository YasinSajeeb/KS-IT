import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({questionn}) => {
    const {question, options, correctAnswer, id} = questionn;
    const customId = "custom-id-yes";
    const correction = (value)=>{
        if(value === correctAnswer){
            toast.success('Well-done!! Try Next One..',{
                toastId: customId
              })
        }
        else{
            toast.warn('Oops! Wrong Answer!! Try Again..',{
                toastId: customId
              })
        }
    };

    // const answer = ()=>{

    // }
    return (
        
        <div>
            <div className='w-1/2 mx-auto border-red-400 border-2 my-4 rounded'>
                <div className='flex justify-around'>
                    <h3 className='text-center my-5'> <strong>Q.</strong> {question.slice(3, -4)}</h3>
                <button>
<label htmlFor="my-modal"><EyeIcon className='w-4 right-0'></EyeIcon></label>

<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Correct Answer:</h3>
    <p className="py-4"> {correctAnswer} </p>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Yay!</label>
    </div>
  </div>
</div>
</button>
                </div>
            <div>
                {
                    options.map(option => <div 
                    key={option[3]}
                    onClick={() => correction(option)}
                    className="border-2 my-2 mx-20 p-2 bg-amber-100 hover:bg-amber-400 active:bg-amber-600 focus:bg-amber-600 rounded  text-center">
                        <input type="radio" name={id} id={option}/> 
                         <label htmlFor={option} className="ml-2">{option} </label>
                    </div>
                     ) 
                }
                <ToastContainer/>
            </div>
                

            </div>
        </div>
    );
};

export default Question;