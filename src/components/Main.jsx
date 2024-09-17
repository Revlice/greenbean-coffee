import pizza from '../../public/images/pizza.jpg';
import MenuCards from "./MenuCards.jsx";

const Main = () => {
    return (
        <div className="bg-emerald-400  text-white p-8 mt-4 w-full grid h-auto sm:grid-cols-4 md:grid-cols-5 grid-cols-1 ">
            <MenuCards title="Test" image={pizza}/>
        </div>
    );
};

export default Main;
