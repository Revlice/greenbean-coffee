import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../../public/images/logo.jpg';
import { FaLocationArrow } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const GuneBaslarken = ()=>{
    const navigate = useNavigate();

    return(
        <>
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col items-center">
                    <Header/>
                    <hr className="w-full border-emerald-400 my-6"/>
                    <button
                        onClick={()=> navigate("/")}
                        className="flex items-center px-4 py-2 border-2 border-emerald-400 hover:bg-emerald-400 hover:text-white text-xl font-medium  shadow-lg shadow-emerald-400 transition-colors rounded-lg ">Menü'ye dön<FaLocationArrow className="ml-1.5"/></button>
                    <div
                        className="bg-emerald-400 text-white p-8 mt-4 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <MenuCards title="Test" image={logo}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default GuneBaslarken;