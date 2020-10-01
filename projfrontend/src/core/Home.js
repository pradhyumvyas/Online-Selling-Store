import React, {useState, useEffect} from 'react'
import {getProducts} from './helper/CoreApiCalls'
import Base from './Base';
import Card from './Card';


export default function Home() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)


    const loadAllProducts = () =>{
        getProducts()
        .then((data) =>{
            if(data.error){
                setError(data.error)
                console.log(error);
            } else{
                setProducts(data);
            }
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        loadAllProducts();
    }, []);

    return (
        <Base title="Home Page" description="Welcome to the Shopping Site">
            <div className="cardSetting row">
                {products.map((product, index) => {
                    return(
                        <div key={index} className="col-md-3 col-sm-12 cardSetting">
                            <Card product={product} />
                        </div>
                    )
                })}
            </div>
        </Base>
    )
}
