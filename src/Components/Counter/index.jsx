import "./style.css";
import Container from 'react-bootstrap/Container';

const CounterComp = (props) => {

    return (
        <div className="main-service mb-auto" {...props}>
            <Container className="service-container">
                <div className="counter-div">
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <p>No Letting Fee</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <p>Rent Paid On Time</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <p>No Rental Void Period</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <p>Regular Checks</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CounterComp;