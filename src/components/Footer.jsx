import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <h2 className="footer-heading">MatchDay AI - AI enabled intelligence</h2>
                <button className="footer-button">Contact Us</button>
            </div>
            <div className="footer-sub-content">
                <span className="footer-copyright">Copyright | FAQs | Privacy Policy</span>
                <ul className="footer-social-links">
                    <li><FontAwesomeIcon icon={faEnvelope} className="social-icon" /></li>
                    <li><FontAwesomeIcon icon={faInstagram} className="social-icon" /></li>
                    <li><FontAwesomeIcon icon={faTwitter} className="social-icon" /></li>
                    <li><FontAwesomeIcon icon={faFacebookF} className="social-icon" /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} className="social-icon" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;