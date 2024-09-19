import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../../public/images/logo.jpg';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Makarnalar = ()=>{
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
                        <MenuCards title="Penne Napolitene" image={logo} descriptionTitle="Penne Napolitene"  price="₺175,00"/>
                        <MenuCards title="Penne Bolonez" image={logo} descriptionTitle="Penne Bolonez"  price="₺200,00"/>
                        <MenuCards title="Yaz Makarnası" image={logo} descriptionTitle="Yaz Makarnası"  price="₺160,00"/>
                        <MenuCards title="Penne Arabiata" image={logo} descriptionTitle="Penne Arabiata"  price="₺175,00"/>
                        <MenuCards title="Chicken Penne Alfredo" image={logo} descriptionTitle="Chicken Penne Alfredo"  price="₺175,00"/>
                        <MenuCards title="Ton Balıklı Penne" image={logo} descriptionTitle="Ton Balıklı Penne"  price="₺175,00"/>
                        <MenuCards title="Köri Soslu Tavuklu Penne" image={logo} descriptionTitle="Köri Soslu Tavuklu Penne"  price="₺175,00"/>
                        <MenuCards title="Chicken Penne Pesto" image={logo} descriptionTitle="Chicken Penne Pesto"  price="₺175,00"/>
                        <MenuCards title="Penne Karides" image={logo} descriptionTitle="Penne Karides"  price="₺175,00"/>
                        <MenuCards title="Penne Steak" image={logo} descriptionTitle="Penne Steak"  price="₺200,00"/>
                        <MenuCards title="Ev Yapımı Mantı" image={logo} descriptionTitle="Ev Yapımı Mantı"  price="₺200,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Makarnalar;