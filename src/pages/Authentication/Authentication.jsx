import React from "react";
import {Card, Grid} from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import {Route, Routes} from "react-router-dom";

const Authentication = () =>{
    return(
        <div>
            <Grid container>
                <Grid className='h-screen overflow-hidden' item xs={7}>
                    <img className='h-full w-full' src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png" alt=""/>
                </Grid>
                <Grid item xs={5}>
                    <div className='px-20 flex flex-col justify-center h-full'>
                        <Card className='card p-8'>
                            <div className='flex flex-col items-center mb-5 space-y-1'>
                                <h1 className='logo text-center'>Afshin Social</h1>
                                <p className='text-center text-sm w-[70%]'>Connecting lives, Sharing Stories: Your Social World, Your Way</p>
                            </div>
                            <Routes>
                                <Route path="/" element={<Login/>}></Route>
                                <Route path="/login" element={<Login/>}></Route>
                                <Route path="/register" element={<Register/>}></Route>
                            </Routes>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Authentication