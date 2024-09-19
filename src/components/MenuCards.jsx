import logo from '../../public/images/logo2.png';

const MenuCards = ({ title, image,descriptionTitle,description,price }) => {
    return (
        <div className="w-full relative cursor-pointer h-auto border-4 border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 duration-300">
            {/* Image Container */}
            <div className="w-full h-48 sm:h-40 md:h-48 lg:h-56 overflow-hidden relative">
                {/* Main Image */}
                <img
                    className="w-full h-full object-cover"
                    src={image}
                    srcSet={`${image} 320w, ${image} 640w, ${image} 1280w`}
                    sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
                    alt="yemek_logo.png"
                />

                {/* Logo */}


                {/* Small Text (Description) */}
                {descriptionTitle  &&
                    <div className="absolute bottom-0 left-0 right-0  backdrop-brightness-75 text-white p-2 text-center">
                        <h3 className="text-sm font-semibold">{descriptionTitle}</h3>
                        <p className="text-xs">{description}</p>
                    </div>}
            </div>

            {/* Title */}
            <div className="p-4 text-center bg-gray-50">
                <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
                <h3 className="text-md font-bold text-gray-800">{price}</h3>
                <img
                    className="sm:w-12 md:w-10 w-14 lg:w-14 absolute bottom-0 left-0"
                    src={logo}
                    alt="greenbean_logo.jpeg"
                />
            </div>
        </div>
    );
};

export default MenuCards;
