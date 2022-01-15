import Header from './Header';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductList() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        getData();
    }, []);
    console.log(data);

    const deleteOperation = async (id) => {
        let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
            method: 'DELETE'
        });
        result = await result.json();
        getData();
    }

    const getData = async () => {
        let result = await fetch('http://127.0.0.1:8000/api/list');
        result = await result.json();
        setData(result);
    }

    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <div className="col-sm-8 offset-sm-2">
                <Table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Operations</th>
                    </tr>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img style={{ width: 100 }} src={"http://127.0.0.1:8000/" + item.file_path} /></td>
                                <td><span onClick={() => deleteOperation(item.id)} className='delete'>Delete</span></td>
                                <td>
                                    <Link to={"update/" + item.id}>
                                        <span className='update'>Update</span>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                </Table>
            </div>
        </div>
    )
}

export default ProductList;