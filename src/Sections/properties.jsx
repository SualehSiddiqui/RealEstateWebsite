import './style.css'
import properties from '../Data/Property';
import { useNavigate } from "react-router-dom";


const PropertiesSec = () => {
    const navigate = useNavigate();
    const handleClick = (i) => {
        navigate(`/Properties/${i}`);
    }
    return (
        <>
            <h1 className='text-start' data-aos-duration="700" data-aos="fade-right">
                FEATURED <span className='golden-color'>PROPERTIES</span>
            </h1>
            <div className='main-property-cards-div mt-3'>
                {
                    properties.map((v, i) => {
                        return (
                            <div key={i} className='properties-card-div properties-card-div-1' onClick={() => handleClick(i)} data-aos-duration="700" data-aos="zoom-in">
                                <div className='img-div' style={{ backgroundImage: `url(../assets/Properties/${v.images[0]})` }}>
                                    <div className='sub-properties-card-div-1'></div>
                                    <div className='sub-properties-card-div-2'></div>
                                    <img src={v.images[0]} alt="" />
                                </div>
                                <p>
                                    {v.name}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PropertiesSec;