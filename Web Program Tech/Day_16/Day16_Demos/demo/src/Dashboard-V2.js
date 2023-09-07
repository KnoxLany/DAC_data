// import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import Header from './Header';
// import Footer from './Footer';

// class Dashboard extends Component 
// {
//     state = { users : []} 

//     componentDidMount()
//     {
//         debugger;
//         console.log("Inside COmponent Did Mount")
//         var helper = new XMLHttpRequest();
//         helper.onreadystatechange = ()=>{
//             if (helper.readyState == 4 && 
//                 helper.status == 200 )
//                 {
//                     debugger;
//                     var result = 
//                         JSON.parse(helper.responseText);
//                     var receivedUsers = result.data;
//                     console.log("Setting Users to Array received from reqres.in website..")
//                     debugger;
//                     this.setState({users: receivedUsers})
//                 }
//         };
//         helper.open("GET", "https://reqres.in/api/users");
//         helper.send();
//     }
//     componentDidUpdate()
//     {
//         console.log("Component Did Update is called..")
//     }
//     render() 
//     { 
//         debugger;
//         console.log("Dashboard render is getting called..")
//         return (<>
//                     <Header></Header>
//                     <hr></hr>
//                         <table className='table table-bordered'>
//                            <tbody>
//                            {   
//                                 this.state.users.map((emp)=>{
//                                     return <tr key={emp.id}>
//                                             <td>
//                                                 {emp.first_name}
//                                             </td>
//                                             <td>
//                                                 {emp.last_name}
//                                             </td>
//                                             <td>
//                                                 <img 
//                                                     src={emp.avatar}/>
//                                             </td>
//                                         </tr>
//                                 })
//                             }
//                            </tbody>
//                         </table>
//                     <hr></hr>
//                     <Footer></Footer>
//                 </>);
//     }
// }
 
// export default Dashboard;