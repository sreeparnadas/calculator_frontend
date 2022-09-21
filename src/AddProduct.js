import Header from './Header';
import {useState} from 'react';
import {Alert} from 'react-bootstrap';


function AddProduct(){

    const [name,setName] = useState("");
    const [file,setFile] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");

    const [show,setShow] = useState(false);

    async function addProduct(){

        const formData = new FormData();
        formData.append('name',name);
        formData.append('file',file);
        formData.append('price',price);
        formData.append('description',description);
        let result = await fetch("http://127.0.0.1:8000/api/addproduct",{
            method:"post",
            body: formData
        })
        result = result.json()
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000);
    }
    return (
        <div>
            <Header/>
            <h1>Add product</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Product name" className="form-control"/>
                <input type="file" onChange={(e)=>setFile(e.target.files[0])} placeholder="File" className="form-control mt-3"/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="Price" className="form-control mt-3"/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="Description" className="form-control mt-3"/>

                <button className="btn btn-primary mt-5" onClick={addProduct}>Add</button>

                {show && (<Alert variant="success mt-3">Data is saved sucessfully</Alert> ) }
            </div>
        </div>
    )
}

export default AddProduct