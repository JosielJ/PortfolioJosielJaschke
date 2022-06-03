import "./About.scss"

import photo from "../assets/photo.jpg";
import Curriculo from "../assets/CurriculoJosielJaschke.pdf"

import { motion } from "framer-motion";

import {FiTwitter, FiTwitch, FiInstagram, FiGithub, FiLinkedin, FiDownloadCloud, FiMail} from "react-icons/fi";

import {FaWhatsapp} from "react-icons/fa"

function About() {

    return(
        <div className="about-container">
            <div className="about-info">
                <div className="about-info-photo">
                    <img src={photo} alt="minha-foto" />
                </div>
                <div className="about-info-text">
                    <div className="about-info-text-title">
                        <h1>SOBRE MIM</h1>
                    </div>
                    <div className="about-info-text-loc">
                        <h2>Santa Catarina, Brasil</h2>
                    </div>
                    <div className="about-info-text-infos">
                        <p>Tenho 20 anos, sou de Itajaí SC, estudo programação pela Alura, sou desenvolvedor Web Front-End e possuo conhecimento em HTML, CSS, SASS, JavaScript, React.js e Node.js. Busco uma oportunidade  para trabalhar na área de desenvolvimento web, tenho vontade de aprender, gosto de trabalho em equipe e gosto de usar criatividade para resolver problemas do dia a dia.</p>
                    </div>
                    <div className="about-info-text-sm">
                        <FiTwitter onClick={() => window.open("https://twitter.com/josieljaschke", '_blank')}/>
                        <FiInstagram onClick={() => window.open("https://www.instagram.com/josieljaschke/", '_blank')}/>
                        <FaWhatsapp onClick={() => window.open("https://api.whatsapp.com/send?phone=5547996598079&text=Ol%C3%A1%2C%20vi%20seu%20perfil%20no%20GitHub%20e%20gostaria%20de%20conversar%20mais%20com%20voc%C3%AA!", '_blank')}/>
                        <FiTwitch onClick={() => window.open("https://www.twitch.tv/zanzador", '_blank')}/>
                        <FiGithub onClick={() => window.open("https://github.com/JosielJ", '_blank')}/>
                        <FiLinkedin onClick={() => window.open("https://www.linkedin.com/in/josiel-jaschke/", '_blank')}/>
                    </div>
                    <div className="about-info-text-btns">
                        <motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #4B1860 0%, #D24074 100%) border-box"}} className="about-info-text-btns-lk" onClick={() => window.open( "https://drive.google.com/file/d/12C6oErjey84swaveKzl5Xb7KvdEnFnZJ/view?usp=sharing", '_blank')}>
                            <FiDownloadCloud />
                            <h1 className="about-info-text-btns-lk-text">Currículo</h1>
                        </motion.button>
                        <motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #297d93 0%, #353466 100%) border-box"}} className="about-info-text-btns-gh" onClick={() => window.open( "mailto:josieljaschke@outlook.com?subject=Olá%2C%20vi%20seu%20Portfólio%20e%20gostaria%20de%20conversar%20mais%20com%20você!", '_blank')}>
                            <FiMail/>
                            <h1 className="about-info-text-btns-gh-text">E-mail</h1>
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className="about-skills">
                <h1>Habilidades</h1>
                <div className="about-skills-icons">
                    <motion.img whileTap={{scale: 0.95}} whileHover={{scale: 1.15}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"/>
                    <motion.img whileTap={{scale: 0.95}} whileHover={{scale: 1.15}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                    <motion.img whileTap={{scale: 0.95}} whileHover={{scale: 1.15}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/>
                    <motion.img whileTap={{scale: 0.95}} whileHover={{scale: 1.15}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript"/>
                    <motion.img whileTap={{scale: 0.95}} whileHover={{scale: 1.15}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" />
                    <motion.img whileTap={{scale: 0.95}} whileHover={{scale: 1.15}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
                </div>
            </div>
        </div>
    )
}

export default About;