import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

//Pages
import HomePage from '../Pages/Home';
import AboutPage from '../Pages/About';
import MaintenancePage from '../Pages/Maintenance';
import ContactPage from '../Pages/Contact';
import PropertyPage from '../Pages/Properties';
import PropertyManagementPage from '../Pages/PropertyManagement';
import NotFoundPage from '../Pages/NotFound';

//Components
import NavScroll from '../Components/Navbar';
import FooterComp from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';

const RouterPages = () => {
    return (
        <Router>
            <NavScroll />
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/About' element={<AboutPage />} />
                <Route path='/Contact' element={<ContactPage />} />
                <Route path='/Properties/:index' element={<PropertyPage />} />
                <Route path='/PropertyManagement' element={<PropertyManagementPage />} />
                <Route path='/Maintenance' element={<MaintenancePage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <FooterComp />
        </Router>
    )
}

export default RouterPages;