import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import Face from "./components/face/Face";
import About from "./components/about/About";
import Exp from "./components/exp/Exp";
import Proj from "./components/proj/Proj";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Face/>
            <About/>
            <Exp/>
            <Proj/>
            <Footer/>
        </div>
    );
}

export default App;
