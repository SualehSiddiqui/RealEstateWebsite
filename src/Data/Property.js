import details from './MajorDetails.js'
import { Link } from 'react-router-dom';

import Property1Image1 from "../assets/Properties/FirstProperty/1.jpg";
import Property1Image2 from "../assets/Properties/FirstProperty/2.jpg";
import Property1Image3 from "../assets/Properties/FirstProperty/3.jpg";
import Property1Image4 from "../assets/Properties/FirstProperty/4.jpg";
import Property1Image5 from "../assets/Properties/FirstProperty/5.jpg";
import Property1Image6 from "../assets/Properties/FirstProperty/6.jpg";
import Property1Image7 from "../assets/Properties/FirstProperty/7.jpg";
import Property1Image8 from "../assets/Properties/FirstProperty/8.jpg";
import Property1Image9 from "../assets/Properties/FirstProperty/9.jpg";

import Property2Image1 from "../assets/Properties/SecondProperty/1.jpg";
import Property2Image2 from "../assets/Properties/SecondProperty/2.jpg";
import Property2Image3 from "../assets/Properties/SecondProperty/3.jpg";
import Property2Image4 from "../assets/Properties/SecondProperty/4.jpg";
import Property2Image5 from "../assets/Properties/SecondProperty/5.jpg";
import Property2Image6 from "../assets/Properties/SecondProperty/6.jpg";
import Property2Image7 from "../assets/Properties/SecondProperty/7.jpg";
import Property2Image8 from "../assets/Properties/SecondProperty/8.jpg";
import Property2Image9 from "../assets/Properties/SecondProperty/9.jpg";

import Property3Image1 from "../assets/Properties/ThirdProperty/1.jpg";
import Property3Image2 from "../assets/Properties/ThirdProperty/2.jpg";
import Property3Image3 from "../assets/Properties/ThirdProperty/3.jpg";
import Property3Image4 from "../assets/Properties/ThirdProperty/4.jpg";
import Property3Image5 from "../assets/Properties/ThirdProperty/5.jpg";
import Property3Image6 from "../assets/Properties/ThirdProperty/6.jpg";
import Property3Image7 from "../assets/Properties/ThirdProperty/7.jpg";
import Property3Image8 from "../assets/Properties/ThirdProperty/8.jpg";
import Property3Image9 from "../assets/Properties/ThirdProperty/9.jpg";

import Property4Image1 from "../assets/Properties/FourthProperty/1.jpg";
import Property4Image2 from "../assets/Properties/FourthProperty/2.jpg";
import Property4Image3 from "../assets/Properties/FourthProperty/3.jpg";
import Property4Image4 from "../assets/Properties/FourthProperty/4.jpg";
import Property4Image5 from "../assets/Properties/FourthProperty/5.jpg";
import Property4Image6 from "../assets/Properties/FourthProperty/6.jpg";
import Property4Image7 from "../assets/Properties/FourthProperty/7.jpg";
import Property4Image8 from "../assets/Properties/FourthProperty/8.jpg";
import Property4Image9 from "../assets/Properties/FourthProperty/9.jpg";

