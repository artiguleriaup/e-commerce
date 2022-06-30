import React, { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState(""); 
    const [error, setError] = useState(false);
    const addProduct = async () => {
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
       
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method: 'post',
            body: JSON.stringify({name, price, category, company, userId }),
            headers:{
                "Content-Type":"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            } 
        });
        result = await result.json();
        console.warn(result);
    }
    return(
        <div className='product'>
            <h1 className='heading'>Add Product</h1>
            <input type="text" placeholder='Enter Product Name' value={name} onChange={(e)=> setName(e.target.value)} className='inputbox'/>
            {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type="text" placeholder='Enter Product Price' value={price} onChange={(e) => setPrice(e.target.value)} className='inputbox' />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}
            <input type="text" placeholder='Enter Product Category' value={category} onChange={(e) => setCategory(e.target.value)} className='inputbox' />
            {error && !category && <span className='invalid-input'>Enter valid category</span>}
            <input type="text" placeholder='Enter Product Company' value={company} onChange={(e) => setCompany(e.target.value)} className='inputbox' />
            {error && !company && <span className='invalid-input'>Enter valid company</span>}
            {/* <input type="file" id="image" name="image" value=""  className='img-input' required /> */}
            <button onClick={addProduct} className='buttonbox' >Add Product</button>
        </div>
    )
}


export default AddProduct;