import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Sandvicler = ()=>{
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
                        <MenuCards title="Green Clup Sandviç" image={logo} descriptionTitle="Green Clup Sandviç" price="₺180,00"/>
                        <MenuCards title="Ton Balıklı Sandviç" image={logo} descriptionTitle="Ton Balıklı Sandviç"  price="₺160,00"/>
                        <MenuCards title="Etli Sıcak Sandviç" image={logo} descriptionTitle="Etli Sıcak Sandviç" price="₺200,00"/>
                        <MenuCards title="Jambonlu Sandviç" image={logo} descriptionTitle="Jambonlu Sandviç" price="₺160,00"/>
                        <MenuCards title="Klasik Yaz Sandviç" image={logo} descriptionTitle="Klasik Yaz Sandviç" price="₺160,00"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Sandvicler;