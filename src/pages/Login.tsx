import { useState } from "react"
import {FcGoogle} from "react-icons/fc"


function Login() {

    const [gender ,setGender] = useState("");
    const [date ,setdate] = useState("");

  return (


    <div className="login">
        <main>
            <h1 className="heading">Login</h1>
            <div>
                <label> Gender </label>
                <select value={gender} onChange={(e)=> setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="">Male</option>
                    <option value="">Female </option>
                </select>
            </div>
            <div>
                <label> Date of Birth </label>
                <input type="date" value={date} onChange={(e)=>setdate(e.target.value)} />
            </div>

            <div>
                <p>Already Signed In Once </p>
                <button>  
                    <FcGoogle/> <span>Login with Google</span>
                </button>
            </div>
        </main>

    </div>
  )
}

export default Login