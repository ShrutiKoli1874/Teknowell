import React from 'react'

function UserTable() {
    const users =[
        { id:1,name:'Shruti',age:21},
        { id:2,name:'Sakshi',age:20},
        { id:3,name:'Sonal',age:19},
    
    ];
  return (
   <div>
    <h2>User Table</h2>
    <table border="1" cellPadding="10">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user =>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>

            ))}
        </tbody>

    </table>
   </div>
  );
}

export default UserTable