import Navbar from "./components/navbar.component";
import { Routes, Route } from "react-router-dom";
import UserAuthForm from "./pages/userAuthForm.page";
const App = () => {
    return (
        <Routes>
            <Route path="/" element = {<Navbar />} >
                {/* Creating Routes Inside navbar to render navbar on the other pages 
                along with the Navbar component*/}
                <Route path="signin" element = {<UserAuthForm AuthType="sign-in" />} />
                <Route path="signup" element = {<UserAuthForm AuthType="sign-up" />} />
            </Route>
            
        </Routes>
    )
}

export default App;