import { useState } from "react";
const LoginForm  = ({newUser}) => {

    const [user,setUser] =  useState({
        username:"",
        password:""
    });

    // event handler to handle username change event

    const handleUsernameChange = (e)=>{
        setUser({...user,username:e.target.value})
    }

    // event handler to handle pasword change event

    const handlePasswordChange = e =>{ setUser({...user,password:e.target.value})}

    // event handler to submit  the form

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Login form is submitted");

    }


    return(
        <div className="container border border-dark p-3 mt-3 rounded w-50">
            <h2 className='text-center'>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div  className="mb-3">

                    <label className="form-label" htmlFor="un">Username</label>
                    <input className="form-control" type="text" name="" id="un" placeholder="Enter Username" 
                    value={user.username}
                    onChange={handleUsernameChange} required/>
                </div>
                <div   className="mb-3">

                    <label className="form-label" htmlFor="pw">Password</label>
                    <input className="form-control" type="password" id="pw" placeholder="Enter Your Password" value={user.password}
                    onChange={handlePasswordChange} required/>

                </div>
                <div className="text-center">
                    <button className="btn btn-outline-success w-25" type="submit">Login</button>
                </div>
            </form>
            <p>New User? Please <button onClick={newUser} className="btn btn-outline-dark"> Sign Up</button></p>

            {/* <h2>Username: {user.username}</h2>
            <h2>Password: {user.password}</h2> */}
        </div>
    )

}

export default LoginForm;