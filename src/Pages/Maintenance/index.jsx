import { Container } from 'react-bootstrap';
import './style.css';
import SeperatorImg from '../../assets/Home/seperator-img.png'
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import details from '../../Data/MajorDetails.js'

const MaintenancePage = () => {
    const websiteLink = '/';
    const { companyEmail } = details

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='main-body-div'>
            <div className='about-banner-div maintenance-banner-div'></div>
            <Container className='about-text-container'>
                <div className='text-center about-text' data-aos-duration="700" data-aos="zoom-in">
                    PROPERTY&nbsp;
                    <span className='golden-color'>
                        MAINTENANCE
                    </span>
                </div>
                <div className='line-div'></div>
                <ul data-aos-duration="700" data-aos="zoom-in-up">
                    <li>
                        In contrast to typical estate agents who outsource maintenance tasks to third-party companies
                        for commissions, L-Four takes a different approach by employing a dedicated in-house maintenance
                        team. This team ensures our managed portfolio maintains an exceptional standard while keeping
                        costs down and productivity high.
                    </li>
                    <li>
                        Led by experienced senior personnel with military backgrounds, our maintenance department operates
                        with the precision and dedication reminiscent of the British Army. Clock-watching is not tolerated,
                        and the team embraces early starts and a proactive attitude. These military principles of excellence,
                        commitment, and pride elevate our managed properties to standards well above the industry norm.
                    </li>
                    <li>
                        In cases where our maintenance team encounters challenges beyond their expertise, we have a network of qualified
                        plumbers, carpenters, electricians, and other specialists readily available to address any issue promptly.
                    </li>
                    <li>
                        In the best interest of our clients, both managed and non-managed landlords, our maintenance team and contractors
                        offer their services on a job-by-job basis, often at reduced rates. This ensures that common and complex property
                        issues are resolved efficiently.
                    </li>
                    <li>
                        If you're a tenant in one of our non-managed properties and need to report a maintenance issue, please utilize
                        our dedicated maintenance form.
                    </li>
                    <li>
                        For tenants in non-managed properties or landlords requiring assistance with property maintenance, please reach out
                        to us at <Link to={'mailto:' + companyEmail} className='maintenance-link' > {companyEmail} </Link> with the property address and your contact details, and we'll respond promptly.
                    </li>
                    <li>
                        For bespoke development inquiries, please visit our <Link to={websiteLink} target='_blank' className='maintenance-link'>website</Link>.
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
export default MaintenancePage;