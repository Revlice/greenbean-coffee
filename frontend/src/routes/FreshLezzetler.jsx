import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const FreshLezzetler = ()=>{
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
                        <MenuCards title="Cool Lime" image={logo} descriptionTitle="Cool Lime" description="Serinliğin Ferahlığın en lezzetli hali" price="₺100,00"/>
                        <MenuCards title="Bubble Tea" image={logo} descriptionTitle="Bubble Tea" description="İçinizi serinletecek vazgeçemeyeceğiniz GREEN N BEAN karışım" price="₺100,00"/>
                        <MenuCards title="Milkshake" image={logo} descriptionTitle="Milkshake" description="Çilekli,Çikolatalı,Vanilyalı,Muzlu" price="₺100,00"/>
                        <MenuCards title="Smoothie" image={logo} descriptionTitle="Smoothie" description="Muzlu,Çikolatalı,Çilekli" price="₺100,00"/>
                        <MenuCards title="Cici Bebe Smoothie" image={logo} descriptionTitle="Cici Bebe Smoothie"  price="₺120,00"/>
                        <MenuCards title="Frozen" image={logo} descriptionTitle="Frozen" description="Karpuz-Nane Limon-Kavun-Şeftali" price="₺100,00"/>
                        <MenuCards title="Green Bean Frozen" image={logo} descriptionTitle="Green Bean Frozen" price="₺100,00"/>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default FreshLezzetler;