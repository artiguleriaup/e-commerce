import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const navigate = useNavigate();
    useEffect(() => {

        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[]);

    const collectData = async () =>{
        let result = await fetch('http://localhost:5000/register',{
            method: "post",
            body: JSON.stringify({name,email,password}),
            headers:{
              "Content-Type":"application/json"
            }
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
        if(result){
          navigate('/');
        }

    }

  return (
    <div className='register'>
      <h1 className='heading'>Register</h1>
     
      <input className='inputbox'  type="text" value={name}  onChange={(e)=> setName(e.target.value)} placeholder='enter name' />
      <input className='inputbox' type="text"  value={email}  onChange={(e)=> setEmail(e.target.value)}  placeholder='enter email' />
      <input className='inputbox' type="password" value={password}  onChange={(e)=> setPassword(e.target.value)} placeholder='enter password' />
        <button onClick={collectData} className='buttonbox' type='button'>Sign Up</button>
    </div>
  )
}

export default SignUp
