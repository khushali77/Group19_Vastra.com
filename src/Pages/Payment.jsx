import { Button } from "react-bootstrap";
import React,{useState} from "react";
import PayPal from "../Components/PayPal";

function Payment(){

    const [checkout,setCheckout] = useState(false) 

    return(
        <div className="payment">
            {checkout ? (
                <PayPal/>
            ) : (
            <div className="paypage">
            <h1>Confirm Checkout?</h1>
            <Button variant="custom"
                onClick={()=>{
                setCheckout(true);
                localStorage.removeItem("cartlist");
            }}
            >
            Yes, proceed to Checkout
            </Button>
            </div>
            )}
        </div>
    );
}

export default Payment;