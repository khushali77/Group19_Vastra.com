import React, { useEffect,useState, useRef } from "react";

export default function PayPal(){

    const [total,setTotal] = useState(localStorage.getItem("total")); 
    const paypal = useRef()

    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units:[{
                        description:"Your order",
                        amount:{
                            currency_code:"USD",
                            value:total,
                        }
                    }]
                })
            },
            onApprove: async (data,actions) =>{
                const order = await actions.order.capture()
                console.log(order);
            },
            onError: (err)=>{
                console.log(err)
            }
        }).render(paypal.current)
    },[total])


    return(
        <div className="paypal">
            <div className="paypalb" ref={paypal}></div>
        </div>
    );
}