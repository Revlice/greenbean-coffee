import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaSeedling, FaHandshake, FaLightbulb } from 'react-icons/fa';
import logo from '/public/images/logo2.png';

const About = () => {
    return (
        <>
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col items-center">
                    <Header/>
                    <hr className="w-full border-emerald-400 my-6"/>
                    <div className="text-gray-800">
                        {/* Header Section */}
                        <div className=" text-black items-center flex justify-center flex-col py-20 px-6 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
                            <img src={logo} className="w-44"/>
                            <p className="text-lg md:text-xl">Kahvemizden aldığınız keyif, bizim en büyük motivasyon
                                kaynağımız.</p>
                        </div>

                        {/* Vision & Mission Section */}
                        <div
                            className="container bg-emerald-700 mx-auto py-16 px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Vizyon Section */}
                            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-8">
                                <FaLightbulb className="text-emerald-500 text-5xl mb-4"/>
                                <h2 className="text-3xl font-semibold mb-4">Vizyonumuz</h2>
                                <p className="text-md text-gray-600">
                                    Green N Bean olarak, yalnızca bir kahveci değil, aynı zamanda bir yaşam tarzı
                                    yaratmayı
                                    amaçlıyoruz.
                                    Misafirlerimize en iyi deneyimi sunmak ve topluma faydalı projelerle katkıda
                                    bulunmak
                                    vizyonumuzun bir parçasıdır.
                                </p>
                            </div>

                            {/* Misyon Section */}
                            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-8">
                                <FaHandshake className="text-emerald-500 text-5xl mb-4"/>
                                <h2 className="text-3xl font-semibold mb-4">Misyonumuz</h2>
                                <p className="text-md text-gray-600">
                                    Kahve severler için en taze ve kaliteli ürünleri sunmak, doğaya duyarlı olmak ve
                                    sürdürülebilir bir işletme yaratmak misyonumuzdur.
                                    Her yudumda kalite ve tutkuyu hissedin.
                                </p>
                            </div>
                        </div>

                        {/* Values Section */}
                        <div className=" text-black py-16">
                            <div className="container mx-auto text-center px-6 md:px-12">
                                <h2 className="text-4xl font-semibold mb-8">Değerlerimiz</h2>
                                <p className="text-lg md:text-xl mb-6">
                                    Yaptığımız her şeyde şeffaflık, sürdürülebilirlik ve müşteri memnuniyetini ön planda
                                    tutuyoruz.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                                        <FaSeedling className="text-emerald-500 text-5xl mb-4 mx-auto"/>
                                        <h3 className="text-2xl font-semibold mb-2">Doğaya Saygı</h3>
                                        <p>Çevre dostu malzemeler ve sürdürülebilir kahve üretimi ile dünyayı daha yeşil
                                            tutmaya
                                            çalışıyoruz.</p>
                                    </div>
                                    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                                        <FaHandshake className="text-emerald-500 text-5xl mb-4 mx-auto"/>
                                        <h3 className="text-2xl font-semibold mb-2">Topluma Destek</h3>
                                        <p>Topluma değer katacak projelerde yer alıyor ve sosyal sorumluluğu
                                            önemsiyoruz.</p>
                                    </div>
                                    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                                        <FaLightbulb className="text-emerald-500 text-5xl mb-4 mx-auto"/>
                                        <h3 className="text-2xl font-semibold mb-2">Yenilikçilik</h3>
                                        <p>Sürekli kendimizi geliştiriyor ve her geçen gün daha iyi hizmet sunmayı
                                            amaçlıyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>


    );
};

export default About;
