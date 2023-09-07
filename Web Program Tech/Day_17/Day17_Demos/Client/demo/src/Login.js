import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './common.css'
import { useHistory } from 'react-router-dom';
function Login(props) {

    const [credentials, setcredentials] = 
                useState({username: "", password:""});
    
    const [message, setmessage] = useState("");

    const history = useHistory(); 

    useEffect(()=>{
        if(message!="")
        {
            setTimeout(() => {
                setmessage("");
            }, 3000);
        }
    }, [message])

    const OnTextChange =(args)=>{
       var copyOfcredentials = {...credentials};
       copyOfcredentials[args.target.name] = 
                                args.target.value;
       setcredentials(copyOfcredentials);
    }
    const SignIn = ()=>{
        debugger;
        var helper = new XMLHttpRequest();

        helper.onreadystatechange=()=>{
            if(helper.readyState == 4 &&
                helper.status == 200)
                {
                    debugger;
                   var responseReceived = 
                    JSON.parse( helper.responseText);
                    if(responseReceived.isValid 
                        == 'true')
                    {
            sessionStorage.setItem("isloggedin", true);
            sessionStorage.setItem("username",credentials.username);
                    props.setUserName(credentials.username)
            
                    history.push("/");
                        
                    }
                    else
                    {
                        setmessage("Credentials are invalid!");
                        setcredentials({username: "", password:""});
                    }
        }
    }
        helper.open("POST", 
        "http://127.0.0.1:9999/login");

        helper.setRequestHeader("Content-Type", "application/json")

        var credentialsInString = JSON.stringify(credentials);

        var credentialsInEncoded = window.btoa(credentialsInString)

        var details ={"credentials":
            credentialsInEncoded }
        helper.send(JSON.stringify(details));
    }

    return (  <>
                <br/>
                <center>
                    <table className="table table-bordered table-hover loginTable">
                        <tbody>
                            <tr>
                                <td>User Name</td>
                                <td>
                     <input type="text"
                        placeholder="Enter UserName"
                        value={credentials.username} 
                        name='username'
                        onChange={OnTextChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td>
                            <input type="password"
                            placeholder="Enter Password" 
                            value={credentials.password}
                            name='password'
                            onChange={OnTextChange}
                            />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={"2"}>
                                   <button onClick={SignIn} className="btn btn-primary">
                                     Login In
                                   </button>
                                   <hr></hr>
                                   {message}
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </center>
              </>);
}

export default Login;