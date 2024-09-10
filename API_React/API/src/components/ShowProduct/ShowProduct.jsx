import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const ShowProduct = () => {


    // Want to use async/await? Add the `async` keyword to your outer function/method.

    const [product,setProduct] = useState([]);
    const navigate = useNavigate();
    
  const deleteFunc = (id)=>{
    axios.delete(`https://localhost:7260/api/Products?id=${id}`)

    setProduct(product.filter(item => item.productId != id));
    console.log("filtered products",product.filter(item => item.productId != id))

  }

async function getProduct() {
    try {
      const response = await axios.get('https://localhost:7260/api/Products');
      console.log(response.data);
      setProduct(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getProduct()

  },[])

  const updateFunc = (id)=>{
    navigate(`/updateProduct/${id}`)
  }




  return (
    <>
    <div className="container">
    <div>ShowProduct</div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {
        product.map(item =>(
    
    <tr key={item.productId}>
      <th scope="row">{item.productId}</th>
      <td>{item.productName}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td><button className='btn btn-danger' onClick={()=>deleteFunc(item.productId)}>Delete</button></td>
      <td><button className='btn btn-warning' onClick={()=>updateFunc(item.productId)}>Update</button></td>
    </tr>
    ))
  }
     
  </tbody>
</table>


 </div>
    </>
  )
}

export default ShowProduct