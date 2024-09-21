import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Tatlilar = ()=>{
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
                        <MenuCards title="Dondurmalı Sıcak Kek" image={logo} descriptionTitle="Dondurmalı Sıcak Kek" price="₺140,00"/>
                        <MenuCards title="Esmeralda" image={logo} descriptionTitle="Esmeralda" price="₺120,00"/>
                        <MenuCards title="Muffin" image={logo} descriptionTitle="Muffin" price="₺60,00"/>
                        <MenuCards title="Tiramisu" image={logo} descriptionTitle="Tiramisu" price="₺140,00"/>
                        <MenuCards title="Magnolia" image={logo} descriptionTitle="Magnolia" description="Tatlı tek çeşit ürünle servis edilir ilave ürünler 20tl ücret ilavesi yapılır" price="₺140,00"/>
                        <MenuCards title="Suffle" image={logo} descriptionTitle="Suffle" description="Ürün sade olarak servis edilir,ilave dondurma istenirse 20tl olarak ücretlendirilir" price="₺140,00"/>
                        <MenuCards title="Fondü" image={logo} descriptionTitle="Fondü" price="₺140,00"/>
                        <MenuCards title="Mozaik Pasta" image={logo} descriptionTitle="Mozaik Pasta" price="₺140,00"/>
                        <MenuCards title="Cheesecake" image={logo} descriptionTitle="Cheesecake" description="Frambuaz,limon,Ruby çikolatası ve lotus seçenekleriyle" price="₺140,00"/>
                        <MenuCards title="San Sebastian" image={logo} descriptionTitle="San Sebastian" description="Çikolata sos eşliğinde servis edilir." price="₺150,00"/>
                        <MenuCards title="Fıstık Rüyası" image={logo} descriptionTitle="Fıstık Rüyası" price="₺150,00"/>
                        <MenuCards title="Kup Dondurma" image={logo} descriptionTitle="Fıstık Rüyası" price="₺80,00"/>
                        <MenuCards title="Banana Split" image={logo} descriptionTitle="Banana Split" price="₺140,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Tatlilar;