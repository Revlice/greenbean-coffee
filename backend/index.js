const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const menuRoutes = require('./routes/menu'); // Menu route import

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL'si
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // İzin verilen HTTP yöntemleri
    credentials: true // Gerekirse, kimlik doğrulama için
}));
app.use(express.json({ limit: '100mb' })); // 100 MB
app.use(express.urlencoded({ limit: '100mb', extended: true }));
// API Route
app.use('/api', menuRoutes);
app.use('/uploads', express.static('uploads'));


mongoose.connect(process.env.MONGO_URl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log(err));

// Root route to check server status
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// Menü verilerini çekmek için endpoint
app.get('/api/menu', async (req, res) => {
    try {
        const { category } = req.query; // Kategori parametresini al
        console.log("Received category:", category); // Kategori parametresini yazdır

        const query = category ? { category: category } : {}; // Kategoriye göre filtrele
        const menuItems = await MenuProduct.find(query); // Filtrelenmiş verileri çek

        console.log("Filtered menu items:", menuItems); // Bulunan menü ürünlerini yazdır
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: "Veri çekme hatası", error });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
