import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import LogoBrand from './components/LogoBrand';
import ImageContainer from './components/ImageContainer';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* header */}
      <LogoBrand />
      {/* Breadcrumb */}
      <div className="main-content">
        <div className="breadcrumb">
          <span className="breadcrumb_secondary">My Collections</span>
          <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-icon" />
          <span className="breadcrumb_primary">Tokoyo Olympics</span>
        </div>
        {/* Image Container */}
        <ImageContainer />

        {/* Main Content */}
        <MainContent />

      </div>
      {/* Footer Content */}
      <Footer />

    </div>
  );
}

export default App;
