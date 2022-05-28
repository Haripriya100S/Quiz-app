// import {Outlet} from 'react-router-dom';
import React from "react";
// import { useGlobalContext } from "../context";
import {useForm } from 'react-hook-form';

function Pymodule() {
    // const {quiz, handleChange, handleSubmit, error} = useGlobalContext();

    // // const onFormSubmit = (userObj) =>{
    // //     console.log(userObj);
    // // }
    // return (
    //     <section className="quiz quiz-small">
    //         <form className="mx-auto w-50 bg-secondary text-light ps-5 pe-5 border pt-5 pb-5 mt-4">
    //             <h2 className="mb-2">Open Quiz</h2>
    //             <div className="mb-3">
    //                 <label for="quenum">No. of Questions</label>
    //                 <input type="number" name="amount" id="quenum" value={quiz.amount}
    //                 onChange={handleChange}
    //                 />
    //             </div>

    //             <div className="mb-3">
    //                 <label for="difficulty">No. of Questions</label>
    //                 <select className="form-select" name="difficulty" id="difficulty" value={quiz.difficulty}
    //                 onChange={handleChange}
    //                 >
    //                     <option value="easy">easy</option>
    //                     <option value="medium">medium</option>
    //                     <option value="hard">hard</option>
    //                 </select>
    //             </div>
    //             {error && (
    //                 <p className="lead">
    //                     can't generate questions, please try another way
    //                 </p>
    //             )}
    //             <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Start</button>
    //         </form>
    //     </section>
    // )

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onFormSubmit = (userObj) => {
        console.log(userObj);
    }
    return(
        <div>
            <h2 className="display-4 text-center text-info ">
                Python Quiz
            </h2>
            <form  className="mx-auto w-50 text-light-sm pt-5 pb-5 mt-4" onSubmit={handleSubmit(onFormSubmit)} >


                <div className="mb-3">
                    <label htmlFor="NUmberOfQuestions" className="form-label" >Number of Questions*</label>
                    <input type="number"  id="NumberOfQuestions" className="form-control" {...register("QuestionsNo", {required:true})}/>
                    {errors.QuestionsNo?.type === 'required' && <p className='text-danger'>*Enter Number of Questions!</p>}
                </div>
               
                <button type="Submit" className="btn btn-primary mb-2 mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Take Test
                </button> 
                <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
                        </div>
                        <div className="modal-body">
                            <h2 className="display-3 ">Instructions</h2>
                            <p className="lead">lorndsknndzsssssssssssssssss</p>  
                            {/* <form onSubmit={handleSubmit(onFormSubmit)}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        I Agree to the instructions
                                    </label>
                                </div>  
                                <button type="submit" className="btn btn-primary mb-2 mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Start Test
                                </button> 

                            </form> */}
                                     
                        </div>
                        </div>
                    </div>
                </div>
            </form> 
            
        </div>
    )
        
    
}

export default Pymodule;