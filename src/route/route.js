import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

//Pages
import HomePage from '../Pages/Home';
import NavScroll from '../Components/Navbar';
import FooterComp from '../Components/Footer';
import NotFoundPage from '../Pages/NotFound';
import ScrollToTop from '../Components/ScrollToTop';

const RouterPages = () => {
    return (
        <Router>
            <NavScroll />
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <FooterComp />
        </Router>
    )
}

export default RouterPages;