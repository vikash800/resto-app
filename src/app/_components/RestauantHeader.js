import Link from 'next/link'
const RestaurantHeader=()=>{
    return(
        <div className='header-wrapper'>
            <div className="logo">
                <img style={{width:100}} src="c:\Users\vy331\Downloads\pexels-norma-mortenson-4392030.jpg" />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Login/signUp</Link>
                </li>
                <li>
                    <Link href="/">Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default RestaurantHeader;
