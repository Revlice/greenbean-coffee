import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Sogukİcecekler = ()=>{
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
                        <MenuCards title="Sprite" image={logo} descriptionTitle="Sprite" price="₺60,00"/>
                        <MenuCards title="Coca-Cola" image={logo} descriptionTitle="Coca-Cola" price="₺60,00"/>
                        <MenuCards title="Coca-Cola Zero" image={logo} descriptionTitle="Coca-Cola Zero" price="₺60,00"/>
                        <MenuCards title="Fanta" image={logo} descriptionTitle="Fanta" price="₺60,00"/>
                        <MenuCards title="Ice Tea" image={logo} descriptionTitle="Ice Tea" description="Limon,Şeftali,Mango" price="₺60,00"/>
                        <MenuCards title="Churchill" image={logo} descriptionTitle="Churchill" price="₺70,00"/>
                        <MenuCards title="Sade Soda" image={logo} descriptionTitle="Sade Soda" price="₺50,00"/>
                        <MenuCards title="Meyveli Soda" image={logo} descriptionTitle="Meyveli Soda" description="Elma,Limon,Karpuz-Çilek,Ananas,Nar" price="₺55,00"/>
                        <MenuCards title="Red Bull" image={logo} descriptionTitle="Red Bull" price="₺95,00"/>
                        <MenuCards title="Su" image={logo} descriptionTitle="Su" price="₺25,00"/>
                        <MenuCards title="Meyve Suyu" image={logo} descriptionTitle="Meyve Suyu" description="Karışık,Vişne,Şeftali" price="₺60,00"/>
                        <MenuCards title="Ayran" image={logo} descriptionTitle="Ayran" price="₺40,00"/>
                        <MenuCards title="Naneli Ayran" image={logo} descriptionTitle="Naneli Ayran" price="₺50,00"/>
                        <MenuCards title="Süt" image={logo} descriptionTitle="Süt" description="Soğuk ya da sıcak ikram edilir" price="₺50,00"/>
                        <MenuCards title="Schweppes Mandalina" image={logo} descriptionTitle="Schweppes Mandalina" description="Soğuk ya da sıcak ikram edilir" price="₺60,00"/>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Sogukİcecekler;