import { useForm} from "react-hook-form";
import { Form, Button} from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import React from "react";


function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onFormSubmit = (userCredentialObj) => {
        console.log(userCredentialObj);
    }
    return (  
        <div className="bg-light pt-5 pb-5">
            <div className="display-4 text-center text-info ">
                Login page
            </div>
            <Form className="w-50 mx-auto mt-3" onSubmit={handleSubmit(onFormSubmit)}>
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

                

                <Button variant="primary" type="submit">
                    Login <MdLogin />
                </Button>
            </Form>
        </div>
    );
}

export default Login;