import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Sıcakİcecekler = ()=>{
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
                        <MenuCards title="Beyaz Çikolata" image={logo} descriptionTitle="Beyaz Çikolata" price="₺120,00"/>
                        <MenuCards title="Bitter Çikolata" image={logo} descriptionTitle="Bitter Çikolata"  price="₺120,00"/>
                        <MenuCards title="Sıcak Çikolata" image={logo} descriptionTitle="Sıcak Çikolata" price="₺120,00"/>
                        <MenuCards title="Double Türk Kahvesi" image={logo} descriptionTitle="Double Türk Kahvesi" price="₺85,00"/>
                        <MenuCards title="Türk Kahvesi" image={logo} descriptionTitle="Türk Kahvesi" price="₺60,00"/>
                        <MenuCards title="Sütlü Türk Kahvesi" image={logo} descriptionTitle="Sütlü Türk Kahvesi" price="₺70,00"/>
                        <MenuCards title="Damla Sakızlı Türk Kahvesi" image={logo} descriptionTitle="Damla Sakızlı Türk Kahvesi" price="₺65,00"/>
                        <MenuCards title="Aromalı Sıcak Çikolata" image={logo} descriptionTitle="Aromalı Sıcak Çikolata" price="₺100,00"/>
                        <MenuCards title="Sıcak Beyaz Çikolata" image={logo} descriptionTitle="Sıcak Beyaz Çikolata" price="₺90,00"/>
                        <MenuCards title="Sütlü Nescafe" image={logo} descriptionTitle="Sütlü Nescafe" price="₺100,00"/>
                        <MenuCards title="Sıcak Çikolata" image={logo} descriptionTitle="Sıcak Çikolata" price="₺90,00"/>
                        <MenuCards title="Dibek Kahvesi" image={logo} descriptionTitle="Dibek Kahvesi" price="₺70,00"/>
                        <MenuCards title="Nescafe" image={logo} descriptionTitle="Nescafe" price="₺90,00"/>
                        <MenuCards title="Sahlep" image={logo} descriptionTitle="Sahlep" price="₺90,00"/>
                        <MenuCards title="Chai Tea Latte" image={logo} descriptionTitle="Chai Tea Latte" price="₺100,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Sıcakİcecekler;