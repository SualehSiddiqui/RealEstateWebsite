import './style.css';
import { Carousel } from 'antd';
import details from '../../Data/MajorDetails';

const CorouselComp = () => {
    const { companyName } = details;
    return (
        <div>
            <h1 className='carousel-hd' data-aos-duration="700" data-aos="fade-right">CLIENT <span className='golden-color'>TESTIMONIALS</span></h1>
            <Carousel autoplay className='carousel-div' fade speed={1000} autoplaySpeed={5000}>
                <div className='carousel-div'>
                    <div className='client-statement-div'>
                        <q>
                            I rented a property from {companyName} for the past 2 years in Gloucester Place, W1. I
                            would highly recommend {companyName}, the service and staff are both exceptionally helpful
                            and professional. They will ensure they find the right property to meet your requirements
                            at reasonable prices. The property was amazing and the process very quick to rent. The
                            company is the best I have dealt with in London.
                        </q>
                    </div>
                    <p className='mt-5'>Rajiv Varma</p>
                    <p>Director, Veetee Foods Ltd</p>
                </div>
                <div className='carousel-div'>
                    <div className='client-statement-div'>
                        <q>
                            With {companyName}....you're assured to receive the highest level of customer service...every time...thanks again guys!â€
                        </q>
                    </div>
                    <p className='mt-5'>Saba Saleem</p>
                    <p>Merrill Lynch Human Resources EMEA</p>
                </div>
                <div className='carousel-div'>
                    <div className='client-statement-div'>
                        <q>
                            Rented from {companyName} recently. Would just like to thank the team for a
                            smooth experience. Having rented in London with a variety of agents in the
                            past, was great to liaise with honest and efficient people.
                        </q>
                    </div>
                    <p className='mt-5'>Anirudh Joshi</p>
                    <p>Fixed Income Vice President, Barclays Capital London</p>
                </div>
                <div className='carousel-div'>
                    <div className='client-statement-div'>
                        <q>
                            I have found working with {companyName} professional team a very pleasant and
                            efficient experience. I hope to work with them in the many years to come,
                            and I highly recommend them to anyone looking to purchase, sell, rent, or
                            let property in London.
                        </q>
                    </div>
                    <p className='mt-5'>Abdullah Coumine</p>
                    <p>National Bank of Kuwait</p>
                </div>
                <div className='carousel-div'>
                    <div className='client-statement-div'>
                        <q>
                            rented a property from {companyName} for the past 2 years in Gloucester Place, W1. I
                            would highly recommend {companyName}, the service and staff are both exceptionally helpful
                            and professional. They will ensure they find the right property to meet your
                            requirements at reasonable prices. The property was amazing and the process very
                            quick to rent. The company is the best I have dealt with in London.
                        </q>
                    </div>
                    <p className='mt-5'>Meera Shah</p>
                    <p>Vice President, Barclays Plc</p>
                </div>
            </Carousel>
        </div>
    )
};
export default CorouselComp;