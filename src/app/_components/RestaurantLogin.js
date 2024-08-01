const RestaurantLogin=()=>{
    return(
        <>
       <h3> Login component</h3>
       <div>
        <div className="input-wrapper">
            <input type="text" placeholder="Enter email id" className="input-wrapper" />
        </div>
        <div className="input-wrapper">
            <input type="password"placeholder="Enter password" className="input-wrapper" />
        </div>
        <div className="input-wrapper">
            <button className="butoon">Login</button>
        </div>
       </div>

        </>
    )
}

export default RestaurantLogin;