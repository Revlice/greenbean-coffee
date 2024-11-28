import { useState, useEffect } from "react";
import axios from 'axios';
import MenuCards from '../components/MenuCards.jsx';
import logo from '../assets/images/logo.jpg';
import { FaArrowUp } from "react-icons/fa";

const Admin = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionTitle, setDescriptionTitle] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const fetchMenu = async () => {
        try {
            const response = await axios.get('https://greenbean-backend.onrender.com/api/menu');
            console.log(response.data)
            setMenuItems(response.data);
        } catch (error) {
            console.log("Veri çekerken bir hata oluştu", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('descriptionTitle', descriptionTitle);
        formData.append('category', category);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }

        try {
            if (isEditing) {
                await axios.put(`https://greenbean-backend.onrender.com/api/menu/${currentId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log("Ürün güncellendi");
            } else {
                await axios.post('https://greenbean-backend.onrender.com/api/menu', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log("Yeni ürün eklendi");
            }
            fetchMenu();
            resetForm();
        } catch (error) {
            console.log("Ürün eklerken veya güncellerken bir hata oluştu", error);
        }
    };

    const filteredMenuItems = menuItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setDescriptionTitle('');
        setCategory('');
        setImage(null);
        setPrice('');
        setIsEditing(false);
        setCurrentId('');
    };

    const handleEdit = (item) => {
        setTitle(item.title);
        setDescription(item.description);
        setDescriptionTitle(item.descriptionTitle);
        setCategory(item.category);
        setImage(item.image);
        setPrice(item.price);
        setIsEditing(true);
        setCurrentId(item._id);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div className="min-h-screen relative flex flex-col bg-gradient-to-b from-emerald-800 to-emerald-600 text-white">
            {/* Header with Logo */}
            <header className="w-full py-4 bg-emerald-700 shadow-lg fixed top-0 z-10 flex justify-between items-center px-6">
                <img src={logo} alt="Logo" className="w-20 h-20 object-cover rounded-full" />
                <h1 className="text-3xl font-bold">Admin Panel</h1>
            </header>

            <div className="flex flex-col items-center justify-center pt-24 px-4">
                <div className="bg-emerald-700 rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">{isEditing ? "Ürünü Güncelle" : "Yeni Ürün Ekle"}</h1>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Başlık"
                            className="mb-3 p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Açıklama Başlığı (Başlık ile aynı olmak zorunda)"
                            className="mb-3 p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            value={descriptionTitle}
                            onChange={(e) => setDescriptionTitle(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Ürün Açıklaması(Boş bırakılabilir)"
                            className="mb-3 p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="mb-3 p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Fiyat"
                            className="mb-3 p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        <h1 className="font-extrabold text-xl mb-2">Resim Seç</h1>
                        <input
                            type="file"
                            accept="image/*"
                            className="mb-4 p-3 text-black"
                            onChange={handleImageChange}
                        />
                        <button
                            className="w-full py-3 bg-emerald-400 text-xl font-semibold text-black hover:bg-emerald-500 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-emerald-300">
                            {isEditing ? "Güncelle" : "Gönder"}
                        </button>
                    </form>
                </div>

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Ürün Ara"
                    className="mb-3 p-3 w-full max-w-xl mt-4 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Menu Grid */}
                <div className="mt-12 w-full max-w-6xl">
                    <h1 className="font-extrabold text-3xl text-center mb-6">Mevcut Ürünlerin Tamamı</h1>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMenuItems.map(item => (
                            <li key={item._id} onClick={() => handleEdit(item)} className="cursor-pointer">
                                <MenuCards
                                    title={item.title}
                                    descriptionTitle={item.descriptionTitle}
                                    description={item.description}
                                    category={item.category}
                                    price={`₺${item.price}.00`}
                                    image={item.image ? item.image : logo}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Scroll to Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-4 right-4 text-black p-3 bg-emerald-300 rounded-full hover:bg-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <FaArrowUp className="text-3xl" />
                </button>
            </div>
        </div>
    );
};

export default Admin;
