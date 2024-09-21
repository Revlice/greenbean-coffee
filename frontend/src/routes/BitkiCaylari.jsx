import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BitkiCaylari = ()=>{
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
                        <MenuCards title="Demlik Çay" image={logo} descriptionTitle="Demlik Çay" description="4 Fincanlık" price="₺180,00"/>
                        <MenuCards title="Çay" image={logo} descriptionTitle="Çay" description="Klasik Türk Çayı"  price="₺25,00"/>
                        <MenuCards title="Fincan Çay" image={logo} descriptionTitle="Fincay Çay" price="₺40,00"/>
                        <MenuCards title="French Press Çaylar" image={logo} descriptionTitle="French Press Çaylar" description="Adaçayı-Elma Çayı-Kayısılı Form Çayı-Kış Çayı-Nane Limon-Yeşil Çay-Crıstmas Çayı-Ihlamur-Kırmızı Orman Meyveli-Kuşburnu-Mango-Papatya-Tropikal çay" price="₺100,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default BitkiCaylari;