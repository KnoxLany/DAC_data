// import { Link,Switch, Route } from "react-router-dom";
// import About from "./About";
// import Contact from "./Contact";
// import Dashboard from "./Dashboard";
// import Footer from "./Footer";
// import Header from "./Header";
// import NotFound from "./NotFound";
// import Profile from './Profile';
// import ProtectedRoute from "./ProtectedRoute";

// function  Launch()
// {
//     return <>
//                 <Header></Header>
//                  <hr></hr>
//                  {"   |   "}
//                  <Link to="/db">Dashboard</Link> 
//                  {"   |   "}
//                  <Link to="/about">About Us</Link>
//                  {"   |   "}    
//                  <Link to="/contact">Contact Us</Link>
//                  {"   |   "}    
//                  <Link to="/profile">See Profile</Link>
//                  <hr></hr>
//                    <Switch>
//                          <ProtectedRoute path="/db"
//                                component={Dashboard}/>
//                          <Route path="/about" 
//                                 exact
//                                component={About}/>
//                          <Route path="/contact" 
//                                 exact
//                                component={Contact}/>
//                         <ProtectedRoute path="/profile"
//                                component={Profile}/>
//                          <ProtectedRoute path="/"
//                                component={Dashboard}/>
//                          <Route path="*" 
//                                component={NotFound}/>
//                    </Switch>
//                  <hr></hr>
//                 <Footer></Footer>
//             </>
// }

// export default Launch;