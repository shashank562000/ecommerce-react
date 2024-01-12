import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc"
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
const cartItems =[
  {
    productId : "asddsdsa",
    photo : "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/8/i/j/-original-imagthcbgurdzwuc.jpeg?q=70",
    name  : "mac",
    price : 400,
    quantity : 4,
    stock : 10
  },
];
const subtotal =4000
const tex = (subtotal*0.18);
const shippingcharges = 200;
const discount = 200;
const total = (subtotal+tex+shippingcharges - discount)


function Cart() {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCoupanCode, setIsValidCoupanCode] = useState<boolean>(false);
  useEffect(()=>{
    const timeOutid = setTimeout(()=>{
      if(Math.random()>0.5) setIsValidCoupanCode(true);
      else setIsValidCoupanCode(false);
    },1000)
    return()=>{
      clearTimeout(timeOutid);
    }
  },[couponCode])

  return (

    <div className="cart">
      <main>  
        {

          cartItems.map ((i, idx )=>(<CartItem key = {idx} cartItem={i}/>))
        }



      </main>
      <aside>
        <p>Subtotal : ₹ {subtotal}</p>
        <p>ShippingCharges : ₹ {shippingcharges}</p>
        <p>tex : ₹ {tex}</p>
        <p>Discount  <em> - ₹ {discount}</em></p>
        <p>Subtotle : ₹ {subtotal}</p>
        <p>
          <b>Total ₹ {total}</b>
        </p>

        <input type="text" value={couponCode} onChange={(e)=>setCouponCode(e.target.value)} placeholder="coupon code"/>


        {
          couponCode && (
            isValidCoupanCode?<span className="green"> ₹ {discount} off using <code>{couponCode}</code> </span>
          : (<span className="red">Invalid code <VscError/> </span>)
        
          )}


          {
            cartItems.length>0 && <Link to = "/shipping">Checkout </Link>
          }
      </aside> 
    </div>
  )
}

export default Cart