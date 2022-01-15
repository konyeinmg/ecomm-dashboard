import Header from './Header';
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

function UpdateProduct(props){
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    let params = useParams();
    let navigate = useNavigate();

    useEffect(async () => {
        let result = await fetch('http://127.0.0.1:8000/api/getproduct/'+params.id);
        result = await result.json();
        setData(result);
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
        setFile(result.file_path);
    }, [])

    const updateProduct = async (id) => {
        const formData = new FormData;
        formData.append('file', file);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        let result = await fetch('http://127.0.0.1:8000/api/updateproduct/'+id, {
            method: 'POSt',
            body: formData
        });
        alert('Data has been updated');
        navigate('/');
    }

    return(
        <div>
            <Header />
            <h1>Update Product</h1>
            <input type='text' defaultValue={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
            <input type='text' defaultValue={price} onChange={(e) => setPrice(e.target.value)} /> <br /> <br />
            <input type='text' defaultValue={description} onChange={(e) => setDescription(e.target.value)} /> <br /> <br />
            <input type='file' defaultValue={file} onChange={(e) => setFile(e.target.files[0])} /> <br /> <br />
            <img style={{width: 100}} src={'http://127.0.0.1:8000/'+data.file_path} /><br /> <br />
            <button onClick={() => updateProduct(params.id)}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;