import { Container } from 'react-bootstrap';
import './style.css';
import SeperatorImg from '../../assets/Home/seperator-img.png';
import AOS from 'aos';
import { useEffect } from 'react';
import properties from '../../Data/Property.js';
import { useSearchParams } from 'react-router-dom';
import PropertiesSec from '../../Sections/properties.jsx'
import { Image } from 'antd';


const PropertyManagementPage = () => {
    // eslint-disable-next-line
    let [searchParams, setSearchParams] = useSearchParams();
    const index = searchParams.get('index') || 0;
    const { name, price, images, text } = properties[index];
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='main-body-div'>
            <div className='about-banner-div property-banner-div'></div>
            <Container className='about-text-container'>
                <div className='main-property-div'>
                    <div className='sub-property-div-1' data-aos-duration="700" data-aos="fade-right">
                        <h1>
                            {name}
                        </h1>
                        <h2 className='golden-color'>
                            {price}
                        </h2>
                        <div className='img-main-div'>
                            <img src={require(`../../assets/Properties/${images[0]}`)} alt="main_img" />
                        </div>
                        <div className='small-img-main-div'>
                            {
                                images.map((v, i) => {
                                    return (
                                        <div className='small-img-div' key={i}>
                                            <Image src={require(`../../assets/Properties/${v}`)} alt="sub_img" />
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='sub-property-div-2' data-aos-duration="700" data-aos="fade-left">
                        <button>Enquire about this property</button>
                        <div className='features-div-main mt-3'>
                            <div className='feature-div'>4 Bedrooms</div>
                            <div className='feature-div bathroom'>2 Bathrooms</div>
                            <div className='feature-div furnished'>Furnished</div>
                            <div className='feature-div floor'>1st Floor</div>
                            <div className='feature-div marble'>Marble Arch</div>
                            <div className='feature-div parking'>No Parking</div>
                        </div>
                        <p>
                            {text}
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
export default PropertyManagementPage;