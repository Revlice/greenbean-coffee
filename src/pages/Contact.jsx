import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col items-center">
                    <Header/>
                    <hr className="w-full border-emerald-400 my-6"/>
                    <div className=" text-gray-800">
                        {/* Header Section */}
                        <div className=" text-black py-20 px-6 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
                            <p className="text-lg md:text-xl">Bize her zaman ulaşabilirsiniz! Aşağıdaki iletişim
                                bilgileri ve form ile bizimle iletişime geçin.</p>
                        </div>

                        {/* Contact Information Section */}
                        <div className="container mx-auto py-16 px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Address Section */}
                            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-8">
                                <FaMapMarkerAlt className="text-emerald-500 text-5xl mb-4"/>
                                <h2 className="text-3xl font-semibold mb-4">Adres</h2>
                                <p className="text-md text-gray-600">Rüstem Paşa, Dere Sk. 11/A, 77100 Yalova
                                    Merkez/Yalova</p>
                            </div>

                            {/* Phone Section */}
                            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-8">
                                <FaPhone className="text-emerald-500 text-5xl mb-4"/>
                                <h2 className="text-3xl font-semibold mb-4">Telefon</h2>
                                <p className="text-md text-gray-600">0 (553) 814 77 26</p>
                            </div>

                            {/* Instagram Section */}
                            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-8">
                                <FaInstagram className="text-emerald-500 text-5xl mb-4"/>
                                <h2 className="text-3xl font-semibold mb-4">Instagram</h2>
                                <a href="https://www.instagram.com/greennbeancoffeee/"
                                   className="text-md text-gray-600 hover:text-emerald-500">
                                    @greennbeancoffeee
                                </a>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div className="bg-emerald-700 text-white py-16">
                            <div className="container mx-auto px-6 md:px-12">
                                <h2 className="text-4xl font-semibold text-center mb-8">Bize Ulaşın</h2>
                                <form className="bg-white text-gray-800 shadow-lg rounded-lg p-8 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input type="text" placeholder="Adınız"
                                               className="p-4 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"/>
                                        <input type="email" placeholder="E-posta"
                                               className="p-4 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"/>
                                    </div>
                                    <textarea placeholder="Mesajınız" rows="5"
                                              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"></textarea>
                                    <button type="submit"
                                            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600">Gönder
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="w-full h-64 md:h-96 bg-gray-200">
                            {/* Harita entegrasyonu buraya eklenecek */}
                            <iframe
                                title="Green N Bean Harita"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.8073404852934!2d29.277039716060085!3d40.6579367793371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf731dcbd873%3A0x41823f0a999058ac!2sDere%20Sk.%2C%2077100%20Yalova%20Merkez%2FYalova!5e0!3m2!1str!2str!4v1695159009185!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                </div>
            </div>
        </div>
    <Footer/>
</>


)
    ;
};

export default Contact;
