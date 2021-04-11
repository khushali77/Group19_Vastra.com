import React from 'react';
import "./Admin.css";

const Admin = () => {

    const retailers = [{name:"Akash Goyal"},{name:"Khalii Great"},{name:"Praveen Bathla"},{name:"Harthik pandya"},{name:"Virat Kholi"}];


    return (
        <div className="admin container-fluid">
        <h1 className="admin-heading">Welcome to Admin Portal</h1>

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