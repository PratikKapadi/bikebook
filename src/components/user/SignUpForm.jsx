import React, { useState } from 'react';
import {Form, FormGroup, FormLabel, FormControl, Container, Button, FormText} from 'react-bootstrap'


const SignUpForm = ({existingUser}) => {
    const [user,setUser] = useState({
        username: '',
        password: '',
        confirmPassword:""
    })


    // event handler to submit signup form
    const submitForm = (e) => {
            e.preventDefault();
            alert("Congrats!! You have successfully Registered")
    }

    return (
        <Container className='w-50 border border-dark rounded mt-3 p-3'>
            <h2 className='text-center'>Sign Up Form</h2>
            <Form onSubmit={submitForm}>
                <FormGroup className='mb-3'>
                    <FormLabel>New Username</FormLabel>
                    <FormControl value={user.username} 
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    placeholder="Enter your new username" required/>
                </FormGroup>
                <FormGroup className='mb-3'>
                    <FormLabel>New Password</FormLabel>
                    <FormControl type="text" placeholder="Enter your new password"
                    value={user.password}
                    onChange={e=>setUser({...user, password: e.target.value})}
                    required pattern='(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$^!&]).{6,10}'/>
                    <FormText>Password must be 6 to 10 characters long. It must contains atleat 1 lowercase, 1 uppercase alphabet, 
                        1 digit and any one of the symbol such as @#$^!
                    </FormText>
                </FormGroup>
                <FormGroup className='mb-3'>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl type="password" placeholder="Confirm your new password"
                    value={user.confirmPassword}
                    onChange={e=>setUser({...user, confirmPassword: e.target.value})}
                    required/>
                    {user.password!=user.confirmPassword &&  <p style={{color:'red'}}>Sorry!! Password and Confirm Password must be same</p>}
                </FormGroup>
                <Container className='text-center'>
                    <Button className='me-3' type='submit'>Sign Up</Button>
                    <Button variant='secondary' type='reset'>Reset</Button>
                </Container>
            </Form>
                

            <p>Already User? Please<button onClick={existingUser} className="btn btn-link">Sign In</button></p>
        </Container>
    );
}

export default SignUpForm;