const properties = [
    {
        name: 'Great Cumberland Place, Marble Arch',
        price: '£6,478/ month | £1,495 / week',
        images: [
            Property1Image1,
            Property1Image2,
            Property1Image3,
            Property1Image4,
            Property1Image5,
            Property1Image6,
            Property1Image7,
            Property1Image8,
            Property1Image9,
        ],
        text: <>
            <b> Four-Bedroom Apartment in London's Prestigious West End Porter Service Air Conditioning Steps from Hyde Park & Oxford Street</b>

            <p>
                Golden Eagle International is delighted to present this expansive four-bedroom apartment, situated on the fourth floor of a distinguished period building in the heart of London's West End. Just moments from Marble Arch, Hyde Park, Oxford Street, and Park Lane, this residence offers an unparalleled blend of elegance, comfort, and convenience.
            </p>

            <b>Property Highlights</b>
            <ul>
                <li>
                    Four generously sized bedrooms, each furnished with modern décor and ample storage
                </li>
                <li>
                    Three stylish bathrooms, designed for privacy and functionality
                </li>
                <li>
                    Spacious lounge ideal for entertaining or unwinding in comfort
                </li>
                <li>
                    Fully equipped kitchen with integrated appliances and sleek finishes
                </li>
                <li>
                    Air conditioning and gas central heating for year-round climate control
                </li>
                <li>
                    Ultra-fast Wi-Fi available on request
                </li>
                <li>
                    Located within a classic period building featuring modern elevators and professional porter/concierge service
                </li>
            </ul>

            <b>Prime Location</b>
            <ul>
                <li>
                    Steps from Oxford Street's iconic shopping, including Selfridges
                </li>
                <li>
                    Walking distance to Hyde Park, Park Lane, and Marble Arch
                </li>
                <li>
                    Surrounded by world-class restaurants, luxury boutiques, and cultural landmarks
                </li>
            </ul>

            <b>Excellent Transport Links</b>
            <ul>
                <li>
                    Marble Arch Station - 3-minute walk
                </li>
                <li>
                    Oxford Circus Station - 5-minute walk
                </li>
                <li>
                    Bond Street Station - 7-minute walk
                </li>
                <li>
                    Paddington Station - 10-minute drive, offering direct access to Heathrow via the Heathrow Express
                </li>
                <li>
                    This rare West End residence is ideal for families, professionals, or international clients seeking spacious, turnkey accommodation in one of London's most prestigious addresses.
                </li>
            </ul>


            <b>For Enquiries & Viewings</b>
            <br />
            Call  <Link to={'tel:' + details.companyPhone1} className='maintenance-link' > {details.companyPhone1} </Link>
            <br />
            Email  <Link to={'mailto:' + details.companyEmail} className='maintenance-link' > {details.companyEmail} </Link>
        </>,
        bedrooms: {
            show: true,
            number: 4
        },
        bathrooms: {
            show: true,
            number: 3
        },
        furnished: {
            show: true,
        },
        floor: {
            show: true,
            number: '4th'
        },
        marble: {
            show: true,
        },
        parking: {
            show: true,
        },

    },
    {
        name: 'Gloucester Place, Marylebone',
        price: '£2,405/ month | £555 / week',
        images: [
            Property2Image1,
            Property2Image2,
            Property2Image3,
            Property2Image4,
            Property2Image5,
            Property2Image6,
            Property2Image7,
            Property2Image8,
            Property2Image9,
        ],
        text: <>
            <b>
                Refined London Residence - One-Bedroom Apartment - Interior-Designed & Fully Furnished
            </b>

            <p>
                Indulge in boutique elegance with this exquisitely appointed one-bedroom apartment in Marylebone, nestled within a handsome period building in the heart of Marylebone. Thoughtfully situated on the lower-ground floor, the residence has been impeccably refurbished to offer a seamless blend of modern comfort and timeless charm—ideal for professionals and international residents seeking prestige, peace, and proximity.
            </p>

            <b>Property Details</b>
            <ul>
                <li>
                    Fully interior-designed and styled to an exceptional standard
                </li>
                <li>
                    Generous open-plan reception room with sleek porcelain tiled flooring
                </li>
                <li>
                    Contemporary bespoke kitchen with high-grade integrated appliances and composite stone surfaces
                </li>
                <li>
                    Tranquil double bedroom furnished with refined accents
                </li>
                <li>
                    Elegant fully tiled shower room with chic designer fixtures
                </li>
                <li>
                    Central heating ensuring efficient year-round comfort
                </li>
                <li>
                    LCD television with satellite channels included
                </li>
                <li>
                    Ultra-fast Wi-Fi available upon request
                </li>
                <li>
                    Secure entry with 24-hour CCTV surveillance
                </li>
            </ul>

            <b>A Marylebone Lifestyle</b>
            <p>
                Perfectly positioned within walking distance of Hyde Park, Oxford Street, and Baker Street station, this address places London's most celebrated boutiques, Michelin-starred restaurants, and cultural landmarks at your doorstep. From world-class shopping to leisurely park strolls and effortless city commutes—luxury here is not just a feature, but a way of life.
            </p>

            <b>For Enquiries & Viewings</b>
            <br />
            Call  <Link to={'tel:' + details.companyPhone1} className='maintenance-link' > {details.companyPhone1} </Link>
            <br />
            Email  <Link to={'mailto:' + details.companyEmail} className='maintenance-link' > {details.companyEmail} </Link>
        </>,
        bedrooms: {
            show: true,
            number: 1
        },
        bathrooms: {
            show: true,
            number: 1
        },
        furnished: {
            show: true,
        },
        floor: {
            show: true,
            number: '-1st'
        },
        marble: {
            show: true,
        },
        parking: {
            show: true,
        },

    },
    {
        name: 'Great Cumberland Place, Marble Arch',
        price: '£5,850/ month | £1,350 / week',
        images: [
            Property3Image1,
            Property3Image2,
            Property3Image3,
            Property3Image4,
            Property3Image5,
            Property3Image6,
            Property3Image7,
            Property3Image8,
            Property3Image9,
        ],
        text: <>
            <b>
                Elegant 4-Bedroom Apartment in Prime Oxford Street Location
            </b>

            <p>
                Golden Eagle International is delighted to present this beautifully refurbished 4-bedroom apartment, ideally situated just off Oxford Street in one of London's most vibrant areas. This residence offers the perfect blend of contemporary design and comfort, with world-class shopping, dining, and transport options just steps away.
            </p>

            <b>Key Features</b>
            <ul>
                <li>
                    <b>Prime Location: </b> Enjoy being in the heart of the city with Oxford Street, Hyde Park, and Marble Arch Station all nearby.
                </li>
                <li>
                    <b>Spacious Interiors: </b> Four generously sized bedrooms and a well-designed open-plan living area ensure ample space and
                </li>
                <li>
                    <b>Fully Furnished: </b> Move in and start living with high-quality, modern furniture
                </li>
                <li>
                    <b>Air Conditioning & Refurbished Design: </b> Stay cool and enjoy the sleek, newly updated interiors with contemporary fixtures and fresh finishes.
                </li>
                <li>
                    <b>Well-Equipped Kitchen: </b> Modern appliances and ample storage make it ideal for cooking and entertaining.
                </li>
                <li>
                    <b>Convenient Half Bathroom: </b> In addition to the main bathrooms, a guest-friendly half bath adds extra convenience.
                </li>
                <li>
                    <b>Building Amenities: </b> The building is serviced by modern elevators to every floor, ensuring easy access.
                </li>
            </ul>

            <b>Contact Information:</b>
            <br />
            Phone  <Link to={'tel:' + details.companyPhone1} className='maintenance-link' > {details.companyPhone1} </Link>
            <br />
            Email  <Link to={'mailto:' + details.companyEmail} className='maintenance-link' > {details.companyEmail} </Link>
        </>,
        bedrooms: {
            show: true,
            number: 4
        },
        bathrooms: {
            show: true,
            number: 1.5
        },
        furnished: {
            show: true,
        },
        floor: {
            show: true,
            number: '3rd'
        },
        marble: {
            show: true,
        },
        parking: {
            show: true,
        },

    },
    {
        name: 'Great Cumberland Place, Marble Arch',
        price: '£5,850/ month | £1,350 / week',
        images: [
            Property4Image1,
            Property4Image2,
            Property4Image3,
            Property4Image4,
            Property4Image5,
            Property4Image6,
            Property4Image7,
            Property4Image8,
            Property4Image9,
        ],
        text: <>
            <b>
                Exquisite Two-Bedroom, Two-Bathroom Apartment – Private Terrace & Boutique Interiors – Marylebone W1
            </b>

            <p>
                Golden Eagle International is proud to present this beautifully curated two-bedroom, two-bathroom residence, gracefully positioned on the ground floor of an elegant, impeccably maintained period building in the heart of Marylebone. Newly refurbished to exacting standards, this turnkey home offers a seamless blend of classic proportions and contemporary design—moments from Hyde Park, Baker Street, and the world-renowned boutiques of Oxford Street.
            </p>

            <b>Residence Highlights</b>
            <ul>
                <li>
                    <b>Interior-Designed Luxury: </b> Refined living spaces featuring bespoke furnishings, ambient lighting, and period-style sash windows that frame the home’s timeless charm
                </li>
                <li>
                    <b>GraDgenerously proportioned lounge designed for both relaxed living and elegant entertaining</b>
                </li>
                <li>
                    <b>Fully Furnished: </b> Fully integrated with modern appliances, chic cabinetry, and polished stone worktops—ideal for culinary flair
                </li>
                <li>
                    <b>Air Conditioning & Refurbished Design: </b> Stay cool and enjoy the sleek, newly updated interiors with contemporary fixtures and fresh finishes.
                </li>
                <li>
                    <b>Two Tranquil Bedrooms: </b> Generous and thoughtfully appointed for comfort and privacy, with tailored storage solutions and soft textiles
                </li>
                <li>
                    <b>Two Elegant Bathrooms: </b> Featuring a fully tiled walk-in shower and stylish fittings, delivering boutique hotel-level quality
                </li>
            </ul>

            <b>Refined Comforts & Features</b>
            <ul>
                <li>Individually controlled air-conditioning for optimal year-round climate</li>
                <li>Access to a <b><i>private terrace</i></b>—a rare and peaceful escape in the heart of the city</li>
                <li>Secure entry with CCTV-monitored communal areas</li>
                <li><b>Lift access to all floors</b> and professionally maintained interiors</li>
                <li>Ultra-fast Wi-Fi available on request</li>
            </ul>

            <b>An Enviable Lifestyle Address</b>
            <p>
                Located in one of London’s most desirable postcodes, this residence is within strolling distance of Regent’s Park, Marylebone High Street, Harley Street clinics, and direct transport links across Central London and beyond. Perfect for corporate residents, international tenants, or discerning individuals seeking elegant city living with a boutique sensibility.
            </p>

            <b>Contact Information:</b>
            <br />
            Phone  <Link to={'tel:' + details.companyPhone1} className='maintenance-link' > {details.companyPhone1} </Link>
            <br />
            Email  <Link to={'mailto:' + details.companyEmail} className='maintenance-link' > {details.companyEmail} </Link>
        </>,
        bedrooms: {
            show: true,
            number: 2
        },
        bathrooms: {
            show: true,
            number: 2
        },
        furnished: {
            show: true,
        },
        floor: {
            show: true,
            number: '0th'
        },
        marble: {
            show: false,
        },
        parking: {
            show: true,
        },

    },
]

export default properties;