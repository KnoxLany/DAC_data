import { useHistory } from "react-router-dom";

function Auth()
{
    const history = useHistory();
    const SignOut = (setUserName)=>{
        sessionStorage.removeItem("isloggedin");
        sessionStorage.removeItem("username");
        setUserName("User");
        history.push("/db")
        }
    
    const SignIn = ()=>{
            history.push("/db")
    }

    return {SignIn, SignOut}
}

export default Auth;

