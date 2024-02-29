import { Container } from 'react-bootstrap';
import './style.css';
import SeperatorImg from '../../assets/Home/seperator-img.png'
import AOS from 'aos';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';


function createData(service, mangement, letting) {
    return { service, mangement, letting };
}

const rows = [
    createData('Photography (Full colour photos, 360° tours, interactive floorplans etc)', true, true),
    createData('Comprehensive marketing', true, true),
    createData('Finding a tenant', true, true),
    createData('Obtaining references', true, true),
    createData('Drawing up the tenancy agreement', true, true),
    createData('Organising electrical safety inspection', true, true),
    createData('Organising gas safety inspection', true, true),
    createData('Arranging the check-in of the tenant at the start of the tenancy', true, true),
    createData('Collection of rent', true, true),
    createData('24-hour call out service', true, false),
    createData('Arranging repairs and maintenance', true, false),
    createData('Arranging payment of outgoings', true, false),
    createData('Online statements', true, false),
    createData('Advising on deposit deductions', true, false),
    createData('Managing the check-out process', true, false),
    createData('Keyholding service', true, false),
    createData('Transfer of utilities', true, false),
    createData('Management while the property is vacant in-between tenancies', true, false),
];

const PropertyPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='main-body-div'>
            <div className='about-banner-div'></div>
            <Container className='about-text-container'>
                <div>
                    <h1 className='text-uppercase about-text-container-h1'>
                        UNTRADITIONAL&nbsp;
                        <span className='golden-color fst-italic'>THINKING...</span>
                    </h1>
                    <h1 className='text-uppercase about-text-container-h1-2'>
                        HAS A TRADITION OF&nbsp;
                        <span className='golden-color fst-italic'>SUCCESS</span>
                    </h1>
                    <p className='text-center mt-4 mb-5'>
                        Although we've been honing our craft for over three decades, there are no ivory towers in sight.
                        Each of our clients' properties holds the same significance as our own. That's why our friendly
                        team prides itself on being candid, adaptable, and innovative.</p>
                </div>
                <div className='text-center about-text'>
                    PROPERTY&nbsp;
                    <span className='golden-color'>
                        MANAGEMENT
                    </span>
                </div>
                <div className='line-div'></div>
                <ul className='mb-5'>
                    <li>
                        At L-Four Properties, we take great pride in overseeing one of the most expansive
                        property portfolios among independent estate agents in London. From chic studio apartments
                        in Marylebone to luxurious penthouses in Belgravia, and from grand mansions to bustling
                        shop parades, our diverse portfolio caters to a wide array of property needs.
                    </li>
                    <li>
                        Our management team boasts prestigious technical awards from the National Association of Estate
                        Agents, coupled with extensive legal training in contractual compliance. With a deep understanding
                        of rental property laws and procedures, they ensure seamless management processes.
                    </li>
                    <li>
                        Each property undergoes a meticulous assessment to tailor our services according to its unique requirements.
                        We prioritize proactive maintenance, conducting monthly or quarterly checks to nip potential issues in the bud.
                    </li>
                    <li>
                        Safety certifications are promptly obtained as legally mandated, while utility contracts undergo annual reviews
                        to secure the best value for our clients.
                    </li>
                    <li>
                        Below, discover some of the compelling benefits of entrusting your property to L-Four Properties:
                    </li>
                </ul>
                <div>
                    <Table data-aos-duration="700" data-aos="zoom-in-up">
                        <thead>
                            <tr>
                                <th className='text-capitalize table-head table-head-1 text-center align-middle'>Service</th>
                                <th className='text-capitalize table-head table-head-2 text-center align-middle'>Lettings Management Service</th>
                                <th className='text-capitalize table-head table-head-3 text-center align-middle'>Lettings Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rows.map((v, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className='tick-icon-table'>{v.service}</td>
                                            <td className='text-center align-middle tick-icon-table'>{v.mangement ? '✔' : ''}</td>
                                            <td className='text-center align-middle tick-icon-table'>{v.letting ? '✔' : ''}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
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
export default PropertyPage;