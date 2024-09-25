const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const MenuProduct = require('../models/menu'); // Model yolunu doğru şekilde güncelleyin

// Multer ayarları
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Yüklemelerin kaydedileceği klasör
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 100 * 1024 * 1024, // 100 MB limit
    },
});

// Create (Yeni ürün ekle)
router.post('/menu', upload.single('image'), async (req, res) => {
    try {
        const newProduct = new MenuProduct({
            title: req.body.title,
            description: req.body.description,
            descriptionTitle: req.body.descriptionTitle,
            category: req.body.category,
            price: req.body.price,
            image: req.file
                ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
                : `${req.protocol}://${req.get('host')}/uploads/logo.jpg` // Eğer resim yoksa varsayılan yolu koyun
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read (Tüm ürünleri listele)
router.get('/menu', async (req, res) => {
    try {
        const products = await MenuProduct.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read (Belirli bir ürünü getir)
router.get('/menu/:id', async (req, res) => {
    try {
        const product = await MenuProduct.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update (Ürünü güncelle)
router.put('/menu/:id', upload.single('image'), async (req, res) => {
    try {
        const updates = {
            title: req.body.title,
            description: req.body.description,
            descriptionTitle: req.body.descriptionTitle,
            category: req.body.category,
            price: req.body.price,
        };

        // Eğer yeni bir resim yüklenmişse, resmi güncelle
        if (req.file) {
            updates.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`; // Yeni resmin tam URL'si
        }


        const product = await MenuProduct.findByIdAndUpdate(req.params.id, updates, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// Delete (Ürünü sil)
router.delete('/menu/:id', async (req, res) => {
    try {
        const product = await MenuProduct.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
