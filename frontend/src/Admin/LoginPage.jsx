import { useState } from "react";
import logo from '../assets/images/logo2.png';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import toast,{Toaster} from "react-hot-toast";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'tufangreen' || password === 'bean77') {
            toast.success("Giriş Başarılı");
            setTimeout(()=>{
                navigate('/admin-page');
            },1500)
        }else{
            toast.error("Şifre ya da e-posta hatalı lütfen kontrol ediniz");
        }
    };

    return (
        <div className="w-full h-screen bg-emerald-950 flex justify-center items-center">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center">
                <img src={logo} alt="Green n' Bean Logo" className="w-32 mb-4"/>
                <h1 className="font-bold text-black text-2xl mb-2">Green N Bean Coffee</h1>
                <h2 className="font-medium text-black text-lg mb-6">Admin Login</h2>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label className="block text-black mb-2">Kullanıcı Adı</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg text-black"
                            placeholder="Kullanıcı adınızı girin"
                        />
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-black mb-2">Şifre</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg text-black"
                            placeholder="Şifrenizi girin"
                        />
                        <div
                            className="absolute right-3 top-9 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-emerald-950 text-white py-2 rounded-lg hover:bg-emerald-800 transition duration-300"
                    >
                        Giriş Yap
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
