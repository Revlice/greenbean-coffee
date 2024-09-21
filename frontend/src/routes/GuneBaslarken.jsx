import Header from "../components/Header.jsx";
import MenuCards from "../components/MenuCards.jsx";
import Footer from "../components/Footer.jsx";
import logo from '../assets/images/logo2.png';
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react"; // useEffect ve useState import et

const Deneme = () => {
    const navigate = useNavigate();
    const [menuItems, setMenuItems] = useState([]); // Menü öğelerini saklamak için state
    const [filteredItems, setFilteredItems] = useState([]); // Filtrelenmiş öğeleri saklamak için state

    const fetchMenu = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/menu");
            const data = await response.json();
            setMenuItems(data); // Tüm menü öğelerini state'e kaydet
        } catch (error) {
            console.log("Veri çekilemedi", error);
        }
    };

    const filterByCategory = (category) => {
        const filtered = menuItems.filter(item => item.category === category);
        setFilteredItems(filtered); // Filtrelenmiş öğeleri state'e kaydet
    };



    useEffect(() => {
        fetchMenu(); // Bileşen yüklendiğinde verileri çek
    }, []);

    useEffect(() => {
        filterByCategory('gunebaslarken'); // İstediğin kategoriye göre filtrele
    }, [menuItems]); // menuItems değiştiğinde filtreleme yap

    return (
        <>
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col items-center">
                    <Header />
                    <hr className="w-full border-emerald-400 my-6" />
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center w-full justify-center py-2 bg-emerald-700 hover:bg-emerald-500 text-xl font-medium transition-colors rounded-lg"
                    >
                        <IoIosArrowBack className="ml-1.5 text-2xl" /> Geri (Kategoriler)
                    </button>
                    <div className="bg-emerald-400 gunebaslarken text-white p-8 mt-4 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {filteredItems.map(item => (
                            <MenuCards
                                key={item._id} // Her öğeye benzersiz bir anahtar ver
                                title={item.title}
                                image={item.image || logo} // Resim yoksa varsayılan logo kullan
                                descriptionTitle={item.descriptionTitle}
                                description={item.description}
                                price={`₺${item.price.toFixed(2)}`} // Fiyatı biçimlendir
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Deneme;
