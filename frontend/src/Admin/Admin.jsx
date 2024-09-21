import { useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [title, setTitle] = useState('');
    const [descriptionTitle, setDescriptionTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category,setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const deleteMenuItem = async () => {
        try {
            await fetch(`http://localhost:3000/api/menu`, {
                method: 'DELETE',
            });
            // Silme işleminden sonra menü öğelerini güncelle
        } catch (error) {
            console.error('Silme işlemi başarısız:', error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // Formun varsayılan davranışını engelle
        const newItem = { title, descriptionTitle, description, price, image,category };

        try {
            // Backend API'sine POST isteği gönder
            const response = await axios.post('http://localhost:3000/api/menu', newItem);
            console.log('Yeni Ürün Eklendi:', response.data);
            // Formu temizle
            setTitle('');
            setDescriptionTitle('');
            setDescription('');
            setCategory('');
            setPrice('');
            setImage('');
        } catch (error) {
            console.error('Ürün eklenirken hata oluştu:', error);
        }
    };

    return (
        <>
            <button type="submit" onClick={deleteMenuItem} className="bg-red-500 text-white py-2 px-4 rounded">Tüm Menüyü Sil</button>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
                <h1 className="text-2xl">Admin Page</h1>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ürün Adı"
                       required
                       className="border p-2 mb-2 w-full"/>
                <input type="text" value={descriptionTitle} onChange={(e) => setDescriptionTitle(e.target.value)}
                       placeholder="Açıklama Başlığı" className="border p-2 mb-2 w-full"/>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                       placeholder="Açıklama" className="border p-2 mb-2 w-full"/>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}
                       placeholder="Kategori" className="border p-2 mb-2 w-full"/>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Fiyat"
                       required
                       className="border p-2 mb-2 w-full"/>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Resim URL"
                       required
                       className="border p-2 mb-2 w-full"/>
                <button type="submit" className="bg-emerald-500 text-white py-2 px-4 rounded">Ürün Ekle</button>
            </form>
        </>
    );
};

export default Admin;
