import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Dashboard extends Component 
{
    state = { users : []} 
    render() { 
        return (<table className='table table-bordered'>
                    {   
                        this.state.users.map((emp)=>{
                            return <tr>
                                    <td>
                                        {emp.first_name}
                                    </td>
                                    <td>
                                        {emp.last_name}
                                    </td>
                                    <td>
                                        <img 
                                            src={emp.avatar}/>
                                    </td>
                                   </tr>
                        })
                    }
                </table>);
    }
}
 
export default Dashboard;