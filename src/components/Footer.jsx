import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div id="footer" className="w-full bg-emerald-800 text-emerald-100 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-16">
                <div className="flex flex-col items-center md:items-start">
                    <p className="font-bold text-lg md:text-xl mb-4">Sayfalar</p>
                    <nav className="flex flex-col font-light space-y-2">
                        <Link onClick={()=>{
                            const mainDocument = document.querySelector('.main-container');
                            mainDocument.scrollIntoView({behavior:"smooth"})
                        }} to="/" className="hover:text-emerald-300 text-sm md:text-base">Menü</Link>
                        <Link to="/hakkimizda" className="hover:text-emerald-300 text-sm md:text-base">Hakkımızda</Link>
                        <Link className="hover:text-emerald-300 text-sm md:text-base">İletişim</Link>
                    </nav>
                </div>
                <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
                    <p className="font-bold text-lg md:text-xl mb-4">İletişim</p>
                    <nav className="flex flex-col space-y-2 text-center md:text-left">
                        <p className="font-light text-sm md:text-base">Green N Bean Coffee</p>
                        <p className="font-bold text-sm md:text-base">Adres:</p>
                        <p className="font-light text-sm md:text-base">Rüstem Paşa, Dere Sk. 11/A, 77100 Yalova Merkez/Yalova</p>
                        <p className="font-bold text-sm md:text-base mt-4">Telefon:</p>
                        <p className="font-light text-sm md:text-base">0 (553) 814 77 26</p>
                    </nav>
                </div>
                <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
                    <p className="font-bold text-lg md:text-xl mb-4">Sosyal Medyamız</p>
                    <nav className="flex flex-col items-center md:items-start space-y-2">
                        <Link className="flex items-center space-x-2"
                              to="https://www.instagram.com/greennbeancoffeee/">
                            <FaInstagram className="text-3xl hover:text-orange-500" />
                            <p className="font-medium text-sm md:text-base">greennbeancoffeee</p>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="w-full bg-emerald-900 text-emerald-100 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center px-4 text-center md:text-left">
                <h1 className="font-bold text-sm md:text-base">&copy; 2024 Green N Bean Coffee</h1>
                <Link to="https://rahmicantut.com/" className="flex items-center hover:text-orange-400 mt-2 md:mt-0">
                    <p className="mr-2 text-sm md:text-base">Tüm Haklar Saklıdır.</p>
                    <p className="font-light text-sm md:text-base">coded by rahmicantut</p>
                </Link>
            </div>
        </>
    )
};

export default Footer;
