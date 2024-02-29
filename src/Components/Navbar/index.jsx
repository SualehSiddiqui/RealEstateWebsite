import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLogo from '../../assets/nav-logo.png'
import { useLocation } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";


const pages = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/about',
    },
    {
        name: 'Properties',
        link: '/properties',
    },
    {
        name: 'Management',
        link: '/management',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
]

function OffcanvasExample() {
    const location = useLocation();
    const { pathname } = location
    const phone1 = '+44 (0) 793 266 4441'
    const phone2 = '+44 (0) 795 130 3206'
    return (
        <>
            <Navbar expand="lg" className="main-navbar">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={NavLogo} className='navbar-logo-img' alt="navbar_logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: 'white'}} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-auto">
                            {
                                pages.map((v, i) => {
                                    return (
                                        <Nav.Link className={`nav-links ms-2 ${pathname === v.link ? 'nav-active-link' : ''}`} href={v.link} key={i}>{v.name}</Nav.Link>
                                    )
                                })
                            }
                        </Nav>
                        <Nav className="ms-auto d-flex flex-column">
                            <Nav.Link href={`tel:${phone1}`} className='nav-phone-link'>
                                <FaPhoneAlt size={16} /> {phone1}
                            </Nav.Link>
                            <Nav.Link href={`tel:${phone2}`} className='nav-phone-link'>
                                <FaPhoneAlt size={16} /> {phone2}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default OffcanvasExample;