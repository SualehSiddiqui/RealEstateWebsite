import { Link } from 'react-router-dom';
import './style.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FaHome, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterLogo from '../../assets/nav-logo.png'

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

export default function FooterComp() {
    return (
        <MDBFooter bgColor='black' color='white' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between border-bottom p-2'>
                <div className='me-5 d-none d-lg-block'>
                    <span className='white-color'>Get connected with us on social networks:</span>
                </div>

                <div>
                    <Link to={''} className='me-4 text-reset white-color social-links'>
                        <FaFacebookF />
                    </Link>
                    <Link to={''} className='me-4 text-reset white-color social-links'>
                        <FaTwitter />
                    </Link>
                    <Link to={''} className='me-4 text-reset white-color social-links'>
                        <FaInstagram />
                    </Link>
                    <Link to={''} className='me-4 text-reset white-color social-links'>
                        <FaLinkedinIn />
                    </Link>
                </div>
            </section>

            <section className='footer'>
                <MDBContainer className='text-center text-md-start mt-2'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 white-color'>
                            <img src={FooterLogo} alt="FooterLogo" className='footer-logo' data-aos-duration="700" data-aos="zoom-in" />
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h4 className='text-uppercase fw-bold mb-4 white-color'>Useful links</h4>
                            <p>
                                {
                                    pages.map((v, i) => {
                                        return (
                                            <Link key={i} to={v.link} className='text-reset white-color footer-links'>
                                                {v.name}
                                            </Link>
                                        )
                                    })
                                }
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h4 className='text-uppercase fw-bold mb-4 white-color'>Contact</h4>
                            <Link className='white-color footer-links'>
                                <FaHome className='me-2' />
                                New York, NY 10012, US
                            </Link>
                            <Link to={'mailto:'} className='white-color footer-links'>
                                <MdEmail className='me-2' />
                                info@example.com
                            </Link>
                            <Link to={'tell:+44 (0) 793 266 4441'} className='white-color footer-links'>
                                <FaPhoneAlt className='me-2' />
                                +44 (0) 793 266 4441
                            </Link>
                            <Link to={'tel:+44 (0) 795 130 3206'} className='white-color footer-links'>
                                <FaPhoneAlt className='me-2' />
                                +44 (0) 795 130 3206
                            </Link>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='sub-footer'>
                © 2024 Copyright: LUSH LET LONDON LTD
            </div>
        </MDBFooter>
    );
}