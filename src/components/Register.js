import { useForm} from "react-hook-form";
import { Form, Button} from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
// import Toast from 'react-bootstrap/Toast';

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();


    const onFormSubmit = (userObj) => {
        console.log(userObj);
        axios.post('http://localhost:4700/user-api/create-user', userObj)
        .then(response => {
            alert(response.data.message);
            //if user created
            if(response.data.message === "new user created successfully"){
                //navigate to login
                navigate("/Login");
            }
        })
        .catch(error => 
            {
                console.log(error);
                alert(error.data.message);
            })
    }
    return ( 
        <div className="bg-light pb-5 pt-5">
            <div className="display-4 text-center text-info">
                Sign Up
            </div>
            <Form className="w-50 mx-auto mb-3 mt-3" onSubmit={handleSubmit(onFormSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" {...register("username", {required: true})}>
                    </Form.Control>
                    {/* validation error */}
                    {errors.username&&<p className="text-danger"> *Username is required</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" {...register("password", {required: true})}>
                    </Form.Control>
                    {/* validation error */}
                    {errors.password&&<p className="text-danger"> *Username is required</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" {...register("email", {required: true})}>
                    </Form.Control>
                    {/* validation error */}
                    {errors.email&&<p className="text-danger"> *Email is required</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" {...register("city", {required: true})}>
                    </Form.Control>
                    {/* validation error */}
                    {errors.city&&<p className="text-danger"> *city is required</p>}
                </Form.Group>

                <Button variant="primary" type="submit">
                    SignUp <MdLogin />
                </Button>
            </Form>
        </div>
        
     );
}

export default SignUp;