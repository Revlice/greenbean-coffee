import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../../public/images/logo.jpg';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Burgerlar = ()=>{
    const navigate = useNavigate();

    return(
        <>
            <div className="container  mx-auto py-8 px-4">
                <div className="flex flex-col items-center">
                    <Header/>
                    <hr className="w-full border-emerald-400 my-6"/>
                    <button
                        onClick={()=> navigate("/")}
                        className="flex items-center w-full justify-center py-2  bg-emerald-700 hover:bg-emerald-500 text-xl font-medium  transition-colors rounded-lg "><IoIosArrowBack className="ml-1.5 text-2xl"/>Geri (Kategoriler)</button>
                    <div
                        className="bg-emerald-400 gunebaslarken text-white p-8 mt-4 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <MenuCards title="Cheeseburger" image={logo} descriptionTitle="Cheeseburger" price="₺210,00"/>
                        <MenuCards title="Hamburger" image={logo} descriptionTitle="Hamburger" price="₺200,00"/>
                        <MenuCards title="Green Burger" image={logo} descriptionTitle="Green Burger" price="₺250,00"/>
                        <MenuCards title="Tavuk Burger" image={logo} descriptionTitle="Tavuk Burger" price="₺190,00"/>
                        <MenuCards title="Double Burger" image={logo} descriptionTitle="Double Burger" price="₺240,00"/>
                        <MenuCards title="Double Cheeseburger" image={logo} descriptionTitle="Double Cheeseburger" price="₺250,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Burgerlar;