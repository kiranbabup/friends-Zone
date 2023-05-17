import './Home.scss';
import Header from "./header/Header";
import Display from './display/Display';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        onLoadAdmin();
    }, [])
    
    const onLoadAdmin = () => {
        const adminData = {
            userName: "Kiranpkb",
            password: "pkbpkb123",
        }
        localStorage.setItem("admin", JSON.stringify(adminData));
    }

    return (
        <div className="home">
            <Header />
            <Display />
        </div>
    )
}
export default Home;