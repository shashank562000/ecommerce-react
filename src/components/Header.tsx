import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const user ={ _id: "dfdfd", role :""};

function Header() {
    const [isOpen, setIsOpen] =useState<boolean>(false);

  return (
   <nav className="header">

    <Link to={'/'}>Home</Link>
    <Link to={'/search'}><FaSearch/> </Link>
    <Link to={'/cart'}><FaShoppingBag/> </Link>
    {
        user?._id? (
            <>
                <button onClick={()=>setIsOpen((prev)=>!prev)}>
                    <FaUser/>
                </button>
                <dialog open={isOpen}>
                    <div>
                        {user.role==="admin" &&(
                            <Link onClick={()=>setIsOpen(false)} to={"/admin/dashboard"}>Admin</Link>
                        ) }

                        <Link onClick={()=>setIsOpen(false)}  to ={"/orders"}>Orders</Link>

                        <button>
                            <FaSignOutAlt/>
                        </button>
                    </div>
                </dialog>
            </>
        ):  <Link onClick={()=>setIsOpen(false)}  to={'/login'}><FaSignInAlt/> </Link> 
    }


   </nav>
  )
}

export default Header