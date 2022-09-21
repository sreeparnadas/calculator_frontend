import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';


function Register(){

    useEffect(()=> {
        if(localStorage.getItem('user-info')){
            navigate('/add')
        }
    },[])
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    async function signUp(){
        let item = {name,email,password}
        //console.warn(item)

        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method:'post',
            body: JSON.stringify(item),
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json "
            }
        })

        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate('/add')
    }

    return (
        <>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1>Register Page</h1>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name"></input>

                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mt-2" placeholder="Email"></input>
                
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mt-2" placeholder="Password"></input>

                <button className="btn btn-primary mt-5" onClick={signUp}>Sign Up</button>
            </div>
        </>
    )
}

export default Register