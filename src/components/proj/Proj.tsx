import "./Proj.scss"

import { motion } from "framer-motion";

import { FiGithub } from "react-icons/fi"
import { MdCatchingPokemon, MdWeb } from "react-icons/md"

import pokefun from "../assets/Pokefun.png";
import threejs from "../assets/3d.png";
import porft from "../assets/Portf.png"

function Proj(){
    return(
        <div className="proj-container">
            <div className="proj-title">
                <h1 className="proj-title-text">Alguns dos meus Projetos!</h1>
            </div>
            <div className="proj-fields">
                <div className="proj-grid">
                    <div className="proj-projs">
                        <div className="proj-img">
                            <img src={pokefun} alt="pokefun"/>
                        </div>
                        <div className="proj-text">
                            <p>Site de Pokémon, com Pokédex, gerador aleatório de Pokémon e jogo de adivinhação. Feito com React.js e consumindo API externa.</p>
                        </div>
                        <div className="proj-buttons">
                            <motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #297d93 0%, #297d93 100%) border-box"}} className="proj-button-site" onClick={() => window.open("https://pokefun.netlify.app/", '_blank')}>
                                <MdCatchingPokemon/>
                                <h1 className="proj-button-site-text">Pokéfun</h1>
                            </motion.button>
                            <motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #297d93 0%, #297d93 100%) border-box"}} className="proj-button-gh" onClick={() => window.open("https://github.com/JosielJ/PokeFun", '_blank')}>
                                <FiGithub/>
                                <h1 className="proj-button-gh-text">GitHub</h1>
                            </motion.button>
                        </div>
                    </div>
                    <div className="proj-projs">
                        <div className="proj-img-2">
                            <img src={threejs} alt="threejs"/>
                        </div>
                        <div className="proj-text">
                            <p>Um página simples para aprofundar e testar meus conhecimentos em React e Three.js.</p>
                        </div>
                        <div className="proj-buttons">
                            <motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #297d93 0%, #297d93 100%) border-box"}} className="proj-button-site" onClick={() => window.open("https://treino-react-three-js.vercel.app/", '_blank')}>
                                <MdWeb/>
                                <h1 className="proj-button-site-text">Site</h1>
                            </motion.button>
                            <motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #297d93 0%, #297d93 100%) border-box"}} className="proj-button-gh" onClick={() => window.open("https://github.com/JosielJ/Treino-React-Three.js", '_blank')}>
                                <FiGithub/>
                                <h1 className="proj-button-gh-text">GitHub</h1>
                            </motion.button>
                        </div>
                    </div>
                    <div className="proj-projs">
                        <div className="proj-img-3">
                            <img src={porft} alt="Portfólio"/>
                        </div>
                        <div className="proj-text">
                            <p>Portfólio feito em React.js o uso de React Router e outras bibliotecas para React.js.</p>
                        </div>
                        <div className="proj-buttons">
                            <motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #297d93 0%, #297d93 100%) border-box"}} className="proj-button-site" onClick={() => window.open("https://portfoliojosieljaschke.netlify.app/", '_blank')}>
                                <MdWeb/>
                                <h1 className="proj-button-site-text">Portfólio</h1>
                            </motion.button>
                            <motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98, background: "linear-gradient(90deg, #297d93 0%, #297d93 100%) border-box"}} className="proj-button-gh" onClick={() => window.open("https://github.com/JosielJ/PortfolioJosielJaschke", '_blank')}>
                                <FiGithub/>
                                <h1 className="proj-button-gh-text">GitHub</h1>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proj;