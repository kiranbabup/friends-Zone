import './Home.scss';
import Header from "./header/Header";
import Display from './display/Display';

const Home = () =>{
    return (
        <div className="home">
            <Header />
            <Display />
        </div>
    )
}
export default Home;