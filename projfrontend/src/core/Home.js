import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'  
import {getProducts} from './helper/CoreApiCalls'
import Base from './Base';
import Card from './Card';
import img1 from '../images/offer1.jpg'
// import img2 from '../images/offer2.jpeg'
// import img3 from '../images/offer3.png'

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
        <Base title="" description="">


{/* 

TODO: (will be added)
1. Category will be added
2. Filter By Category
3. Product description in Another page
4. Category in another page
5. Redirect page from search bar 
6. Redirect from nav bar gateory
7. Responsive Pages
*/}

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


            <div className="cardSetting row">


                {products.map((product, index) => {
                    return(
                        <div key={index} className="col-md-3 col-sm-6 cardSetting">
                            <Card product={product} />
                        </div>
                    )
                })}
            </div>
        </Base>
    )
}
