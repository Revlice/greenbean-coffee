import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../../public/images/logo.jpg';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const GuneBaslarken = ()=>{
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
                        <MenuCards title="Serpme Kahvaltı" image={logo} descriptionTitle="Serpme Kahvaltı" description="Serpme Kahvaltı fiyatı 2 kişiliktir ilave servis asimlari 75.00TL'dir" price="₺500,00"/>
                        <MenuCards title="Günün Çorbası" image={logo} descriptionTitle="Günün Çorbası"  price="₺70,00"/>
                        <MenuCards title="Hızlı Kahvaltı Tabağı" image={logo} descriptionTitle="Hızlı Kahvaltı Tabağı"  price="₺175,00"/>
                        <MenuCards title="Kahvaltı Tabağı" image={logo} descriptionTitle="Kahvaltı Tabağı" description="TABAGIN YANINDA 1 BARDAK ÇAY ÜCRETSİZ İKRAM EDİLİR" price="₺250,00"/>
                        <MenuCards title="Menemen" image={logo} descriptionTitle="Menemen" price="₺120,00"/>
                        <MenuCards title="Omlet" image={logo} descriptionTitle="Omlet"  price="₺90,00"/>
                        <MenuCards title="Mıhlama" image={logo} descriptionTitle="Mıhlama"  price="₺150,00"/>
                        <MenuCards title="Kaşarlı Menemen" image={logo} descriptionTitle="Kaşarlı Menemen"  price="₺140,00"/>
                        <MenuCards title="Sucuklu Menemen" image={logo} descriptionTitle="Sucuklu Menemen"  price="₺140,00"/>
                        <MenuCards title="Sucuklu Yumurta" image={logo} descriptionTitle="Sucuklu Yumurta"  price="₺130,00"/>
                        <MenuCards title="Pişi Tabağı" image={logo} descriptionTitle="Pişi Tabağı"  price="₺120,00"/>
                        <MenuCards title="Peynirli Omlet" image={logo} descriptionTitle="Sucuklu Yumurta"  price="₺120,00"/>
                        <MenuCards title="Salçalı Sosis" image={logo} descriptionTitle="Salçalı Sosis"  price="₺100,00"/>
                        <MenuCards title="Sahanda Yumurta" image={logo} descriptionTitle="Sahanda Yumurta"  price="₺80,00"/>
                        <MenuCards title="Otlu Omlet" image={logo} descriptionTitle="Otlu Omlet"  price="₺100,00"/>
                        <MenuCards title="Patatesli Omlet" image={logo} descriptionTitle="Patatesli Omlet"  price="₺120,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default GuneBaslarken;