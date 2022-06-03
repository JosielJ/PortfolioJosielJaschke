import "./Footer.scss";

import { BiCopyright } from "react-icons/bi"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BsTwitch } from "react-icons/bs"

function Footer() {
    return (
        <div className="footer-container">
            <BiCopyright/>
            <p>2022 - Josiel Jaschke</p>
            <AiOutlineInstagram/>
            <p>josieljaschke</p>
            <AiOutlineTwitter/>
            <p>josieljaschke</p>
            <BsTwitch/>
            <p>Zanzador</p>
        </div>
    );
}

export default Footer;