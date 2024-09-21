import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Tostlar = ()=>{
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
                        <MenuCards title="Green N Bean Tost" image={logo} descriptionTitle="Green N Bean Tost" price="₺160,00"/>
                        <MenuCards title="Çift Kaşarlı Tost" image={logo} descriptionTitle="Çift Kaşarlı Tost"  price="₺150,00"/>
                        <MenuCards title="Sucuklu Tost" image={logo} descriptionTitle="Sucuklu Tost" price="₺140,00"/>
                        <MenuCards title="Kaşarlı Tost" image={logo} descriptionTitle="Kaşarlı Tost" price="₺130,00"/>
                        <MenuCards title="Karışık Tost" image={logo} descriptionTitle="Karışık Tost" description="Kaşar peyniri,sucuk" price="₺150,00"/>
                        <MenuCards title="Beyaz Peynirli Tost" image={logo} descriptionTitle="Beyaz Peynirli Tost" price="₺150,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Tostlar;