import { useState } from "react";
export const Navbar = () => {

    const [dropLinks, setdropLinks] = useState(false)
    const [changeBarOne, setchangeBarOne] = useState(false)
    const [changeBarTwo, setchangeBarTwo] = useState(false)
    const [changeBarThree, setchangeBarThree] = useState(false)
    
  return (
    <div>
        <nav className="nav">
            <div className="logo">
                <img src="./src/images/logo2.png" alt="LOGO" />
            </div>
            <div className="links">
                <ul className={dropLinks ? 'active': ''}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="hamburger" 
                onClick={()=> {setdropLinks(!dropLinks); setchangeBarOne(!changeBarOne); setchangeBarTwo(!changeBarTwo); setchangeBarThree(!changeBarThree)}}>
                <span className={changeBarOne ? 'change-one': ''} id="bar-one"></span>
                <span className={changeBarTwo ? 'change-two': ''} id="bar-two"></span>
                <span className={changeBarThree ? 'change-three': ''} id="bar-three"></span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar