'use client'
import{ useState } from "react"
import RestaurantLogin from "../_components/RestaurantLogin"
import RestaurantSignUp from "../_components/RestaurantSignUp"
import RestaurantHeader from "../_components/RestauantHeader"
import './style.css'
import RestaurantFooter from "../_components/RestauantFooter"
const Restaurant=()=>{
    const [Login,setLogin]= useState(true)
    return(
        <>
        <div className="container">
            <RestaurantHeader />
            <h1>Restaurant Login/signup page</h1>
        {
          Login? <RestaurantLogin />: <RestaurantSignUp />
        }

       <div>
       <button className="button-link" onClick={()=>setLogin(!Login)}>
            {Login?"Do nat have account? signUp":"Already have Account? Login"}
        </button>
       </div>
       </div>
       <RestaurantFooter />
        </>
    )
}

export default Restaurant;