import './style.css';
import Container from 'react-bootstrap/Container';
import { TypeAnimation } from 'react-type-animation';

const NotFoundPage = () => {
    return (
        <>
            <div className="not-found-main">
                <Container className="service-container">
                    <div className="notfound-div">
                        <h1>
                            <TypeAnimation
                                sequence={[
                                    'The page can’t be found.'
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={0}
                                cursor={false}
                            />
                        </h1>
                        <p>It looks like nothing was found at this location.</p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default NotFoundPage;