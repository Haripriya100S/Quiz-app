import React from 'react';
// import {useState} from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
    // let [usersList, setUsersList] = useState([])
    const {register, handleSubmit, formState: { errors } } = useForm()
    // console.log("error obj is ", errors);
    
    const onFormSubmit = (userObj) => {
        console.log(userObj);
        // Linking.openURL('mailto:support@example.com')
        // setUsersList([...usersList, userObj])
    }
    return ( 
        <div className='container  bg-light border shadow-lg pb-5'>
            <form  className="mx-auto w-50 text-light-sm pt-5 pb-5 mt-4" onSubmit={handleSubmit(onFormSubmit)}>
                <h1 className="display-6 text-center pt-3 text-info" >Drop your Queries</h1>


                <div className="mb-3">
                    <label htmlFor="un" className="form-label" >UserName*</label>
                    <input type="text"  id="un" className="form-control" {...register("username", {required:true, minLength:6})}/>
                    {errors.username?.type === 'required' && <p className='text-danger'>Username is required!</p>}
                    {errors.username?.type === 'minLength' && <p className='text-danger'>Enter atleast 6 characters*</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="mail" className="form-label">Email*</label>
                    <input type="email"  id="mail" className="form-control" {...register("email", {required:true})}/>
                    {/* validation error msg for required of email */}
                    {errors.email?.type === 'required' && <p className='text-danger'>Email is required!</p>}
                </div>
               

                <div className='mb-3'>
                    <label>feedback/queries</label>
                    <textarea type="textarea"  id="text" className="form-control" {...register("text", {required:true})}/>
                </div>
                <button type="submit" className="btn btn-primary mb-2 mx-auto">
                    Submit
                </button> 
            </form> 
            
            
        </div>
     );
}

export default Contact;