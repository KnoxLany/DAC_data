
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import Header from './Header';
// import Footer from './Footer';
// import './common.css';
// import { useEffect, useState } from 'react';

// function Dashboard()
// {
//     const [emps,setEmps] =  useState([]);
//     const [emp,setEmp] =  
//             useState({ENo: 0, EName : "", EAddress: ""});
//     const [message,setMessage] =  useState("");
//     const [searchText,setSearchText] =  useState("");

//     useEffect(()=>{
//         setTimeout(() => 
//         {
//             setMessage("");
//         }, 3000);
//     }, [message])

   
//     useEffect(()=>{
//         console.log("Inside COmponent Did Mount")
//         select();
//     }, [])

//    useEffect(()=>
//     {
//         console.log("Component Did Update is called..")
//     }, [emps, emp, message, searchText]);

//     const select=()=>
//     {
//         var helper = new XMLHttpRequest();
//         helper.onreadystatechange = ()=>{
//             if (helper.readyState == 4 && 
//                 helper.status == 200 )
//                 {
//                     debugger;
//                     var result = 
//                         JSON.parse(helper.responseText);
//                     var receivedEmps = result;
//                     console.log("Setting Emps to Array received from reqres.in website..")
//                     debugger;
//                     setEmps(receivedEmps);
//                 }
//         };
//         helper.open("GET", "http://127.0.0.1:9999/emps");
//         helper.send();
//     }

//     const deleteEmp=(ENo)=>
//     {
//         debugger;
//         var helper = new XMLHttpRequest();
//         helper.onreadystatechange = ()=>{
//             if(helper.readyState == 4 &&
//                 helper.status == 200)
//                 {
//                     var responseReceived = 
//                         JSON.parse(helper.responseText);
//                     if(responseReceived.affectedRows!=undefined && responseReceived.affectedRows>0)
//                     {
//                        setMessage("Delete Successfull!")
//                        select();
//                     }
//                     else
//                     {
//                        setMessage("Something went wrong!")
//                     }
//                 }
//         };
//         helper.open("DELETE", 
//                         "http://127.0.0.1:9999/emps/"+ENo);
//         helper.send();   
//     }

//     const insert=()=>
//     {
//         // this.state.empToBeAdded .. hold record's data
//         // to be send to Node Server!
//         var helper = new XMLHttpRequest();
//         helper.onreadystatechange = ()=>{
//             if(helper.readyState == 4 &&
//                 helper.status == 200)
//                 {
//                     var responseReceived = 
//                         JSON.parse(helper.responseText);
//                     if(responseReceived.affectedRows!=undefined && responseReceived.affectedRows>0)
//                     {
//                         setMessage("Insert Successfull!")
//                         select();
//                         setEmp({ENo: 0, 
//                                          EName : "", EAddress: ""});
//                     }
//                     else
//                     {
//                         setMessage("Something went wrong!")
//                     }
//                 }
//         };
//         helper.open("POST","http://127.0.0.1:9999/emps");
//         helper.setRequestHeader("Content-Type", "application/json")
//         helper.send(JSON.stringify(emp));   

        
//     }
//     const edit=(ENo)=>{
//         debugger;
//         console.log("You need to find record with ENO = " + ENo + " from - ");

//         console.log(emps)

//         emps.map((empToEdit)=>{
//             if(empToEdit.ENo == ENo)
//             {
//                 setMessage("Record Found!!")
//                 var copyOfEmpToEditFromArray  =
//                    {...empToEdit} 
//                 setEmp(copyOfEmpToEditFromArray);
//                 return;
//             }
//         })
//     }
//     const update=()=>{
//         var helper = new XMLHttpRequest();
//         helper.onreadystatechange = ()=>{
//             if(helper.readyState == 4 &&
//                 helper.status == 200)
//                 {
//                     var responseReceived = 
//                         JSON.parse(helper.responseText);
//                     if(responseReceived.affectedRows!=undefined && responseReceived.affectedRows>0)
//                     {
//                         setMessage("Update Successfull!")
//                         select();
//                         setEmp({ENo: 0, 
//                                 EName : "", 
//                                 EAddress: ""});
//                     }
//                     else
//                     {
//                         this.setMessage("Something went wrong!")
//                     }
//                 }
//         };
//         helper.open("PUT","http://127.0.0.1:9999/emps/"+ emp.ENo);
//         helper.setRequestHeader("Content-Type", "application/json")
//         helper.send(JSON.stringify(emp));  
//     }
//     const OnTextChange=(args)=>{
//         var copyOfEmp= 
//                 {...emp};
//         copyOfEmp[args.target.name] = 
//                 args.target.value;
//         setEmp(copyOfEmp);
//     }
//     const onSearch=(args)=>{
//         debugger;
//         setSearchText(args.target.value);
//     }
   
