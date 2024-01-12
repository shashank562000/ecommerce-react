import { useState } from "react";
import ProductCard from "../components/Product-card";

function Search() {

  const [search, setSearch] = useState("");
  const [short, setShort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler =()=>{};
  const isPrevPage = page>1;
  const isNextPage = page<4;


  return (
    <div className="product-search-page">
        <aside>
          <h2>Filter</h2>
          <div>
            <h4>Sort</h4>
            <select value={short} onChange={(e)=>setShort(e.target.value)}>

              <option value="">None</option>
              <option value="asc"> Price (Low to high)</option>
              <option value="dsc" >Price (High to Low)</option>
            </select>
          </div>

          <div>
              <h4>Max Price : {maxPrice || " "} </h4>
              <input type="range"  min={100} max={1000000} value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))}/>
          </div>
          <div>
              <h4>Category </h4>
              <select value={category} onChange={(e)=>setCategory(e.target.value)}>

                <option value="">All</option>
                <option value="">Sample1 </option>
                <option value="dsc" > Sample2</option>
              </select>
          </div>
        </aside>
        <main>
          <h1>Product</h1>
          <input type="text" placeholder="Search by name ...."  value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <div className="search-product-list">
              <ProductCard  
                productId="dfkjdfj" 
                photo="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/8/i/j/-original-imagthcbgurdzwuc.jpeg?q=70"
                price={123}
                stock={232} 
                name="leptop"
                handler={addToCartHandler}/>
          </div>
          <article>
            <button disabled={!isPrevPage} onClick={()=>setPage(prev=>prev-1)}>Prev</button>
            <span>
              {page} of 4
            </span>
            <button disabled={!isNextPage} onClick={()=>setPage(prev=>prev+1)}>Next</button>
          </article>

        </main>

    </div>
  )
}

export default Search