import React, {useState} from 'react'
import ImageHelper from './helper/ImageHelper'
import {Redirect} from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/CartHelper';
import { isAuthenticated } from '../auth/helper';


const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false,
    reload = undefined,
    setReload = f =>f,
    // function(f){retuirn f}
}) => {

    const [redirect, setRedirect] = useState(false)

    const cardTitle = product ? product.name : "A Photo"
    const cardDescription = product ? product.description : "A default description"
    const cardPrice = product ? product.price : "A default price"

    const addToCart = () =>{
        if(isAuthenticated()){
            addItemToCart(product, () => setRedirect(true))
            console.log("Added To Cart");
        } else{
            //  TODO: get Redirect to login page 
            console.log("Login Please !");
        }
    }

    const getRedirect = (redirec) =>{
        if(redirect){
            return <Redirect to="/" />
        }
    }

    const showAddToCart = addToCart =>{
        return(
            addtoCart && (
                <button type="" onClick={ addToCart } 
                    className="btn btn-block btn-outline-success mt-2 mb-2">
                    Add To Cart
                </button>
            )
        )
    }

    const showRemovefromCart = removeFromCart =>{
        return(
            removeFromCart && (
                <button type="" className="btn btn-block btn-outline-danger mt-2 mb-2"
                onClick={() => {
                        // TODO Handle this cart
                        removeItemFromCart(product.id);
                        setReload(!reload)
                    console.log("Product Remove from cart");
                }}>
                    Remove From Cart
                </button>
            )
        )
    }

    return (
        <div className="row">
            <div className="cardDesign">
                <div className="card text-white bg-dark border border-info"> 
                    <div className="card-header lead">{cardTitle}</div>

                    <div className="card-body">
                        {getRedirect(redirect)}
                        <ImageHelper product={product} />


                        <p className="lead bg-success font-weight-normal text-wrap">
                            {product.description }
                        </p>

                        <p className="btn btn-success rounded btn-sm px-4">$ {cardPrice} </p>
                        <div className="row">
                            <div className="col-12">
                            {showAddToCart(addToCart)}

                            </div>
                            <div className="col-12">
                                {showRemovefromCart(removeFromCart)}

                            </div>
                        </div>
                    </div>
                </div>            
            </div>        
        </div>
    )
}


export default Card