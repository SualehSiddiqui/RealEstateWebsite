import './style.css';
import Container from 'react-bootstrap/Container';
import SeperatorImg from '../../assets/Home/seperator-img.png'
import HouseImg from '../../assets/Home/house.png';
import CarouselComp from '../../Components/Carousel/index.jsx';
import CounterComp from '../../Components/Counter/index.jsx';
import AOS from 'aos';
import { useEffect } from 'react';
import PropertiesSec from '../../Sections/properties.jsx';
import details from '../../Data/MajorDetails.js';

const HomePage = () => {
    const { companyName } = details;
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='main-body-div'>
            <div className="sub-header-div">
                <Container className='sub-header-div-container'>
                    <div className='selection-div selection-div-1'>
                        <select name="location" defaultValue={'noValue'}>
                            <option value="noValue" hidden disabled>Choose Location</option>
                            <option value="">Show All Locations</option>
                            <option value="Mayfair">Mayfair</option>
                            <option value="Marylebone">Marylebone</option>
                            <option value="Maida-Vale">Maida Vale</option>
                            <option value="St-Johns-Wood">St Johns Wood</option>
                            <option value="Knightsbridge">Knightsbridge</option>
                            <option value="South-Kensington">South Kensington</option>
                            <option value="Hyde-Park">Hyde Park</option>
                            <option value="Bayswater">Bayswater</option>
                            <option value="Notting-Hill">Notting Hill</option>
                            <option value="Other-London-Properties">Other London Properties</option>
                        </select>
                    </div>
                    <div className='selection-div'>
                        <select name="bedrooms" defaultValue={'noValue'}>
                            <option value="noValue" hidden disabled>Bedrooms</option>
                            <option value="X">Show All</option>
                            <option value="0">Studios</option>
                            <option value="1">1 Bedroom</option>
                            <option value="2">2 Bedrooms</option>
                            <option value="3">3 Bedrooms</option>
                            <option value="4">4 Bedrooms or more</option>
                        </select>
                    </div>
                    <div className='selection-div'>
                        <select name="minprice" defaultValue={'noValue'}>
                            <option value="noValue" hidden disabled>Minimum Price</option>
                            <option value="0">Show All</option>
                            <option value="100">Â£100 per week</option>
                            <option value="200">Â£200 per week</option>
                            <option value="300">Â£300 per week</option>
                            <option value="400">Â£400 per week</option>
                            <option value="500">Â£500 per week</option>
                            <option value="600">Â£600 per week</option>
                            <option value="750">Â£750 per week</option>
                            <option value="1000">Â£1,000 per week</option>
                            <option value="2000">Â£2,000 per week</option>
                            <option value="3000">Â£3,000 per week</option>
                            <option value="4000">Â£4,000 per week</option>
                            <option value="5000">Â£5,000 per week</option>
                            <option value="7500">Â£7,500 per week</option>
                        </select>
                    </div>
                    <div className='selection-div'>
                        <select name="maxprice" defaultValue={'noValue'}>
                            <option value="noValue" hidden disabled>Maximum Price</option>
                            <option value="49999">Show All</option>
                            <option value="200">Â£200 per week</option>
                            <option value="300">Â£300 per week</option>
                            <option value="400">Â£400 per week</option>
                            <option value="500">Â£500 per week</option>
                            <option value="600">Â£600 per week</option>
                            <option value="750">Â£750 per week</option>
                            <option value="1000">Â£1,000 per week</option>
                            <option value="2000">Â£2,000 per week</option>
                            <option value="3000">Â£3,000 per week</option>
                            <option value="4000">Â£4,000 per week</option>
                            <option value="5000">Â£5,000 per week</option>
                            <option value="7500">Â£7,500 per week</option>
                            <option value="10000">Â£10,000 per week</option>
                        </select>
                    </div>
                    <div className='selection-div'>
                        <select name="currency" defaultValue={'noValue'}>
                            <option value="noValue" hidden disabled>Show Price In </option>
                            <option value="GBP">UK Pounds (Â£)</option>
                            <option value="USD">US Dollars ($)</option>
                            <option value="EUR">Euros (â‚¬)</option>
                            <option value="CNY">Chinese Yuan (Â¥)</option>
                            <option value="HKD">Hong Kong Dollars ($)</option>
                            <option value="SGD">Singapore Dollars ($)</option>
                            <option value="JPY">Japanese Yen (Â¥)</option>
                            <option value="RUB">Russian Rubles (Ñ€ÑƒÐ±)</option>
                            <option value="AED">UAE Dirham (Ø¯.Ø¥)</option>
                            <option value="BHD">Bahraini Dinar (.Ø¯.Ø¨)</option>
                            <option value="KWD">Kuwaiti Dinar (.Ø¯.Ø¨)</option>
                            <option value="QAR">Qatari Riyal (Ø±.Ù‚)</option>
                            <option value="SAR">Saudi Riyal (Ø±.Ù‚)</option>
                            <option value="EGP">Egyptian Pounds (EÂ£)</option>
                        </select>
                    </div>
                    <div className='selection-div button-div-sub-header'>
                        <button type="submit" >Begin Search</button>
                    </div>
                </Container>
            </div>
            <div className='hero-section-div'></div>
            <div className='main-home-div'>
                <Container>
                    <div className='home-text-div' data-aos-duration="700" data-aos="zoom-in">
                        <div>
                            {companyName}
                            <br />
                            Property Consultants
                        </div>
                        <p>We pride ourselves on being specialists in all aspects of residential and commercial property</p>
                    </div>
                    <CounterComp className='counter mt-5' />
                </Container>
            </div>
            <div className="sub-header-div res-sub-header-div">
                <Container className='sub-header-div-container'>
                    <div className='selection-div selection-div-1  mt-1'>
                        <select name="location" defaultValue={'noValue'}>
                            <option value="noValue" hidden disabled>Choose Location</option>
                            <option value="">Show All Locations</option>
                            <option value="Mayfair">Mayfair</option>
                            <option value="Marylebone">Marylebone</option>
                            <option value="Maida-Vale">Maida Vale</option>
                            <option value="St-Johns-Wood">St Johns Wood</option>
                            <option value="Knightsbridge">Knightsbridge</option>
                            <option value="South-Kensington">South Kensington</option>
                            <option value="Hyde-Park">Hyde Park</option>
                            <option value="Bayswater">Bayswater</option>
                            <option value="Notting-Hill">Notting Hill</option>
                            <option value="Other-London-Properties">Other London Properties</option>
                        </select>
                    </div>
                    <div className='selection-div selection-div-1  mt-1'>
                        <select name="bedrooms" defaultValue={'noValue'}>
                            <option value="noValue" hidden disabled>Bedrooms</option>
                            <option value="X">Show All</option>
                            <option value="0">Studios</option>
                            <option value="1">1 Bedroom</option>
                            <option value="2">2 Bedrooms</option>
                            <option value="3">3 Bedrooms</option>
                            <option value="4">4 Bedrooms or more</option>
                        </select>
                    </div>
                    <div className='selection-div selection-div-1  mt-1'>
                        <select name="minprice" defaultValue={'noValue'}>
                            <option value="noValue" hidden disabled>Minimum Price</option>
                            <option value="0">Show All</option>
                            <option value="100">Â£100 per week</option>
                            <option value="200">Â£200 per week</option>
                            <option value="300">Â£300 per week</option>
                            <option value="400">Â£400 per week</option>
                            <option value="500">Â£500 per week</option>
                            <option value="600">Â£600 per week</option>
                            <option value="750">Â£750 per week</option>
                            <option value="1000">Â£1,000 per week</option>
                            <option value="2000">Â£2,000 per week</option>
                            <option value="3000">Â£3,000 per week</option>
                            <option value="4000">Â£4,000 per week</option>
                            <option value="5000">Â£5,000 per week</option>
                            <option value="7500">Â£7,500 per week</option>
                        </select>
                    </div>
                    <div className='selection-div selection-div-1  mt-1'>
                        <select name="maxprice" defaultValue={'noValue'}>
                            <option value="noValue" hidden disabled>Maximum Price</option>
                            <option value="49999">Show All</option>
                            <option value="200">Â£200 per week</option>
                            <option value="300">Â£300 per week</option>
                            <option value="400">Â£400 per week</option>
                            <option value="500">Â£500 per week</option>
                            <option value="600">Â£600 per week</option>
                            <option value="750">Â£750 per week</option>
                            <option value="1000">Â£1,000 per week</option>
                            <option value="2000">Â£2,000 per week</option>
                            <option value="3000">Â£3,000 per week</option>
                            <option value="4000">Â£4,000 per week</option>
                            <option value="5000">Â£5,000 per week</option>
                            <option value="7500">Â£7,500 per week</option>
                            <option value="10000">Â£10,000 per week</option>
                        </select>
                    </div>
                    <div className='selection-div selection-div-1 mt-1'>
                        <select name="currency" defaultValue={'noValue'}>
                            <option value="noValue" hidden disabled>Show Price In </option>
                            <option value="GBP">UK Pounds (Â£)</option>
                            <option value="USD">US Dollars ($)</option>
                            <option value="EUR">Euros (â‚¬)</option>
                            <option value="CNY">Chinese Yuan (Â¥)</option>
                            <option value="HKD">Hong Kong Dollars ($)</option>
                            <option value="SGD">Singapore Dollars ($)</option>
                            <option value="JPY">Japanese Yen (Â¥)</option>
                            <option value="RUB">Russian Rubles (Ñ€ÑƒÐ±)</option>
                            <option value="AED">UAE Dirham (Ø¯.Ø¥)</option>
                            <option value="BHD">Bahraini Dinar (.Ø¯.Ø¨)</option>
                            <option value="KWD">Kuwaiti Dinar (.Ø¯.Ø¨)</option>
                            <option value="QAR">Qatari Riyal (Ø±.Ù‚)</option>
                            <option value="SAR">Saudi Riyal (Ø±.Ù‚)</option>
                            <option value="EGP">Egyptian Pounds (EÂ£)</option>
                        </select>
                    </div>
                    <div className='selection-div button-div-sub-header mt-2'>
                        <button type="submit" >Begin Search</button>
                    </div>
                </Container>
            </div>
            <CounterComp className='res-counter mt-3 mb-3' />
            <div className='main-home-div-2'>
                <Container >
                    <div className='main-hd-div'>
                        <div className='hd-div'>
                            <h1 data-aos-duration="700" data-aos="fade-right">It is one thing to meet</h1>
                            <h2 data-aos-duration="700" data-aos="fade-right">Expectations...</h2>
                            <h3 data-aos-duration="700" data-aos="fade-right">
                                It is one thing to meet
                                <span className='golden-color'>Expectations...</span>
                            </h3>
                        </div>
                        <div className='hd-div'>
                            <h1 data-aos-duration="700" data-aos="fade-left">It is another to</h1>
                            <h2 className='text-end' data-aos-duration="700" data-aos="fade-left">exceed them.</h2>
                            <h3 data-aos-duration="700" data-aos="fade-right">
                                It is another to
                                <span className='golden-color'>exceed them.</span>
                            </h3>
                        </div>
                    </div>
                    <div data-aos-duration="700" data-aos="zoom-in-up">
                        <p className='mt-3 text-center'>
                            What makes an agent a great agent? At {companyName} Property Consultants, we believe
                            it encompasses the ability to evoke curiosity. Nothing brings us greater satisfaction than
                            exceeding individuals' anticipations.
                        </p>
                        <p className='text-center'>
                            This principle permeates our entire organization, culminating in a cohesive assembly of fervent
                            specialists offering a novel perspective on the complete range of residential and commercial property
                            acquisitions and transactions.
                        </p>
                    </div>
                    <div className='seperator mt-5 mb-5'>
                        <div className='sub-seperator-div-1'></div>
                        <img src={SeperatorImg} alt="" />
                        <div className='sub-seperator-div-1'></div>
                    </div>
                    <div className='home-banner'>
                        <div data-aos-duration="700" data-aos="zoom-in-up">
                            <h1 className='golden-color'>{companyName}</h1>
                            <h3 className='white-color mt-4'>Helps Landlords Achieve More</h3>
                            <h2 className='white-color mb-4'>With Guaranteed Rent Services</h2>
                            <h1 className='white-color'>Call Us Now</h1>
                            <h1 className='white-color mt-4'>
                                +44 (0)795 130 206
                                <br />
                                +44 (0) 793 266 4441
                            </h1>
                        </div>
                    </div>
                    <div className='seperator mt-5 mb-5'>
                        <div className='sub-seperator-div-1'></div>
                        <img src={SeperatorImg} alt="" />
                        <div className='sub-seperator-div-1'></div>
                    </div>
                    <div className='home-banner home-banner-2'>
                        <div data-aos-duration="700" data-aos="zoom-in-up">
                            <h2 className='golden-color'>
                                {companyName} Guarantee's Landlords a rental income
                                regardless of tenants or not.
                            </h2>
                            <h1 className='golden-color mt-4'>
                                <span className='white-color'>0% </span> COMMISSION<span className='white-color'> - 0%</span>FEES
                            </h1>
                            <p className='white-color'>
                                The Estate Agency for the Landlord
                                <br />
                                We are based in, London
                                <br />
                                We help and landlords with effective property management solutions that help you grow your investment.</p>
                        </div>
                    </div>
                    <div className='seperator mt-5 mb-5'>
                        <div className='sub-seperator-div-1'></div>
                        <img src={SeperatorImg} alt="" />
                        <div className='sub-seperator-div-1'></div>
                    </div>
                    <div className='home-banner home-banner-3'>
                        <div className='form-main-div' data-aos-duration="700" data-aos="zoom-in-up">
                            <form action="">
                                <h1 className='white-color'>Need A Quote</h1>
                                <p className='golden-color'>
                                    We Will Call You Back
                                    <br />
                                    Free Valuation & Consultation On London Property.
                                </p>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className='white-color'
                                    placeholder='Full Name'
                                />
                                <input
                                    type="number"
                                    name="mobile"
                                    id="mobile"
                                    required
                                    className='white-color'
                                    placeholder='mobile'
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className='white-color'
                                    placeholder='Email'
                                />
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    required
                                    className='white-color'
                                    placeholder='Address'
                                />
                                <input
                                    type="number"
                                    name="postal"
                                    id="postal"
                                    required
                                    className='white-color'
                                    placeholder='Property Postal Code'
                                />
                                <input
                                    type="number"
                                    name="beds"
                                    id="beds"
                                    required
                                    className='white-color'
                                    placeholder='no of bedrooms'
                                />
                                <textarea placeholder='type Your Message here' />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className='seperator mt-5 mb-5'>
                        <div className='sub-seperator-div-1'></div>
                        <img src={SeperatorImg} alt="" />
                        <div className='sub-seperator-div-1'></div>
                    </div>
                    <div className='home-banner home-banner-4'>
                        <div>
                            <h1 data-aos-duration="700" data-aos="fade-right">
                                OUR LANDLORD SOLUTIONS
                            </h1>
                            <p className='golden-color'>
                                We make letting residential properties for London's
                                landlords easy. Let your property the smart way! Find out more
                                about our property management solutions for London Landlords.
                            </p>
                        </div>
                        <div className='main-home-cards-div'>
                            <div className='home-card-div me-1' data-aos-duration="700" data-aos="zoom-in">
                                <h2 className='white-color'>Guaranteed Rent Management</h2>
                                <p className='white-color'>We help landlords maximize their rental income through guaranteed rent.</p>
                                <button className='home-card-btn'>Our Landlord Solution</button>
                            </div>
                            <div className='home-card-div home-card-div-2 me-1' data-aos-duration="700" data-aos="zoom-in" >
                                <h2 className='white-color'>Residential Letting In London For Landlords</h2>
                                <p className='white-color'>Helping landlords collect rent and rent out properties with peace of mind. Letting properties the intelligent guaranteed way.</p>
                                <button className='home-card-btn'>Our Landlord Solution</button>
                            </div>
                            <div className='home-card-div home-card-div-3' data-aos-duration="700" data-aos="zoom-in">
                                <h2 className='white-color'>Complete Property Management & Repairs</h2>
                                <p className='white-color'>Get monthly income with peace of mind and allow us to service your property for you. Giving you peace of mind month after month, year after year.</p>
                                <button className='home-card-btn'>Property management</button>
                            </div>
                        </div>
                    </div>
                    <div className='seperator mt-5 mb-5'>
                        <div className='sub-seperator-div-1'></div>
                        <img src={SeperatorImg} alt="SeperatorImg" />
                        <div className='sub-seperator-div-1'></div>
                    </div>
                    <div className='home-banner home-banner-4 home-banner-5'>
                        <div className='benefit-section'>
                            <div className='benefit-sec-img'>
                                <img src={HouseImg} alt="house_img" className='house-img' data-aos-duration="700" data-aos="zoom-in" />
                            </div>
                            <div className='benefit-sec-text'>
                                <h3 className='golden-color' data-aos-duration="700" data-aos="fade-right">BENEFITS OF GUARANTEED RENTAL</h3>
                                <ul>
                                    <li>Prompt Rental Payment</li>
                                    <li>0% Commission</li>
                                    <li>No Rent Breaks - Rent Paid 365 Days</li>
                                    <li>Regular Inspections</li>
                                    <li>Lease 1 - 5 Years</li>
                                    <li>No Utility Bills or Council Tax</li>
                                </ul>
                            </div>
                        </div>
                        <h1 data-aos-duration="700" data-aos="fade-right">
                            WHY <span className='golden-color'>LUSH LET LONDON LTD INTERNATIONAL?</span>
                        </h1>
                        <div className='main-home-cards-div mt-3' data-aos-duration="700" data-aos="zoom-in">
                            <div className='benefit-card-div' data-aos-duration="700" data-aos="zoom-in" >
                                <div className='benefit-card-img-div'></div>
                                <h4 className='text-center'>Network & Connections</h4>
                                <p className='text-center'>
                                    With a large network across London, our team at {companyName}
                                    International have the knowledge and connections to help you find the
                                    perfect property.
                                </p>
                            </div>
                            <div className='benefit-card-div' data-aos-duration="700" data-aos="zoom-in">
                                <div className='benefit-card-img-div benefit-card-img-div-2'></div>
                                <h4 className='text-center'>Network & Connections</h4>
                                <p className='text-center'>
                                    With a large network across London, our team at {companyName}
                                    International have the knowledge and connections to help you find the
                                    perfect property.
                                </p>
                            </div>
                            <div className='benefit-card-div' data-aos-duration="700" data-aos="zoom-in">
                                <div className='benefit-card-img-div benefit-card-img-div-3'></div>
                                <h4 className='text-center'>Network & Connections</h4>
                                <p className='text-center'>
                                    With a large network across London, our team at {companyName}
                                    International have the knowledge and connections to help you find the
                                    perfect property.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='seperator mt-5 mb-5'>
                        <div className='sub-seperator-div-1'></div>
                        <img src={SeperatorImg} alt="" />
                        <div className='sub-seperator-div-1'></div>
                    </div>
                    <div className='home-banner home-banner-4 home-banner-5'>
                        <h1 data-aos-duration="700" data-aos="fade-right">
                            END TO END<span className='golden-color'> ASSISTANCE</span>
                        </h1>
                        <div className='main-home-cards-div mt-3' data-aos-duration="700" data-aos="zoom-in">
                            <div className='benefit-card-div' data-aos-duration="700" data-aos="zoom-in" >
                                <div className='benefit-card-img-div assist-card-img-div'></div>
                                <h4 className='text-center'>Search & Shortlisting</h4>
                                <p className='text-center'>
                                    Lacs of verified listing from reputed and
                                    trusted dealers.
                                </p>
                            </div>
                            <div className='benefit-card-div' data-aos-duration="700" data-aos="zoom-in">
                                <div className='benefit-card-img-div assist-card-img-div-2'></div>
                                <h4 className='text-center'>Site Visit</h4>
                                <p className='text-center'>
                                    Guided site visits by our experienced
                                    team managers.
                                </p>
                            </div>
                            <div className='benefit-card-div' data-aos-duration="700" data-aos="zoom-in">
                                <div className='benefit-card-img-div assist-card-img-div-3'></div>
                                <h4 className='text-center'>Take the Possession</h4>
                                <p className='text-center'>
                                    Commited guidance all the way
                                    till possession.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='seperator mt-5 mb-5'>
                        <div className='sub-seperator-div-1'></div>
                        <img src={SeperatorImg} alt="" />
                        <div className='sub-seperator-div-1'></div>
                    </div>
                </Container>
                <div className='home-banner home-banner-4 home-banner-6 mb-5'>
                    <Container>
                        <PropertiesSec />
                    </Container>
                </div>
                <Container>
                    <CarouselComp />
                </Container>
            </div>
        </div>
    )
}

export default HomePage