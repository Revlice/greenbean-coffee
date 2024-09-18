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
import anayemekler from '../../public/images/anayemekler.jpg';
import tatlilar from '../../public/images/tatliyemekler.jpg';
import sicakicecekler from '../../public/images/sicakicecekler.jpg';
import bitkicaylari from '../../public/images/bitkicaylari.jpg';
import dünyakahveleri from '../../public/images/dünyakahveleri.jpg';
import sogukkahveler from '../../public/images/sogukkahveler.jpg';

const Main = () => {
    const titles = [
        { name: "Güne Başlarken", image: gunebaslarken },
        { name: "Gözlemeler", image: gozlemeler },
        { name: "Tostlar", image: tostlar },
        { name: "Wraplar", image: wraplar },
        { name: "Sandviçler", image: sandvicler },
        { name: "Pizza", image: pizza },
        { name: "Aperatifler", image: aperatifler },
        { name: "Burgerlar", image: burgerlar },
        { name: "Sağlıklı Lezzetler", image: sagliklilezzetler },
        { name: "Makarnalar", image: makarnalar },
        { name: "Ana Yemekler", image: anayemekler },
        { name: "Tatlılar", image: tatlilar },
        { name: "Sıcak İçecekler", image: sicakicecekler },
        { name: "Bitki Çayları", image: bitkicaylari },
        { name: "Dünya Kahveleri", image: dünyakahveleri },
        { name: "Soğuk Kahveler", image: sogukkahveler },
    ];

    return (
        <div
            className="bg-emerald-400 text-white p-8 mt-4 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {titles.map((title, index) => (
                <MenuCards key={index} title={title.name} image={title.image}/>
            ))}
        </div>
    );
};

export default Main;
