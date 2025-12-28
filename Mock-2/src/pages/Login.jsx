import { useRef, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const emailRef=useRef(null);
    const navigate=useNavigate();
    useEffect(()=>{
        emailRef.current.focus();
    },[]);
    const handleLogin=()=>{
        if(email==="admin2gamil.com" && password ==="admin123"){
            alert("Login sucess");
            localStorage.setItem("isAuth","true");
            navigate("/admin");
        } else{
            alert("Wrong email or password")
        }
    };
    return(
        <div>
            <h2>Login</h2>
            <input ref={emailRef}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />
            <input type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)} />
        </div>
    );
}
export default Login;