import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const SogukKahveler = ()=>{
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
                        <MenuCards title="Ice Americano" image={logo} descriptionTitle="Ice Americano" price="₺90,00"/>
                        <MenuCards title="Ice Latte" image={logo} descriptionTitle="Ice Latte" price="₺95,00"/>
                        <MenuCards title="Ice Mocha" image={logo} descriptionTitle="Ice Mocha" price="₺100,00"/>
                        <MenuCards title="Ice Chocolate" image={logo} descriptionTitle="Ice Chocolate"  description="Espresso, Beyaz Çikolata, Krema" price="₺100,00"/>
                        <MenuCards title="Aromalı Ice Latte" image={logo} descriptionTitle="Aromalı Ice Latte" description="Espresso,Çikolata,Vanilya,Krema" price="₺100,00"/>
                        <MenuCards title="Ice Caramel Mocha" image={logo} descriptionTitle="Ice Caramel Mocha" price="₺100,00"/>
                        <MenuCards title="Frappe" image={logo} descriptionTitle="Frappe" price="₺100,00"/>
                        <MenuCards title="Ice Cappucino" image={logo} descriptionTitle="Ice Cappucino" price="₺100,00"/>
                        <MenuCards title="Ice Mocha Latte" image={logo} descriptionTitle="Ice Mocha Latte" price="₺100,00"/>
                        <MenuCards title="Affogato" image={logo} descriptionTitle="Affogato" price="₺100,00"/>
                        <MenuCards title="Ice Chocolate Strawberry" image={logo} descriptionTitle="Ice Chocolate Strawberry" price="₺100,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default SogukKahveler;