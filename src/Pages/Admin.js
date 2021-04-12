import React from 'react';
import "../Css/Admin.css";

const Admin = () => {

    const retailers = [{name:"json"},{name:"sachin"},{name:"Praveen pandya"},{name:"Hardik pandya"},{name:"Virat Kholi"}];


    return (
        <div className="admin container-fluid">
         <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Retailer Id</th>
                    <th scope="col">Name of the Retailer</th>
                    <th scope="col">View Profile</th>
                    <th scope="col">Delete Profile</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            retailers.map((user,index)=>(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>
                                        <button class=" mr-2 btn button-admin ">View</button>
                                    </td>

                                    <td>
                                        <button class="mr-2 btn button-admin">Delete</button>
                                    </td>
                                </tr>
                            ))
                      }
                </tbody>
            </table>
        </div>
    )
}

export default Admin;