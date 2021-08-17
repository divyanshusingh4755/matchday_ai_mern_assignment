import { faEquals } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navigation from './Navigation';

function LogoBrand() {
    return (
        <div className="logo_brand">
            {/* logo and brand*/}
            <div className="logo">
                <FontAwesomeIcon icon={faEquals} className="logo_icon" />
                <div className="logo_text">MatchDay AI</div>
            </div>
            {/* navigation and cart */}
            <Navigation />
        </div>
    )
}

export default LogoBrand;