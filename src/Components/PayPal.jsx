import React, { useEffect, useRef } from "react";

export default function PayPal(){

    const paypal = useRef()
    const total = localStorage.getItem("total")

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
    },[])


    return(
        <div className="paypal">
            <div className="paypalb" ref={paypal}></div>
        </div>
    );
}