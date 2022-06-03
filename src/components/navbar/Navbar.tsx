import "./Navbar.scss";

import { motion } from "framer-motion";

import  { HiMenu } from "react-icons/hi";

function Navbar() {

    const title = "<Josiel Jaschke/>"

    return (
        <div className="navbar-container">
            <div className="navbar-name">
                <h1>{title}</h1>
            </div>
            <div className="navbar-links">
                <motion.div whileHover={{borderBottomWidth: "2px"}} transition={{duration: 0.1}} className="navbar-link-text">
                    <h1>Home</h1>
                </motion.div>
                <motion.div whileHover={{borderBottomWidth: "2px"}} transition={{duration: 0.1}} className="navbar-link-text">
                    <h1>Sobre mim</h1>
                </motion.div>
                <motion.div whileHover={{borderBottomWidth: "2px"}} transition={{duration: 0.1}} className="navbar-link-text">
                    <h1>Experiência</h1>
                </motion.div>
                <motion.div whileHover={{borderBottomWidth: "2px"}} transition={{duration: 0.1}} className="navbar-link-text">
                    <h1>Projetos</h1>
                </motion.div>
                <motion.div whileHover={{borderBottomWidth: "2px"}} transition={{duration: 0.1}} className="navbar-link-text">
                    <h1>Contato</h1>
                </motion.div>
            </div>
            <motion.div className="navbar-menu">
                <HiMenu className="navbar-menu-icon"/>
            </motion.div>
        </div>
    );
}

export default Navbar;
