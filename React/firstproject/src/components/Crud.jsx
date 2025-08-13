import React, { useEffect, useState } from 'react';

function Crud() {
    const [data, setData] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');

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
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
             {
            method:'DELETE'
        })
            .then(() => {
                alert('Data deleted successfully.');
                setData(prevData => prevData.filter(item => item.id !== id));
            })
            .catch(err => console.log(err));
    }



    function handleEdit(user) {
        setEditId(user.id);
        setEditTitle(user.title);
        setEditBody(user.body);
    }

    function handleUpdate() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${editId}`,
             {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                title: editTitle,
                body: editBody,
            }),
        })
            .then(resp => resp.json())
            .then(updated => {
                alert('Data updated (mocked) successfully.');
                setData(prev =>
                    prev.map(item => (item.id === editId ? { ...item, title: editTitle, body: editBody } : item))
                );
                setEditId(null); // clear edit mode
                setEditTitle('');
                setEditBody('');
            })
            .catch(err => console.log(err));
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
                        <th style={{ width: '20%' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                                {editId === user.id ? (
                                    <input value={editBody} onChange={e => setEditBody(e.target.value)} />
                                ) : (
                                    user.body
                                )}
                            </td>
                            <td>
                                {editId === user.id ? (
                                    <input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                                ) : (
                                    user.title
                                )}
                            </td>
                            <td>
                                {editId === user.id ? (
                                    <>
                                        <button onClick={handleUpdate}>Save</button>
                                        <button onClick={() => setEditId(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(user)}>Update</button>
                                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Crud;