import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const Navbar = () => {
    return(

        // Logo JSX 
        <nav className="navbar">
            <Link to="/" className="flex-none w-10"> {/*tailwind React router dom to redirect page to home and when page is at home it will simplybe at home without reloading */}
                <img src={logo} className="w-full"/>
            </Link>

            {/* 
            *
            *
            Search Bar 
            *
            *
             */}
           
           <div className="absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey 
            py-4 px-[5vw]
            
            md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto  " >

            <input type="text"
                placeholder="Search"
                className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%]
                md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12" 
                
            /> 

                {/* Flat icon */}
                <i className="fi fi-rr-search absolute right-[10%]
                md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey "></i>
           </div>

           {/*Navbar Search in Medium to small screen*/}
           <div className="flex items-center gap-3 md:gap-6 ml-auto ">
                <button className="md:hidden bg-grey h-12 w-12 rounded-full 
                flex items-center justify-center" >
                    <i className="fi fi-rr-search text-xl"></i>
                </button>
           </div>
           
        </nav>
    )
}

export default Navbar;