import { Container } from 'react-bootstrap';
import './style.css';
import SeperatorImg from '../../assets/Home/seperator-img.png'
import AOS from 'aos';
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';


const ContactPage = () => {

    useEffect(() => {
        AOS.init();
    }, [])

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
                        <h3>How Can We Help You?</h3>
                        <ul>
                            <li>
                                <h4>
                                    Expert Guidance Every Step of the Way
                                </h4>
                                We understand that navigating the real estate market can sometimes be overwhelming.
                                That's why we're here to offer our expertise and support at every stage of your journey.
                            </li>
                            <li>
                                <h4>
                                    Tailored Solutions for Your Needs
                                </h4>
                                Whether you're a first-time buyer, a seasoned investor, or someone in between, we're dedicated
                                to providing you with personalized solutions that meet your unique requirements.
                            </li>
                            <li>
                                <h4>
                                    Comprehensive Support Services
                                </h4>
                                From property inquiries to market analysis and financing options, our team is equipped to
                                assist you with a wide range of services to ensure a smooth and successful real estate experience.
                            </li>
                            <li>
                                <h4>
                                    Prompt and Reliable Communication
                                </h4>
                                Your time is valuable, and we're committed to providing you with prompt and reliable communication.
                                Expect timely responses and proactive updates from our team throughout the process.
                            </li>
                            <li>
                                <h4>
                                    Your Satisfaction Is Our Priority
                                </h4>
                                Your satisfaction is our top priority, and we're committed to exceeding your expectations.
                                Trust us to go above and beyond to help you achieve your real estate goals.
                            </li>
                            <li>
                                Let's work together to turn your real estate dreams into reality!
                            </li>
                        </ul>
                    </div>
                    <div className='contact-txt-div-2' data-aos-duration="700" data-aos="fade-up-left">
                        <form action="" className='d-flex flex-column contact-txt-form '>
                            <p>Please not all fields are required.</p>
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
                        </form>
                    </div>
                </div>

                <div className='seperator mt-5 mb-5'>
                    <div className='sub-seperator-div-1'></div>
                    <img src={SeperatorImg} alt="" />
                    <div className='sub-seperator-div-1'></div>
                </div>
            </Container>
        </div>
    )
}
export default ContactPage;