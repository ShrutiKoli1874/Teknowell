import React, { useState } from 'react'

function Table() {
   const[data,setData]=useState([]);

   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))

  return (
   <div>
    <h2>User Table</h2>
    <table border="1" cellPadding="10" cellSpacing="0">
        {/* <thead>
            <tr>
                <th>UserId</th>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
            </tr>
        </thead> */}
        {/* <tbody> */}
            {data.map(u =>(
                
                <ol key={u.id}>
                   
                    
                    <li> UserID:-{u.userId}</li>
                    <li>ID:-{u.id}</li>
                    <li>Title:-{u.title}</li>
                    <li>Body:-{u.body}</li>
                </ol>
                

            ))}
        {/* </tbody> */}

    </table>
   </div>
  );
}

export default Table