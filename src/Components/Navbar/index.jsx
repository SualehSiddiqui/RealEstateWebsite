import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLogo from '../../assets/nav-logo.png'
import { useLocation } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import details from '../../Data/MajorDetails';

const pages = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About',
        link: '/About',
    },
    {
        name: 'Properties',
        link: '/Properties',
    },
    {
        name: 'Management',
        link: '/management',
        subLink: [{
            name: 'Maintenance',
            link: '/Maintenance'
        }, {
            name: 'Property Management',
            link: '/PropertyManagement'
        }]
    },
    {
        name: 'Contact',
        link: '/Contact',
    },
]

function OffcanvasExample() {
    const location = useLocation();
    const { pathname } = location
    const { companyPhone2, companyPhone1 } = details
    return (
        <>
            <Navbar expand="lg" className="main-navbar sticky-top">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={NavLogo} className='navbar-logo-img' alt="navbar_logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-auto">
                            {
                                pages.map((v, i) => {
                                    if (v.subLink) {
                                        return (
                                            <NavDropdown
                                                key={v.name}
                                                title={v.name}
                                                id="nav-dropdown"
                                                className='nav-links ms-2'
                                            >
                                                {v.subLink.map((subValue, subIndex) => (
                                                    <NavDropdown.Item
                                                        key={subValue.name}
                                                        href={subValue.link}
                                                        className='dropdown-menu-item'
                                                    >
                                                        {subValue.name}
                                                    </NavDropdown.Item>
                                                ))}
                                            </NavDropdown>
                                        )
                                    } else {
                                        return (
                                            <Nav.Link
                                                key={v.name}
                                                className={`nav-links ms-2 ${pathname === v.link ? 'nav-active-link' : ''}`}
                                                href={v.link}
                                            >
                                                {v.name}
                                            </Nav.Link>
                                        )
                                    }
                                })
                            }
                        </Nav>
                        <Nav className="ms-auto d-flex flex-column">
                            <Nav.Link href={`tel:${companyPhone1}`} className='nav-phone-link'>
                                <FaPhoneAlt size={16} /> {companyPhone1}
                            </Nav.Link>
                            <Nav.Link href={`tel:${companyPhone2}`} className='nav-phone-link'>
                                <FaPhoneAlt size={16} /> {companyPhone2}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default OffcanvasExample;