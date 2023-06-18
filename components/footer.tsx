import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
    <div className="container-fluid">
        <div className="row">
        <div className="col-md-4 col-sm-12">
            <h5 style={{ backgroundColor: "#a8d0e6", textAlign: "center" }}>Contacto</h5>
            <ul className="list-unstyled text-small" style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://www.facebook.com/allison.victor.520?mibextid=LQQJ4d" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008872750977&mibextid=LQQJ4d" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://github.com/AaronBarboza/Examen2-PrograIV" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            <a href="https://instagram.com/_amvv__?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a href="https://instagram.com/_barbxx__?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            </ul>
        </div>
        </div>
        <div className="border-top pt-3">
        <p className="text-muted" style={{textAlign: "center"}}>&copy; 2023</p>
        </div>
    </div>
    </footer>

  );
};

export default Footer;