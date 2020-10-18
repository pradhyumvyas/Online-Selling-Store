import React, {useState, useEffect} from 'react'
import {getProducts} from './helper/CoreApiCalls'
import Base from './Base';
import Card from './Card';
import img1 from '../images/offer1.jpg'
import img2 from '../images/offer2.jpg'
import img3 from '../images/offer3.jpg'




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




            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={img1} alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={img2} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={img3} alt="Third slide" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>




            <div className="cardSetting row">


                {products.map((product, index) => {
                    return(
                        <div key={index} className="col-md-2 col-sm-12 cardSetting">
                            <Card product={product} />
                        </div>
                    )
                })}
            </div>
        </Base>
    )
}
