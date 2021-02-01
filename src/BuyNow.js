import React,{useState} from 'react';
import './BuyNow.css';
import img from './images.jpg';
import logo from './Student/user/logo.png';








export default function BuyNow(){
    const [price,setPrice] = useState(500);
    const [finalPrice,setFinalPrice] = useState(500);
    const [hasCoupon, setHasCoupon] = useState(false);
    const [couponCode,setCouponCode] =useState("");
    const [validCouponCode ,setValidCouponCode ] = useState("coupon100");
    const [valid , isValid] =useState(false);
    const [discount ,setDiscount] =useState(null);
    const [couponDesc , setCouponDesc] =useState("");

    const hasCouponClick =()=>{
        setHasCoupon(true);
    }
    const changeCouponCode = (e) =>{
        setCouponCode(e.target.value);
    }
    const validateCoupon = () =>{
        if(couponCode === validCouponCode){
            setCouponDesc("20% Discount");
            isValid(true);
            setDiscount( price * 0.2 );
            setFinalPrice(price - (price * 0.2) );
        }else{
            isValid(false);
            setFinalPrice(price);
        }
    }
     return(
         <div className="buyNow_container "> 

             <div className="buyNow_header p-3">
                  <div className="buyNow_header_back_btn"> <span className="leftArrow" > &larr; </span> BACK</div>
                  <div className="buyNow_header_logo"> <img src={logo} ></img> </div>
                  <div className="buyNow_header_secure_checkout">SECURE CHECKOUT</div>
             </div>

             <div className="buyNow_modal mt-5">
                <div class=" buyNow_card  ">

                    <div class=" buyNow_card_header py-3">
                        <div className="buyNow_card_header_left">Item Name</div>
                        <div className="buyNow_card_header_right">
                            <div>Item Price</div>
                            <div>Action</div>
                        </div>
                    </div>
                    <div class=" buyNow_card_body py-4">
                        <div className="buyNow_card_body_left">
                            <div> <img className="buyNow_card_body_img " src={img}></img> </div>
                            <div className="buyNow_card_body_desc">
                                <div className="buyNow_card_body_name">Heroic Coaching</div>
                                <div className="buyNow_card_body_details">May 12</div>
                            </div>
                        </div>
                        <div className="buyNow_card_body_right">
                            <div className="buyNow_card_body_price">₹ {price}</div>
                            <div className="buyNow_card_body_action">Remove</div>
                        </div>
                    </div>
                    <div class=" buyNow_card_footer pb-2">
                        <div className={hasCoupon ? "buyNow_card_footer_left" : "hideCoupon" }>
                            <div>
                                <input className="buyNow_card_footer_c_input" onChange={changeCouponCode} type="text" placeholder="Enter coupon code..."></input>
                            </div>
                            <div>
                                <input className="buyNow_card_footer_c_btn" onClick={validateCoupon} type="button" value="Apply Coupon Code"  ></input>                            </div>
                            </div>
                            <div className= {valid ?"couponDesc" : "dispNone" } > 
                                { valid ? couponDesc : "Invalid Coupon Code!"} 
                            </div>
                        <div className="total_price">
                            <div className="total_price_label">Total</div>
                            <div className= { valid ? "discountAmount" : "dispNone" }>
                                <div> ₹ {price} </div>
                                <div className="border_bottom pb-2">- ₹{discount}</div>                                
                            </div>
                            <div className="total_price_amt"> ₹{ finalPrice}</div>
                        </div>
                    </div>
                    <div className="payNow">
                        <input className="payNow_btn" type="button" value="Pay Now"></input>
                    </div>
                </div>
             </div>

             <div className="couponCode_Button_container my-4">
                <div className="couponCode_button p-3" onClick={hasCouponClick} >
                    Have a coupon code? Click to enter it.
                </div>
             </div>
        
         </div>       
     );
}