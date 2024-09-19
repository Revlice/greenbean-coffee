import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../../public/images/logo.jpg';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const AnaYemekler = ()=>{
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
                        <MenuCards title="Tavuk Sote" image={logo} descriptionTitle="Tavuk Sote" price="₺240,00"/>
                        <MenuCards title="Acı Soslu Tavuk" image={logo} descriptionTitle="Acı Soslu Tavuk" price="₺240,00"/>
                        <MenuCards title="Köri Soslu Tavuk" image={logo} descriptionTitle="Köri Soslu Tavuk" price="₺240,00"/>
                        <MenuCards title="Izgara Köfte" image={logo} descriptionTitle="Izgara Köfte" description="200 gr.kasap köfte,Pilav(tercihe göre Patates kızartması),Salata ile servis edilir" price="₺250,00"/>
                        <MenuCards title="Kaşarlı Izgara Köfte" image={logo} descriptionTitle="Kaşarlı Izgara Köfte" description="200 gr.kasap köfte,Pilav(tercihe göre Patates kızartması),Salata ile servis edilir" price="₺270,00"/>
                        <MenuCards title="Et Sote" image={logo} descriptionTitle="Et Sote" price="₺300,00"/>
                        <MenuCards title="Tavuklu Quasedılla" image={logo} descriptionTitle="Tavuklu Quasedılla" price="₺260,00"/>
                        <MenuCards title="Etli Quasedılla" image={logo} descriptionTitle="Etli Quasedılla" price="₺300,00"/>
                        <MenuCards title="Etli Süper Nacos" image={logo} descriptionTitle="Etli Süper Nacos" price="₺300,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default AnaYemekler;