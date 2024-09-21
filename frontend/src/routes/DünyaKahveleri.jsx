import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const DünyaKahveleri = ()=>{
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
                        <MenuCards title="Aromalı Filtre Kahve" image={logo} descriptionTitle="Aromalı Filtre Kahve" price="₺110,00"/>
                        <MenuCards title="Kış Kahvesi" image={logo} descriptionTitle="Kış Kahvesi" price="₺110,00"/>
                        <MenuCards title="Macchiato" image={logo} descriptionTitle="Macchiato" price="₺100,00"/>
                        <MenuCards title="Caramel Macchiato" image={logo} descriptionTitle="Caramel Macchiato" price="₺110,00"/>
                        <MenuCards title="ChocoLocco" image={logo} descriptionTitle="ChocoLocco" price="₺100,00"/>
                        <MenuCards title="Americano" image={logo} descriptionTitle="Americano" price="₺80,00"/>
                        <MenuCards title="Latte" image={logo} descriptionTitle="Latte" price="₺90,00"/>
                        <MenuCards title="Cappuccino" image={logo} descriptionTitle="Cappuccino" price="₺100,00"/>
                        <MenuCards title="Mocha" image={logo} descriptionTitle="Mocha" price="₺100,00"/>
                        <MenuCards title="White Chocolate Mocha" image={logo} descriptionTitle="White Chocolate Mocha" price="₺100,00"/>
                        <MenuCards title="Choco Surpise" image={logo} descriptionTitle="Choco Surpise" description="Espresso,Çikolata,Böğürtlen" price="₺100,00"/>
                        <MenuCards title="Toffee Nut Latte" image={logo} descriptionTitle="White Chocolate Mocha" price="₺100,00"/>
                        <MenuCards title="Sweet Dreams" image={logo} descriptionTitle="Sweet Dreams" price="₺100,00"/>
                        <MenuCards title="Cortado" image={logo} descriptionTitle="Cortado" price="₺100,00"/>
                        <MenuCards title="Filtre Kahve" image={logo} descriptionTitle="Filtre Kahve" price="₺100,00"/>
                        <MenuCards title="Double Espresso" image={logo} descriptionTitle="Cortado" price="₺80,00"/>
                        <MenuCards title="Aromalı Latte" image={logo} descriptionTitle="Aromalı Latte" price="₺100,00"/>
                        <MenuCards title="Flat White" image={logo} descriptionTitle="Flat White" price="₺100,00"/>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default DünyaKahveleri;