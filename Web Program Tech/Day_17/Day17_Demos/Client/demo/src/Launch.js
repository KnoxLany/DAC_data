import { Link,Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Header from "./Header";
import NotFound from "./NotFound";
import Profile from './Profile';
import ProtectedRoute from "./ProtectedRoute";
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import { F1 } from "./Utility";
import Test from "./Destructured";
import Auth from "./NavigateToFromLogin";

function  Launch()
{
      F1();
      // const something =  Test();
      // console.log(something);
        
      // const {SayBye} =  Test();
      // SayBye();


      debugger;
      const [username, setUserName] = useState("User")
      const history = useHistory(); 
      const {SignIn, SignOut} = Auth();
  
   useEffect(()=>{
      if(sessionStorage.getItem("username")!=null)
      {
            setUserName(sessionStorage.getItem("username"));
      }
      else
      {
            setUserName("User");
      }
   }, []);

   const ShowButton =()=>{
      if(username == "User")
      {
            return  <button className='btn btn-warning' onClick={SignIn}>Log In</button>
      }
      else
      {
            return  <button className='btn btn-warning' onClick={()=>{SignOut(setUserName)}}>Log out</button>
      }
   }       
   
    return <>
                <Header></Header>
                 <hr></hr>
                  <div style={{paddingLeft: 50}}>
                  Welcome {"  "} {username}
                  {ShowButton()}
                  </div>
                  <hr></hr>   
                 {"   |   "}
                 <Link to="/db">Dashboard</Link> 
                 {"   |   "}
                 <Link to="/about">About Us</Link>
                 {"   |   "}    
                 <Link to="/contact">Contact Us</Link>
                 {"   |   "}    
                 <Link to="/profile">See Profile</Link>
                 <hr></hr>
                   <Switch>
                         <ProtectedRoute path="/db"
                               component={Dashboard}
                               setUserName={setUserName}/>
                         <Route path="/about" 
                                exact
                               component={About}/>
                         <Route path="/contact" 
                                exact
                               component={Contact}/>
                         <ProtectedRoute path="/profile"
                               component={Profile} setUserName={setUserName}/>
                         <ProtectedRoute path="/"
                               component={Dashboard} setUserName={setUserName}/>
                         <Route path="*" 
                               component={NotFound}/>
                   </Switch>
                 <hr></hr>
                <Footer></Footer>
            </>
}

export default Launch;