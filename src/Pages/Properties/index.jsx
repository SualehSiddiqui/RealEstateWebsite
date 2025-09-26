import { Container } from 'react-bootstrap';
import './style.css';
import SeperatorImg from '../../assets/Home/seperator-img.png';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import properties from '../../Data/Property.js';
import { Link, useParams } from 'react-router-dom';
import PropertiesSec from '../../Sections/properties.jsx'
import { Image } from 'antd';
import details from '../../Data/MajorDetails.js';

const PropertyPage = () => {
    // eslint-disable-next-line
    const params = useParams();
    const { index } = params;

    console.log(index);
    const { companyEmail } = details;

    const [propertyData, setPropertyData] = useState({
        name: '',
        price: '',
        images: [],
        text: '',
        bedrooms: '',
        bathrooms: '',
        furnished: '',
        floor: '',
        marble: '',
        parking: '',
    });

    useEffect(() => {
        fetchPropertyDetails(index);
    }, [index]);

    const fetchPropertyDetails = (index) => {
        if (properties[index]) {
            const propertyData = properties[index];
            setPropertyData({
                name: propertyData.name,
                price: propertyData.price,
                images: propertyData.images,
                text: propertyData.text,
                bedrooms: propertyData.bedrooms,
                bathrooms: propertyData.bathrooms,
                furnished: propertyData.furnished,
                floor: propertyData.floor,
                marble: propertyData.marble,
                parking: propertyData.parking,
            });
        };
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='main-body-div'>
            <div className='about-banner-div property-banner-div'></div>
            <Container className='about-text-container'>
                <div className='main-property-div'>
                    <div className='sub-property-div-1' data-aos-duration="700" data-aos="fade-right">
                        <h1>
                            {propertyData.name}
                        </h1>
                        <h2 className='golden-color'>
                            {propertyData.price}
                        </h2>
                        <div className='img-main-div'>
                            <img src={propertyData.images[0]} alt="main_img" />
                        </div>
                        <div className='small-img-main-div'>
                            {
                                propertyData.images.map((v, i) => {
                                    return (
                                        <div className='small-img-div' key={i}>
                                            <Image width={200} height={120} src={v} alt="sub_img" />
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='sub-property-div-2' data-aos-duration="700" data-aos="fade-left">
                        <Link className='enquire-button' to={'mailto:' + companyEmail}>
                            <button>Enquire about this property</button>
                        </Link>
                        <div className='features-div-main mt-3'>
                            {propertyData.bedrooms.show && <div className='feature-div'>{propertyData.bedrooms.number} Bedrooms</div>}
                            {propertyData.bathrooms.show && <div className='feature-div bathroom'>{propertyData.bathrooms.number} Bathrooms</div>}
                            {propertyData.furnished.show && <div className='feature-div furnished'>Furnished</div>}
                            {propertyData.floor.show && <div className='feature-div floor'>{propertyData.floor.number} Floor</div>}
                            {propertyData.marble.show && <div className='feature-div marble'>Marble Arch</div>}
                            {propertyData.parking.show && <div className='feature-div parking'>No Parking</div>}
                        </div>
                        <p>
                            {propertyData.text}
                        </p>
                    </div>
                </div>
                <div className='seperator mt-5 mb-5'>
                    <div className='sub-seperator-div-1'></div>
                    <img src={SeperatorImg} alt="SeperatorImg" />
                    <div className='sub-seperator-div-1'></div>
                </div>
                <PropertiesSec />
                <div className='seperator mt-5 mb-5'>
                    <div className='sub-seperator-div-1'></div>
                    <img src={SeperatorImg} alt="SeperatorImg" />
                    <div className='sub-seperator-div-1'></div>
                </div>
            </Container>
        </div>
    )
}
export default PropertyPage;