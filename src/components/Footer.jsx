import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="w-full bg-emerald-800 text-emerald-100 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-16">
                <div className="flex flex-col items-center md:items-start">
                    <p className="font-bold text-lg mb-4">Sayfalar</p>
                    <nav className="flex flex-col font-light space-y-2">
                        <Link to="/" className="hover:text-emerald-300">Home</Link>
                        <Link to="/menu" className="hover:text-emerald-300">Menu</Link>
                        <Link to="/about" className="hover:text-emerald-300">About</Link>
                        <Link to="/contact" className="hover:text-emerald-300">Contact</Link>
                    </nav>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <p className="font-bold text-lg mb-4">İletişim</p>
                    <nav className="flex flex-col space-y-2">
                        <p className="font-light">Green N Bean Coffee</p>
                        <p className="font-bold">Adres:</p>
                        <p className="font-light text-center md:text-left">Rüstem Paşa, Dere Sk. 11/A, 77100 Yalova Merkez/Yalova</p>
                        <p className="font-bold mt-4">Telefon:</p>
                        <p className="font-light">0 (553) 814 77 26</p>
                    </nav>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <p className="font-bold text-lg mb-4">Sosyal Medyamız</p>
                    <nav className="flex flex-col items-center md:items-start space-y-2">
                        <Link className="flex items-center space-x-2"
                              to="https://www.instagram.com/greennbeancoffeee/">
                            <FaInstagram className="text-3xl hover:text-orange-500" />
                            <p className="font-medium">greennbeancoffeee</p>
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="w-full bg-emerald-900 text-emerald-100 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center px-4">
                <h1 className="font-bold text-center md:text-left">&copy; 2024 Green N Bean Coffee</h1>
                <Link to="https://rahmicantut.com/" className="flex items-center hover:text-orange-400">
                    <p className="mr-2">Tüm Haklar Saklıdır.</p>
                    <p className="font-light">coded by rahmicantut</p>
                </Link>
            </div>
        </>
    )
};

export default Footer;
