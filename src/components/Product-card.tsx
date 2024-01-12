import { FaPlus } from "react-icons/fa";

type ProducsProps = {
  productId:string;
  photo:string;
  name:string;
  price: number;
  stock: number;
  handler : ()=> void;
}

const server = "jsdfdsjdsfhjhj";

function ProductCard({productId, price , name ,stock, photo, handler}:ProducsProps) {
  return (
   <div className="productcard">
      {/* <img src={`${server}/${photo}`} alt={name} /> */}
      <img src={photo} alt={name} /> 
      <p>{name}</p>
      <span> ₹ {price}</span>
      <div>
          <button onClick={()=>handler()}><FaPlus/></button>
      </div>

   </div>
  )
}

export default ProductCard