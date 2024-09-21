const express = require('express');
const Menu = require('../models/menu')
const router = express.Router();

// Create (Yeni Ürün Ekle)
router.post('/', async (req, res) => {
    const { title, descriptionTitle, description, price, image,category} = req.body;
    try {
        const newMenu = new Menu({ title, descriptionTitle, description, price, image,category });
        await newMenu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        res.status(500).json({ message: 'Ürün eklenirken hata oluştu', error });
    }
});

// Read (Tüm Ürünleri Getir)
router.get('/', async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: 'Ürünler getirilirken hata oluştu', error });
    }
});

// Update (Ürünü Güncelle)
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, descriptionTitle, description, price, image ,category} = req.body;
    try {
        const updatedMenu = await Menu.findByIdAndUpdate(id, { title, descriptionTitle, description, price, image ,category}, { new: true });
        res.json(updatedMenu);
    } catch (error) {
        res.status(500).json({ message: 'Ürün güncellenirken hata oluştu', error });
    }
});

// Delete (Ürünü Sil)
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Menu.findByIdAndDelete(id);
        res.json({ message: 'Ürün başarıyla silindi' });
    } catch (error) {
        res.status(500).json({ message: 'Ürün silinirken hata oluştu', error });
    }
});
//Tüm Menüyü Sil
router.delete('/', async (req, res) => {
    try {
        await Menu.deleteMany();  // Tüm menü öğelerini sil
        res.status(204).send();  // Başarılı silme için 204 No Content döndür
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
