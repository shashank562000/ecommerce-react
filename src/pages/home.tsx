import { Link } from "react-router-dom"
import ProductCard from "../components/Product-card"


const Home = () => {
    const addToCartHandler=()=>{};

  return (
    <div className="home">
        <section>

        </section>

       <h1>Letest Products

       <Link to={"/serch"} className="findmore">More </Link>
       </h1>
       <main>
            <ProductCard productId="dfkjdfj" photo="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/8/i/j/-original-imagthcbgurdzwuc.jpeg?q=70" price={123} stock={232} name="leptop" handler={addToCartHandler}/>
       </main>
      
    </div>
  )
}

export default Home