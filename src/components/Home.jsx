import Navbar from "./navbar/Navbar";
import Slider from "./Slider/Slider";
import '../css/App.css';

function Home(props){
    return (
        <div>   
            <Navbar/>
            <Slider/>
        </div>
    );
}

export default Home;