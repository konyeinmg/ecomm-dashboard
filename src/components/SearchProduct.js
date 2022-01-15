import Header from './Header';
import { useState } from 'react';
import {Table} from 'react-bootstrap';

function SearchProduct() {

    const [data, setData] = useState([]);

    const searchProduct = async (key) => {
        let result = await fetch('http://127.0.0.1:8000/api/search/' + key);
        result = await result.json();
        setData(result);
    }

    return (
        <div>
            <Header />
            <div className='col-sm-6 offset-sm-3'>
                <h1>Search Product</h1>
                <br />
                <input type='text' onChange={(e) => searchProduct(e.target.value)} className='form-control' placeholder='Search Product' /><br /><br />
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
            
                            </tr>
                        )
                    }
                </Table>
            </div>
        </div>
    )
}

export default SearchProduct;