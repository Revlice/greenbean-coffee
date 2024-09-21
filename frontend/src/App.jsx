import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import GuneBaslarken from './routes/GuneBaslarken.jsx';
import Gozlemeler from './routes/Gozlemeler.jsx';
import Tostlar from './routes/Tostlar.jsx';
import Wraplar from './routes/Wraplar.jsx';
import Sandvicler from './routes/Sandvicler.jsx';
import Pizza from './routes/Pizza.jsx';
import Aperatifler from "./routes/Aperatifler.jsx";
import Burgerlar from "./routes/Burgerlar.jsx";
import SaglikliLezzetler from "./routes/SaglikliLezzetler.jsx";
import Makarnalar from "./routes/Makarnalar.jsx";
import AnaYemekler from "./routes/AnaYemekler.jsx";
import Tatlılar from "./routes/Tatlılar.jsx";
import Sıcakİcecekler from "./routes/Sıcakİcecekler.jsx";
import BitkiCaylari from "./routes/BitkiCaylari.jsx";
import DünyaKahveleri from "./routes/DünyaKahveleri.jsx";
import SogukKahveler from "./routes/SogukKahveler.jsx";
import Sogukİcecekler from "./routes/Sogukİcecekler.jsx";
import VitaminBar from "./routes/VitaminBar.jsx";
import FreshLezzetler from "./routes/FreshLezzetler.jsx";
import AlkolsuzKokteyler from "./routes/AlkolsüzKokteyler.jsx";
import Admin from "./Admin/Admin.jsx";
import LoginPage from "./Admin/LoginPage.jsx"


function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hakkimizda" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/menu" element={<Home/>}/>
            <Route path="/gunebaslarken" element={<GuneBaslarken/>}/>
            <Route path="/gozlemeler" element={<Gozlemeler/>}/>
            <Route path="/tostlar" element={<Tostlar/>}/>
            <Route path="/wraplar" element={<Wraplar/>}/>
            <Route path="/sandvicler" element={<Sandvicler/>}/>
            <Route path="/pizza" element={<Pizza/>}/>
            <Route path="/aperatifler" element={<Aperatifler/>}/>
            <Route path="/burgerlar" element={<Burgerlar/>}/>
            <Route path="/sagliklilezzetler" element={<SaglikliLezzetler/>}/>
            <Route path="/makarnalar" element={<Makarnalar/>}/>
            <Route path="/anayemekler" element={<AnaYemekler/>}/>
            <Route path="/tatlilar" element={<Tatlılar/>}/>
            <Route path="/sicakicecekler" element={<Sıcakİcecekler/>}/>
            <Route path="/bitkicaylari" element={<BitkiCaylari/>}/>
            <Route path="/dunyakahveleri" element={<DünyaKahveleri/>}/>
            <Route path="/sogukkahveler" element={<SogukKahveler/>}/>
            <Route path="/sogukicecekler" element={<Sogukİcecekler/>}/>
            <Route path="/vitaminbar" element={<VitaminBar/>}/>
            <Route path="/freshlezzetler" element={<FreshLezzetler/>}/>
            <Route path="/alkolsuzkokteyler" element={<AlkolsuzKokteyler/>}/>



            {/* Admin Özel */}
            <Route path="/admin-page" element={<Admin/>}/>
            <Route path="/admin-login" element={<LoginPage/>}/>
        </Routes>
    </>
  )
}

export default App;
