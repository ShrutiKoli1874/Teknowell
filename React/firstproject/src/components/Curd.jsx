import React, { useEffect, useState } from 'react';

function Curd() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(dt => {
                setData(dt);
                console.log(dt);
            })
            .catch(err => console.log(err));
    }

    function handleDelete(id) {
        fetch("https://jsonplaceholder.typicode.com/posts/${id}",
             {
            method:'DELETE'
        })
            .then(() => {
                alert('Data deleted successfully.');
                setData(prevData => prevData.filter(item => item.id !== id));
            })
            .catch(err => console.log(err));
        console.log(id);
    }

    return (
        <>
            <button onClick={getData}>Load Data</button>

            <table border={2}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Body</th>
                        <th>Title</th>
                        <th style={{ width: '15%' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0, 20).map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.body}</td>
                            <td>{user.title}</td>
                            <td>
                                <button style={{ margin: '5%' }}>Update</button>
                                <button style={{ margin: '5%' }} onClick={() => handleDelete(user.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Curd;