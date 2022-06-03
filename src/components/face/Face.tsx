import "./Face.scss";

import { motion } from "framer-motion";

import { FiLinkedin, FiGithub } from "react-icons/fi"

import alertPNG from "../assets/alert.png"

function Face() {
    function BemVindo(){
        alert("Olá, seja Bem-vindo ao meu portfólio, espero que goste 😁");
        console.log(alertPNG)
    }

    return (
        <div className="face-container">
            <div className="face-text">
                <h2 className="txt-1">OLÁ, EU SOU</h2>
                <h1 className="txt-2">JOSIEL JASCHKE</h1>
                <div className="txt-end"><h2 className="txt-3">DESENVOLVEDOR FRONT-END.</h2> <motion.div initial={{backgroundColor: "#ffffff"}} animate={{backgroundColor: "#121212"}} transition={{duration: 0.5, ease: "easeOut" ,repeat: Infinity}} className="face-text-line"></motion.div></div>
                <div className="face-buttons">
                    <motion.button onClick={() => window.open("https://www.linkedin.com/in/josiel-jaschke/", '_blank')} whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #4B1860 0%, #D24074 100%) border-box"}} className="face-button-lk">
                        <FiLinkedin/>
                        <h1 className="face-button-lk-text">LinkedIn</h1>
                    </motion.button>
                    <motion.button onClick={() => window.open("https://github.com/JosielJ", '_blank')} whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #297d93 0%, #353466 100%) border-box"}} className="face-button-gh">
                        <FiGithub/>
                        <h1 className="face-button-gh-text">GitHub</h1>
                    </motion.button>
                </div>
            </div>
            <div className="face-img">
                <img className="face-img-photo" src={alertPNG} alt="alert"/>
                <motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #ffffff 0%, #ffffff 100%) border-box"}}  onClick={BemVindo} className="face-img-button">
                    🤔🤔🤔
                </motion.button>
            </div>
        </div>
    );
}

export default Face;
