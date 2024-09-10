import React, {useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const UpdateProduct = () => {


    let {id} = useParams();
    let prodNameRef = useRef(null);
    let prodPriceRef = useRef(null);
    let prodDescriptionRef = useRef(null);
    const navigate = useNavigate();
    console.log(id)


    async function getProduct() {
        try {
          const response = await axios.get(`https://localhost:7260/api/Products/${id}`);
          console.log(response.data);
            prodNameRef.current.value = response.data.productName;
            prodPriceRef.current.value = response.data.price;
            prodDescriptionRef.current.value = response.data.description;


        } catch (error) {
          console.error(error);
        }
      }

      useEffect(()=>{
        getProduct()
    
      },[])



      const upProd = ()=>{
        try{
            axios.put(`https://localhost:7260/api/Products?id=${id}`,
            {
                productName : prodNameRef.current.value,
                price : prodPriceRef.current.value,
                description: prodDescriptionRef.current.value
            } 
            , {
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              navigate('/')
              
        }
        catch(error)
        {
            console.error(error)
        }
      }








    return (
        <>
            <div className="container">
                <h1 className='text-center'>Update Product</h1>


                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={prodNameRef}/>
                      
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Product Price</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" ref={prodPriceRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" ref={prodDescriptionRef} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={upProd}>Update Product</button>
                </form>



            </div>
        </>
    )
}

export default UpdateProduct