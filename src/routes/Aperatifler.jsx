import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../../public/images/logo.jpg';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Aperatifler = ()=>{
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
                        <MenuCards title="Chedarlı Patates" image={logo} descriptionTitle="Chedarlı Patates" price="₺140,00"/>
                        <MenuCards title="Karışık Atıştırmalık" image={logo} descriptionTitle="Karışık Atıştırmalık" price="₺200,00"/>
                        <MenuCards title="Soğan Halkası" image={logo} descriptionTitle="Soğan Halkası" price="₺100,00"/>
                        <MenuCards title="Çıtır Tavuk Sepeti" image={logo} descriptionTitle="Çıtır Tavuk Sepeti" price="₺190,00"/>
                        <MenuCards title="Sigara Böreği" image={logo} descriptionTitle="Sigara Böreği" price="₺140,00"/>
                        <MenuCards title="Sosisli Börek" image={logo} descriptionTitle="Sosisli Börek" price="₺140,00"/>
                        <MenuCards title="Anne Dilim Patates Tabağı" image={logo} descriptionTitle="Anne Dilim Patates Tabağı" price="₺120,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Aperatifler;