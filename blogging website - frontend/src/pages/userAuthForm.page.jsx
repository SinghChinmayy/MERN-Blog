import AnimationWrapper from "../common/page-animation";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";
const UserAuthForm = ({AuthType})  => {
    return(
        <AnimationWrapper keyValue={ AuthType }>
                    <section className="h-cover flex items-center justify-center ">
            <form className="w-[80%] max-w-[400px]">
                {/* Greeting rendering otbo condition check */}
                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {AuthType == "sign-in" ? "Welcome Back" : "Hello There!"}
                </h1>
                {/* Rendering name placeholder only when condition is met */}
                {
                    AuthType != "sign-in" ?
                    <InputBox
                        name="fullname"
                        type="text"
                        placeholder="Full Name"
                        iconName="fi-rr-user"
                    />
                    : " " 
                }
                 <InputBox
                        name="email"
                        type="email"
                        placeholder="Email"
                        iconName="fi-rr-envelope"
                    />
                    <InputBox
                        name="password"
                        type="password"
                        placeholder="Password"
                        iconName="fi-rr-key"
                    />

                    <button
                    className="btn-dark center mt-14 " type="submit"
                    >
                        { AuthType.replace("-", " ") }
                    </button>

                    {/* separator */}
                    <div
                    className="relative  w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold  "
                    >
                        <hr className="w-[50%] "/>
                        <p>or</p>
                        <hr className="w-[50%]"/>
                    </div>



                    {/* Google auth button */}

                    <button className="btn-dark flex gap-4 width-[90%] items-center justify: center ">
                        {/* <i className="fi fi-brands-google  "></i> */}
                        <img src={googleIcon} alt="Google Icon"  className="w-5"/>
                        <h1>Continue with google</h1>
                    </button>
                    {

                        AuthType =="Signin" ?
                        ""
                        :""

                    }



                    {/* Toggle between signin and signup */}
                    {

                        AuthType == "sign-in" ?
                        <p className="text-dark-grey text-xl text-center mt-6 ">
                            Don't have an account?
                            <Link to="/signup" className="underline">
                                Sign-up here.   
                            </Link>
                        </p>
                        :
                        <p className="text-dark-grey text-xl text-center mt-6 ">
                            Already have an account?
                            <Link to="/signin" className="underline">
                                Sign-in here.   
                            </Link>
                        </p>

                    }
            </form>

        </section>
        </AnimationWrapper> 
    )
}
export default UserAuthForm ;