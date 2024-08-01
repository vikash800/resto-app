const RestaurantSignUp=()=>{
    return(
        <>
         <h3> SignUp component</h3>
       <div>
        <div className="input-wrapper">
            <input type="text" placeholder="Enter email id" className="input-field" />
        </div>
        <div className="input-wrapper">
            <input type="password"placeholder="Enter password" className="input-field" />
        </div>
        <div className="input-wrapper">
            <input type="password"placeholder="confirm password" className="input-field" />
        </div>
        <div className="input-wrapper">
            <input type="password"placeholder="Enter restaurant nme" className="input-field" />
        </div>
        <div className="input-wrapper">
            <input type="password"placeholder="Enter city" className="input-field" />
        </div>
        <div className="input-wrapper">
            <input type="password"placeholder="Enter full address" className="input-field" />
        </div>
        <div className="input-wrapper">
            <input type="password"placeholder="Enter contact No." className="input-field" />
        </div>
        <div className="input-wrapper">
            <button className="butoon">Sign Up</button>
        </div>
       </div>

        </>
    )
}

export default RestaurantSignUp;