const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const menuRoutes = require('./routes/menu');


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/menu', menuRoutes);

mongoose.connect(process.env.MONGO_URl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("MongoDB Connected!"))
    .catch((err)=>console.log(err));

app.get("/",(req,res)=>{
    res.send("backend calısıyor");
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);

});
