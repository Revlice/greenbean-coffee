import MenuCards from "./MenuCards.jsx";
import gunebaslarken from '../../public/images/patateskizartmasi2.webp';
import gozlemeler from '../../public/images/gözleme2.jpg';
import tostlar from '../../public/images/tost2.jpg';
import wraplar from '../../public/images/wrap2.webp';
import sandvicler from '../../public/images/sandvic2.jpg';
import pizza from '../../public/images/pizza2.webp';
import aperatifler from '../../public/images/aperatifler2.webp';
import burgerlar from '../../public/images/burger2.jpg';
import sagliklilezzetler from '../../public/images/sagliklilezzetler.jpg';
import makarnalar from '../../public/images/makarna2.jpeg';
import anayemekler from '../../public/images/anayemek.jpg';
import tatlilar from '../../public/images/tatli2.webp';
import sicakicecekler from '../../public/images/sıcakkahve2.jpg';
import bitkicaylari from '../../public/images/bitkicaylari2.jpg';
import dünyakahveleri from '../../public/images/dünyakahveleri2.webp';
import sogukkahveler from '../../public/images/sogukkahve2.webp';
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
        { name: "Burgerlar", image: burgerlar  , go:"/burgerlar"},
        { name: "Sağlıklı Lezzetler", image: sagliklilezzetler  , go:"/sagliklilezzetler"},
        { name: "Makarnalar", image: makarnalar , go:"/makarnalar" },
        { name: "Ana Yemekler", image: anayemekler , go:"/anayemekler" },
        { name: "Tatlılar", image: tatlilar  , go:"/tatlilar"},
        { name: "Sıcak İçecekler", image: sicakicecekler , go:"/sicakicecekler" },
        { name: "Bitki Çayları", image: bitkicaylari , go:"/bitkicaylari" },
        { name: "Dünya Kahveleri", image: dünyakahveleri , go:"/dunyakahveleri" },
        { name: "Soğuk Kahveler", image: sogukkahveler , go:"/sogukkahveler " },
    ];

    return (
        <div
            className="bg-emerald-400 text-white p-8 mt-4 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {titles.map((title, index) => (
                <Link to={title.go}>
                    <MenuCards key={index} title={title.name} image={title.image}/>
                </Link>

            ))}
        </div>
    );
};

export default Main;
