import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
const Nav = () => {
   const auth = localStorage.getItem('user');
   const navigate = useNavigate();
   const logout = () =>{
      localStorage.clear();
   }


    return(
        <div>
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QSGGFGNxIulihxvCJ3TpsvQrjsV_0NEssQ&usqp=CAU" alt="" />
        { auth ? <ul className="nav-ul">
               <li><Link to = "/">Products</Link></li>
               <li><Link to = "/add">Add Product</Link></li>
               <li><Link to = "/update">Update Product</Link></li>
               {/* <li><Link to = "/profile">Profile</Link></li>   */}
               <li><Link onClick={logout} to = "/signup">Logout ({JSON.parse(auth).name})</Link></li>
                   
               
           </ul>
             :
            <ul className="nav-ul nav-right">
                    <li><Link to = "/signup" >Sign Up</Link></li>
                    <li><Link to = "/login">Log In</Link></li>
                    
            </ul>
        }
        </div>
    )
}


export default Nav;