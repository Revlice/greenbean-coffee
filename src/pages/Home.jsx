import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';


const Home = ()=>{

    return(
        <div className="container mx-auto py-4">
            <div className="flex flex-col items-center">
                <Header/>
                <Main/>
            </div>
        </div>
    )
};

export default Home;
