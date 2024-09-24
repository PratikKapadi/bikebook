import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const LoginRegister = ()=>{
    const [isNewUser,setIsNewUser] = useState(false);

    const handleIsNewUser = ()=>{
        setIsNewUser(true);
    }

    return(
        <div>
            {isNewUser ? <SignUpForm existingUser={()=>setIsNewUser(false)}/> : <LoginForm newUser={handleIsNewUser}/>}
        </div>
    )

}

export default LoginRegister;