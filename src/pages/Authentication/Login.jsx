import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, TextField} from "@mui/material";
import * as Yup from "yup"
import {useDispatch} from "react-redux";
import {loginUserAction} from "../Redux/Auth/Auth.action";
import {useNavigate} from "react-router-dom";

const initialValues = {email:"", password:""};
/*const validationSchema = {email:Yup.string().email("Invalid Email").required("Email is required"),
password: Yup.string.min(6, "password must be at least 6 characters").required("Password is required")};*/
const Login = () =>{
    const [formValue,setFormValue] = useState();
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const handleSubmit=(values)=>{
        console.log("handle submit", values);
        dispatch(loginUserAction({data:values}));
    };

    return (
        <>
            <Formik initialValues={initialValues} /*validationSchema={validationSchema}*/ onSubmit={handleSubmit}>
                <Form className='space-y-5'>
                    <div className='space-y-5'>
                        <div>
                            <Field as={TextField} name='email' placeholder="Email" variant="outlined" fullWidth/>
                            <ErrorMessage name="email" component="div" className="text-red-500"/>
                        </div>
                        <div>
                            <Field as={TextField} name='password' placeholder="Password" variant="outlined" fullWidth/>
                            <ErrorMessage name="password" component="div" className="text-red-500"/>
                        </div>
                    </div>
                    <Button sx={{padding: "0.8rem 0rem"}} fullWidth type="submit" variant="contained"
                            color="primary">Login</Button>
                </Form>
            </Formik>
            <div className="flex gap-5 items-center justify-center pt-5">
                <p>dont have an account ?</p>
                <Button onClick={()=>navigate("/register")}>Register</Button>
            </div>
        </>
    );
};

export default Login