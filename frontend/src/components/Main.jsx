import MenuCards from "./MenuCards.jsx";
import gunebaslarken from '../assets/images/patateskizartmasi2.webp';
import gozlemeler from '../assets/images/gözleme2.jpg';
import tostlar from '../assets/images/tost2.jpg';
import wraplar from '../assets/images/wrap2.webp';
import sandvicler from '../assets/images/sandvic2.jpg';
import pizza from '../assets/images/pizza2.webp';
import aperatifler from '../assets/images/aperatifler2.webp';
import burgerlar from '../assets/images/burger2.jpg';
import sagliklilezzetler from '../assets/images/sagliklilezzetler2.webp';
import makarnalar from '../assets/images/makarna2.jpeg';
import anayemekler from '../assets/images/anayemek.jpg';
import tatlilar from '../assets/images/tatli2.webp';
import sicakicecekler from '../assets/images/sıcakkahve2.jpg';
import bitkicaylari from '../assets/images/bitkicaylari2.jpg';
import dünyakahveleri from '../assets/images/dünyakahveleri2.webp';
import sogukkahveler from '../assets/images/sogukkahve2.webp';
import sogukicecekler from '../assets/images/sogukicecekler2.jpg';
import vitaminbar from '../assets/images/vitaminbar2.jpg';
import freshlezzetler from '../assets/images/freshlezzetler2.jpg';
import alkolsuzkokteyler from '../assets/images/alkolsuzkokteyler2.jpg';

import {Link} from "react-router-dom";

const Main = () => {
    const titles = [
        { name: "Güne Başlarken", image: gunebaslarken, go:"/gunebaslarken"},
        { name: "Gözlemeler", image: gozlemeler, go:"/gozlemeler"},
        { name: "Tostlar", image: tostlar, go:"/tostlar" },
        { name: "Wraplar", image: wraplar , go:"/wraplar" },
        { name: "Sandviçler", image: sandvicler  , go:"/sandvicler"},
        { name: "Pizza", image: pizza , go:"/pizza" },
        { name: "Aperatifler", image: aperatifler  , go:"/aperatifler"},
        { name: "Burger", image: burgerlar  , go:"/burgerlar"},
        { name: "Sağlıklı Lezzetler", image: sagliklilezzetler  , go:"/sagliklilezzetler"},
        { name: "Makarnalar", image: makarnalar , go:"/makarnalar" },
        { name: "Ana Yemekler", image: anayemekler , go:"/anayemekler" },
        { name: "Tatlılar", image: tatlilar  , go:"/tatlilar"},
        { name: "Sıcak İçecekler", image: sicakicecekler , go:"/sicakicecekler" },
        { name: "Bitki Çayları", image: bitkicaylari , go:"/bitkicaylari" },
        { name: "Dünya Kahveleri", image: dünyakahveleri , go:"/dunyakahveleri" },
        { name: "Soğuk Kahveler", image: sogukkahveler , go:"/sogukkahveler " },
        { name: "Soğuk İçecekler", image: sogukicecekler , go:"/sogukicecekler " },
        { name: "Vitamin Bar", image: vitaminbar, go:"/vitaminbar " },
        { name: "Fresh Lezzetler", image: freshlezzetler , go:"/freshlezzetler " },
        { name: "Alkolsüz Kokteyler", image: alkolsuzkokteyler , go:"/alkolsuzkokteyler " },
    ];

    return (
        <div
            className="main-container bg-emerald-400 text-white p-8 mt-4 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {titles.map((title, index) => (
                <Link key={index} to={title.go}>
                    <MenuCards key={index} title={title.name} image={title.image}/>
                </Link>
            ))}
        </div>
    );
};

export default Main;