//     console.log("Dashboard render is getting called..")
//     return (<>
//                     <Header></Header>
//                     <hr></hr>
//                     <div className='myTable'>
//                     <div className="form-group">
//                         <input type="number" className="form-control" 
//                         name="ENo" 
//                         placeholder="Enter ENo"
//                         value={emp.ENo}
//                         onChange={OnTextChange}/>
//                     </div>
//                     <div className="form-group">
//                         <input type="text" className="form-control" 
//                         name="EName" 
//                         placeholder="Enter EName"
//                         value={emp.EName}
//                         onChange={OnTextChange}/>
//                     </div>
//                     <div className="form-group">
//                         <input type="text" className="form-control" 
//                         name="EAddress" 
//                         placeholder="Enter EAddress"
//                         value={emp.EAddress}
//                         onChange={OnTextChange}/>
//                     </div>
//                     <button className="btn btn-primary"
//                              onClick={insert}>
//                         Add Record
//                     </button>

//                     <button  className="btn btn-success"
//                              style={{margin: 10 }}
//                              onClick={update}>
//                         Update Record
//                     </button>
//                     </div>
                        
//                     <hr></hr>
//                     <div className='mytable alert alert-warning'>
//                        <h1> {message}</h1>
//                     </div>
//                     <hr></hr>
//                     <div className='table-responsive'>
//                     <div style={{float: "right", marginRight: 300}}>
//                     Search:
//                         <input type='text' 
//                                value={searchText} 
//                                onChange={onSearch}/>
//                         <br></br>
//                     </div>
//                         <table className='table table-bordered myTable'>
//                            <tbody>
//                            {   
//                                emps.map((emp)=>{
//                                 if(searchText!="")
//                                 {
//                                     debugger;
//                                     if(emp.EAddress.toLowerCase().
//                                     includes(searchText.toLowerCase()))
//                                     {
//                                         return <tr key={emp.ENo}>
//                                         <td>
//                                             {emp.ENo}
//                                         </td>
//                                         <td>
//                                             {emp.EName}
//                                         </td>
//                                         <td>
//                                             {emp.EAddress}
//                                         </td>
//                     <td>
//                         <button className='btn btn-danger'
//                         onClick={()=>{
//                                       deleteEmp(emp.ENo)
//                                      }}>
//                         Delete
//                         </button>
//                     </td>
    
//                     <td>
//                         <button className='btn btn-warning'
//                         onClick={()=>{
//                                     edit(emp.ENo)
//                                 }}>
//                         Edit
//                         </button>
//                     </td>
//                                         </tr>
//                                     }
//                                     else
//                                     {
//                                         return;
//                                     }
                                    
//                                 }
//                                 {
//                                     return <tr key={emp.ENo}>
//                                     <td>
//                                         {emp.ENo}
//                                     </td>
//                                     <td>
//                                         {emp.EName}
//                                     </td>
//                                     <td>
//                                         {emp.EAddress}
//                                     </td>
//                 <td>
//                     <button className='btn btn-danger'
//                     onClick={()=>{
//                             deleteEmp(emp.ENo)
//                             }}>
//                     Delete
//                     </button>
//                 </td>

//                 <td>
//                     <button className='btn btn-warning'
//                     onClick={()=>{
//                                     edit(emp.ENo)
//                             }}>
//                     Edit
//                     </button>
//                 </td>
//                                     </tr>
//                                 }

                       
//                                 })
//                             }
//                            </tbody>
//                         </table>
//                         </div>
//                     <hr></hr>
//                     <Footer></Footer>
//             </>);
//     }

 
// export default Dashboard;