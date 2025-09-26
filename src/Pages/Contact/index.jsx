import { Container } from 'react-bootstrap';
import './style.css';
import SeperatorImg from '../../assets/Home/seperator-img.png'
import AOS from 'aos';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MdAttachEmail, MdLaptopMac, MdLocalPhone, MdLocationOn } from "react-icons/md";
import details from '../../Data/MajorDetails';
import { Link } from 'react-router-dom';
import { countries } from 'countries-list'

const ContactPage = () => {

    const [enquiryType, setEnquiryType] = useState('');

    useEffect(() => {
        AOS.init();
    }, []);

    const formUi = (type) => {
        if (type === 'general-enquiry' || type === 'long-let') {
            return (<>
                <label className='mt-5' htmlFor="first-name">
                    First Name:
                </label>
                <input type="text" id='first-name' />

                <label htmlFor="sur-name">
                    Sur Name:
                </label>
                <input type="text" id='sur-name' />

                <label htmlFor="telephone">
                    Telephone:
                </label>
                <input type="text" id='telephone' />

                <label htmlFor="email">
                    Email:
                </label>
                <input type="email" id='email' />

                <label htmlFor="enquiry">
                    Your Enquiry:
                </label>
                <textarea id='enquiry' />

                <button>Submit Enquiry</button>
            </>)
        } else if (type === 'maintenance-issue') {
            return (<>
                <label className='mt-5' htmlFor="property-info">
                    Property Information:
                </label>
                <input type="text" id='property-info' />

                <label className='mt-5' htmlFor="first-name">
                    First Name:
                </label>
                <input type="text" id='first-name' />

                <label htmlFor="sur-name">
                    Sur Name:
                </label>
                <input type="text" id='sur-name' />

                <label htmlFor="telephone">
                    Telephone:
                </label>
                <input type="text" id='telephone' />

                <label htmlFor="email">
                    Email:
                </label>
                <input type="email" id='email' />

                <label htmlFor="issue">
                    Maintenance Issue:
                </label>
                <textarea id='issue' />

                <button>Submit Enquiry</button>
            </>)
        } else if (type === 'maintenance-issue') {
            return (<>
                <label className='mt-5' htmlFor="first-name">
                    First Name:
                </label>
                <input type="text" id='first-name' />

                <label htmlFor="sur-name">
                    Sur Name:
                </label>
                <input type="text" id='sur-name' />

                <label htmlFor="telephone">
                    Telephone:
                </label>
                <input type="text" id='telephone' />

                <label htmlFor="email">
                    Email:
                </label>
                <input type="email" id='email' />

                <label htmlFor="enquiry">
                    Your Enquiry:
                </label>
                <textarea id='enquiry' />

                <button>Submit Enquiry</button>
            </>)
        } else if (type === 'short-let') {
            return (<>
                <label className='mt-5' htmlFor="first-name">
                    First Name:
                </label>
                <input type="text" id='first-name' />

                <label htmlFor="sur-name">
                    Sur Name:
                </label>
                <input type="text" id='sur-name' />

                <label htmlFor="telephone">
                    Telephone:
                </label>
                <input type="text" id='telephone' />

                <label htmlFor="email">
                    Email:
                </label>
                <input type="email" id='email' />

                <label htmlFor="address">
                    Address:
                </label>
                <input type="text" id='address' />

                <label htmlFor="town">
                    Town:
                </label>
                <input type="text" id='town' />

                <label htmlFor="county">
                    County:
                </label>
                <input type="text" id='county' />

                <label htmlFor="country">
                    Country:
                </label>
                <select name="country" id="country">
                    <option value="">Please select your Country</option>
                    {
                        Object.values(countries).map(country => <option value={country.name}>{country.name}</option>)
                    }
                </select>

                <label htmlFor="arrival-date">
                    Arrival Date:
                </label>
                <input type="date" id='arrival-date' />

                <label htmlFor="departure-date">
                    Departure Date:
                </label>
                <input type="date" id='departure-date' />

                <label htmlFor="appartment-type">
                    Appartment Type:
                </label>
                <select name="appartment-type" id="appartment-type">
                    <option value="">Please select appartment type</option>
                    <option value="studio">Please select appartment type</option>
                    <option value="1bedroom">1 Bedroom</option>
                    <option value="2bedroom">2 Bedrooms</option>
                    <option value="3bedroom">3 Bedrooms</option>
                    <option value="4bedroom">4 Bedroom or more</option>
                </select>

                <label htmlFor="appartment-number">
                    Appartment Number:
                </label>
                <select name="appartment-number" id="appartment-number">
                    <option value="">Please select appartment number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                <label htmlFor="number-of-people">
                    Number of People:
                </label>
                <select name="number-of-people" id="number-of-people">
                    <option value="">Please select Number of People</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                <label htmlFor="reason-for-travelling">
                    Reason for Travelling:
                </label>
                <textarea id='reason-for-travelling' />

                <label htmlFor="enquiry">
                    Your Enquiry:
                </label>
                <textarea id='enquiry' />

                <button>Submit Enquiry</button>
            </>)
        } else {
            return <></>
        }
    };

    return (
        <div className='main-body-div'>
            <div className='about-banner-div contact-banner-div'></div>
            <Container className='about-text-container'>
                <div className='text-center about-text'>
                    contact&nbsp;
                    <span className='golden-color'>
                        us
                    </span>
                </div>
                <div className='line-div'></div>
                <h2 className='text-center'>
                    <TypeAnimation
                        sequence={[
                            "Let's Start a Conversation"
                        ]}
                        wrapper="span"
                        speed={70}
                        repeat={0}
                        cursor={false}
                    />
                </h2>

                <div className='main-contact-txt-div'>
                    <div className='contact-txt-div-1' data-aos-duration="700" data-aos="fade-down-right">
                        <div className='contact-info'>
                            <div className='icon-div'>
                                <MdAttachEmail />
                            </div>
                            <div className='contact-links'>
                                <Link to={'mailto:' + details.companyEmail} style={{ color: 'black' }} > {details.companyEmail} </Link>
                            </div>
                        </div>
                        <div className='contact-info'>
                            <div className='icon-div'>
                                <MdLaptopMac />
                            </div>
                            <div className='contact-links'>
                                <Link to={`l4properties.co.uk`} target='_blank' style={{ color: 'black' }}>
                                    l4properties.co.uk
                                </Link>
                            </div>
                        </div>
                        <div className='contact-info'>
                            <div className='icon-div'>
                                <MdLocalPhone />
                            </div>
                            <div className='contact-links'>
                                <Link to={`tel:${details.companyPhone1}`} style={{ color: 'black' }}>
                                    {details.companyPhone1}
                                </Link>
                                <Link to={`tel:${details.companyPhone2}`} style={{ color: 'black' }}>
                                    {details.companyPhone2}
                                </Link>
                            </div>
                        </div>
                        <div className='contact-info'>
                            <div className='icon-div'>
                                <MdLocationOn />
                            </div>
                            <div className='contact-links'>
                                Lush Lets London Ltd, Suite-59,
                                21 Seymour Street, W1H 7JX
                                United Kingdom
                            </div>
                        </div>
                    </div>
                    <div className='contact-txt-div-2' data-aos-duration="700" data-aos="fade-up-left">
                        <form action="" className='contact-txt-form'>
                            <p>Please enter your details into the form below to send us your enquiry. A member of the Lush Let London Ltd team will contact you within 48 hours of receiving your enquiry.</p>
                            <label htmlFor="contact-purpose">
                                I would like to:
                            </label>
                            <select
                                name="contact-purpose"
                                id="contact-purpose"
                                value={enquiryType}
                                onChange={e => setEnquiryType(e.target.value)}
                            >
                                <option value="">
                                    Please select an option
                                </option>
                                <option value="general-enquiry">
                                    Make a General Enquiry / Give Feedback
                                </option>
                                <option value="maintenance-issue">
                                    Report a Maintenance Issue
                                </option>
                                <option value="long-let">
                                    Enquire about a Long Let (3+ Months)
                                </option>
                                <option value="short-let">
                                    Enquire about a short Let (upto 3 Months)
                                </option>
                            </select>
                            {formUi(enquiryType)}

                        </form>
                        {/* <form action="" className='d-flex flex-column contact-txt-form '>
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id='firstName' placeholder='Enter Your First Name' />
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id='lastName' placeholder='Enter Your Last Name' />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id='email' placeholder='Enter Your Email' />
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="number" id='phone' placeholder='Enter Your Phone Number' />
                            <label htmlFor="message">Your Message:</label>
                            <textarea type="" id='message' placeholder='Enter Your Your Message' />
                            <button type="submit">Submit</button>
                        </form> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default ContactPage;