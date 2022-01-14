import Header from './Header';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function ProductList() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        let result = await fetch('http://127.0.0.1:8000/api/list');
        result = await result.json();
        setData(result);
    }, []);
    console.log(data);

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
                    </tr>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img style={{ width: 100 }} src={"http://127.0.0.1:8000/" + item.file_path} /></td>
                            </tr>
                        )
                    }
                </Table>
            </div>
        </div>
    )
}

export default ProductList;