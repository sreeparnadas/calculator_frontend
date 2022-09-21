import Header from './Header'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/add')
        }
    },[])
    async function login(){
        let item = {email,password}
        let result = await fetch("http://127.0.0.1:8000/api/login",{
            method: 'post',
            body: JSON.stringify(item),
            headers: {
                "content-type": "application/json",
                "Accept": "application/json"
            }
        });

        result = await result.json();
        localStorage.setItem('user-info',JSON.stringify(result))
        navigate('/add')
    }
    return (
        <div>
            <Header/>
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" className="form-control mt-3" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="btn btn-primary mt-5" onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login