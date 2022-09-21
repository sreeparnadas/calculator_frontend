import Header from './Header';
import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {Alert} from 'react-bootstrap';

function UpdateProduct(){
    const { productId } = useParams();
    const [data,setData] = useState([]);
    const [show,setShow] = useState(false);

    useEffect(()=>{
        getProductById(productId);
    })
    async function getProductById(id){
        let result = await fetch("http://127.0.0.1:8000/api/product/"+id);
        result = await result.json();
        setData(result);
    }
    function updateProduct(){

    }
    return (
        <div>
            <h1>Update product</h1>
            <div className="col-sm-6 offset-sm-3 mt-5">
                <input type="text"  defaultValue={data.name} className="form-control"/>
                <input type="text" defaultValue={data.price} className="form-control mt-3"/>
                <input type="text" defaultValue={data.description} className="form-control mt-3"/>
                <input type="file" defaultValue={data.file_path} className="form-control mt-3"/>
                <img width={100} src={"http://localhost:8000/" + data.file_path} alt="productimage" className='mt-3'/>

                <button className="btn btn-primary mt-5" onClick={updateProduct}>Update</button>

                {show && (<Alert variant="success mt-3">Product updated sucessfully</Alert> ) }
            </div>
        </div>
    )
}

export default UpdateProduct