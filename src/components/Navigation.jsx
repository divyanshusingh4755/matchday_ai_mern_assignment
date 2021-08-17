import { faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation() {
    return (
        <div className="menu">
            <ul className="menu-link">
                <li className="link">My Collections</li>
                <li className="link">Browse</li>
                <li className="link">Compare</li>
                <li className="link">My Progress</li>
            </ul>
            <FontAwesomeIcon icon={faCartPlus} className="link icon" />
            <div className="user">
                <FontAwesomeIcon icon={faUser} className="user-icon" />
            </div>
        </div>
    )
}

export default Navigation;