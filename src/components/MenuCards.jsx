import logo from '../../public/images/logo2.png';
const MenuCards = ({ title, image }) => {
    return (
        <div className="w-full relative cursor-pointer h-auto border-4 border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 duration-300">
            <div className="w-full h-48 sm:h-40 md:h-48 lg:h-56 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={image}
                    srcSet={`${image} 320w, ${image} 640w, ${image} 1280w`} // Farklı çözünürlüklerdeki görseller
                    sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
                    alt="yemek_logo.png"
                />
                <img className="w-16 absolute inset-x-0" src={logo} alt="greenbean_logo.jpeg"/>
            </div>
            <div className="p-4 text-center bg-gray-50">
                <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
            </div>
        </div>
    );
};

export default MenuCards;
