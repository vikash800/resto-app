import { useState } from "react";

const RestaurantSignUp=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[c_password,setc_password]=useState('');
    const[name,setName]=useState('');
    const[city,setCity]=useState('');
    const[address,setAddress]=useState('');
    const[contact,setContact]=useState('');

    const handleSignup=async ()=>{
        console.log(email,password,c_password,name,city,address,contact);
        let result = await fetch("http://localhost:3000/api/restaurant",{
            method:"POST",
            body:JSON.stringify({email,password,name,city,address,contact})
        
        })

        result = await result.json();
        console.log (result);
    }

    return(
        <>
         <h3> SignUp</h3>
       <div>
        <div className="input-wrapper">
            <input type="text" placeholder="Enter Email Id" className="input-field"
             value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <div className="input-wrapper">
            <input type="text"placeholder="Enter Password" className="input-field"
            value={password} onChange={(event)=>setPassword(event.target.value)}/> 
        </div>
        <div className="input-wrapper">
            <input type="text"placeholder="Confirm Password" className="input-field"
            value={c_password} onChange={(event)=>setc_password(event.target.value)}/> 
        </div>
        <div className="input-wrapper">
            <input type="text"placeholder="Enter Restaurant name" className="input-field"
            value={name} onChange={(event)=>setName(event.target.value)}/> 
        </div>
        <div className="input-wrapper">
            <input type="text"placeholder="Enter City" className="input-field"
            value={city} onChange={(event)=>setCity(event.target.value)}/>
        </div>
        <div className="input-wrapper">
            <input type="text"placeholder="Enter Full Address" className="input-field" 
            value={address} onChange={(event)=>setAddress(event.target.value)}/>
        </div>
        <div className="input-wrapper">
            <input type="text"placeholder="Enter Contact No." className="input-field" 
            value={contact} onChange={(event)=>setContact(event.target.value)}/>
        </div>


        <div className="input-wrapper">
            <button className="butoon" onClick={handleSignup}>Sign Up</button>
        </div>
       </div>

        </>
    )
}

export default RestaurantSignUp;