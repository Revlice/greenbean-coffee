import { useState } from "react"; // React'ten useState'i alıyoruz.

const MenuCards = ({ title, image, descriptionTitle, description, price }) => {
    // Modal açık mı kapalı mı bunu tutacak state
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Modal'ı açan fonksiyon
    const openModal = () => setIsModalOpen(true);

    // Modal'ı kapatan fonksiyon
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {/* Ana kart (ürün) tasarımı */}
            <div
                onClick={openModal} // Kartın üzerine tıklayınca modal'ı açıyoruz
                className="w-full cursor-pointer relative h-auto border-4 border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 duration-300"
            >
                {/* Resim Konteyneri */}
                <div className="w-full h-48 sm:h-40 md:h-48 lg:h-56 overflow-hidden relative">
                    {/* Ürünün ana resmi */}
                    <img
                        className="w-full h-full object-cover"
                        src={image}
                        alt={descriptionTitle} // Resim alt etiketi
                    />
                    {/* Resmin altındaki yazılar */}
                    {descriptionTitle && (
                        <div className="absolute bottom-0 left-0 right-0 backdrop-brightness-75 text-white p-2 text-center">
                            <h3 className="text-sm font-semibold">{descriptionTitle}</h3>
                            <p className="text-xs">{description}</p>
                        </div>
                    )}
                </div>

                {/* Ürün adı ve fiyatı */}
                <div className="p-4 text-center bg-gray-50">
                    <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
                    <h3 className="text-md font-bold text-gray-800">{price}</h3>
                </div>
            </div>

            {/* Modal kısmı */}
            {isModalOpen && ( // Eğer modal state'i açıksa modal'ı göster
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center text-black justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        {/* Başlık ve kapatma butonu */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">{title} - {price}</h2>
                            <button onClick={closeModal} className="text-gray-500 text-2xl">&times;</button>
                        </div>
                        {/* Modal içindeki ürün resmi */}
                        <img src={image} alt={title} className="w-full h-64 object-cover my-4" />

                        <p className="text-lg font-bold">{descriptionTitle}</p>
                        <p className="text-md font-medium">{description}</p>
                        <button onClick={closeModal} className="mt-4 w-full py-2 bg-gray-800 text-white rounded">Kapat</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuCards;
