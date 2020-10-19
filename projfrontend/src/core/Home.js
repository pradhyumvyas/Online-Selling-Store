import React, {useState, useEffect} from 'react'
import {getProducts} from './helper/CoreApiCalls'
import Base from './Base';
import Card from './Card';
import img1 from '../images/offer1.jpeg'
import img2 from '../images/offer2.png'
import img3 from '../images/offer3.jpeg'




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




              <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active" data-interval="10000">
                    <img src={img1} class="d-block w-100" alt="..." height="170px" />
                  </div>
                  <div class="carousel-item" data-interval="2000">
                    <img src={img2} class="d-block w-100" alt="..." height="170px" />
                  </div>
                  <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..." height="170px" />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
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
