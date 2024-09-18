import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';

const Home = () => {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex flex-col items-center">
                <Header />
                <hr className="w-full border-emerald-400 my-6" />
                <Main />
            </div>
        </div>
    );
};

export default Home;
