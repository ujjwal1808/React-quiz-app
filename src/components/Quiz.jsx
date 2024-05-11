import React, { useState } from 'react';
import ques from "./ques";

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [score, setScore] = useState(0);
    const [subbutton, setSubbutton] = useState("Next Question");
    const question = ques[index];
    const [result, setResult] = useState(false)

    const handleOptionClick = (optionIndex) => {
        setSelectedOptionIndex(optionIndex);
    };

    const Reset = () => {
        setIndex(0)
        setScore(0)
        setResult(false)
    }

    const nextQuestion = () => {
        if (question.options[selectedOptionIndex] === question.answer) {
            setScore(score + 1)
            setIndex(index + 1);
            setSelectedOptionIndex(null);
        }
        if (index === 9) {
            setResult(true)
        } else {
            setIndex(index + 1);
            setSelectedOptionIndex(null);
        }
    };

    return (
        <div>
            {
                result ? <></> : <>
                    <div className="bg-black text-white p-5 rounded-2xl m-5">
                        <div className='text-white text-4xl flex p-4 '>

                            <h2>Q{question.id}. {question.question}</h2>
                        </div>
                        <div className=' space-x-4 m-3  bg-gray-600 p-4 text-2xl rounded-xl'>
                            <ul>
                                {question && question.options.map((option, optionIndex) => (
                                    <li
                                        key={optionIndex}
                                        className={`m-5 border p-3 w-fit rounded-xl hover:bg-white hover:text-black cursor-pointer ${selectedOptionIndex === optionIndex ? 'bg-white text-black' : 'bg-gray-600 text-white'}`}
                                        onClick={() => handleOptionClick(optionIndex)}>
                                        {option} <br />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <center>
                        <div className=' flex items-center w-fit place-content-center' >
                            <div className="mx-4 p-5 bg-black text-white rounded-full">

                                <button onClick={nextQuestion}>{subbutton}</button>

                            </div>
                            <p>{question.id} of {ques.length}</p>
                        </div>
                    </center> </>
            }
            {
                result ?
                    <>
                        <div className="bg-black text-white text-6xl p-10 text-center m-11 rounded-2xl">
                            <h1>
                                Your Score: {score}
                            </h1>
                                <center>
                            <div className="hover:bg-white p-5 m-10 border w-fit  rounded-3xl  hover:text-black">


                                    <button onClick={Reset}> Reset </button>

                                
                            </div>
                                </center>
                        </div>
                    </> :
                    <>
                    </>
            }


        </div>
    )
}

export default Quiz;
