import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import {useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';
import {useEffect, useState} from "react";


const SicakIcecekler = ()=>{
    const navigate = useNavigate();
    const [menuItems,setMenuItems] = useState([]);


    const fetchMenu = async () => {
        try {
            const response = await axios.get('https://greenbean-backend.onrender.com/api/menu');
            console.log("Fetched menu items:", response.data);

            // "gunebaslarken" kategorisindeki öğeleri filtreleme
            const filteredItems = response.data.filter(item => item.category === 'bitkicaylari');

            // Filtrelenmiş öğeleri duruma kaydetme
            setMenuItems(filteredItems);
        } catch (error) {
            console.log("Veri çekerken bir hata oluştu", error);
        }
    };
    useEffect(() => {
        fetchMenu(); // Bileşen yüklendiğinde veriyi çek
    }, []);

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
                        {menuItems.map(item => (
                            <MenuCards key={item._id}
                                       title={item.title}
                                       descriptionTitle={item.descriptionTitle}
                                       description={item.description}
                                       category={item.category}
                                       price={`₺${item.price}.00`}
                                       image={item.image ? item.image : logo}
                            />
                        ))}
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
};

export default SicakIcecekler;
