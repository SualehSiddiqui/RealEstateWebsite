import { Container } from 'react-bootstrap';
import './style.css';
import SeperatorImg from '../../assets/Home/seperator-img.png'
import AOS from 'aos';
import { useEffect } from 'react';
import details from '../../Data/MajorDetails';

const AboutPage = () => {
    const { companyName } = details;

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='main-body-div'>
            <div className='about-banner-div'></div>
            <Container className='about-text-container'>
                <div className='text-center about-text' data-aos-duration="700" data-aos="zoom-in">
                    about&nbsp;
                    <span className='golden-color'>
                        {companyName}
                    </span>
                </div>
                <div className='line-div'></div>
                <ul data-aos-duration="700" data-aos="zoom-in-up">
                    <li>
                        L-Four Properties stands as a prominent figure in Central London's real
                        estate landscape, specializing in both residential and commercial properties.
                    </li>
                    <li>
                        At {companyName}, our commitment lies in furnishing our clients and investors
                        with the latest market insights and pertinent information. Bolstered by a track record
                        of success and years of expertise, we continue to thrive even amidst challenging market
                        conditions.
                    </li>
                    <li>
                        Our operations are structured into three core divisions: Residential Lettings, Residential
                        Sales, and Property Investment.
                    </li>
                    <li>
                        Renowned locally and internationally, our Lettings department excels in providing contemporary,
                        well-maintained residential apartments across prime areas of Central London. Catering to both
                        short-term and long-term leases, we ensure competitive pricing and efficient management.
                    </li>
                    <li>
                        The Residential Sales team showcases premier apartments and houses in sought-after locales such as
                        Mayfair, Marylebone, and Knightsbridge. With a focus on offering value to purchasers while securing
                        optimal prices for vendors, our sales professionals strike a delicate balance that defines our success.
                    </li>
                    <li>
                        In the realm of Investment, our team targets off-market residential and commercial properties poised for
                        increased rental yield or capital appreciation. Collaborating closely with financial institutions, property
                        dealers, and auction houses, we seize opportunities to acquire some of London's most coveted properties at
                        compelling rates.
                    </li>
                    <li>
                        Collaboration is key across all departments, with seamless integration often resulting in synergistic outcomes.
                        Whether it's introducing a new landlord to our Lettings Team or facilitating a sales transaction for an investor,
                        our cohesive approach ensures client satisfaction at every turn.
                    </li>
                    <li>
                        Each member of the {companyName} team is handpicked for their expertise, integrity, and passion for the
                        industry. Together, we uphold the highest standards of professionalism, respect, and dedication to our craft.
                    </li>
                </ul>
                <div className='seperator mt-5 mb-5'>
                    <div className='sub-seperator-div-1'></div>
                    <img src={SeperatorImg} alt="" />
                    <div className='sub-seperator-div-1'></div>
                </div>
            </Container>
        </div>
    )
}
export default AboutPage;