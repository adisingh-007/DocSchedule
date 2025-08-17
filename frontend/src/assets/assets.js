import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Kumar',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kumar has extensive experience in family medicine and preventive healthcare. He is dedicated to providing compassionate care to patients of all ages with a focus on holistic wellness and traditional Indian medical practices.',
        fees: 50,
        address: {
            line1: 'Sector 15, Dwarka',
            line2: 'New Delhi - 110075'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Sharma specializes in women\'s health and reproductive medicine. She combines modern medical practices with traditional Ayurvedic principles to provide comprehensive care for women at all stages of life.',
        fees: 60,
        address: {
            line1: 'Banjara Hills, Road No. 12',
            line2: 'Hyderabad - 500034'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Amit Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Patel is a skilled dermatologist with expertise in treating various skin conditions. He believes in combining modern dermatological treatments with natural remedies for optimal skin health.',
        fees: 30,
        address: {
            line1: 'Koregaon Park, Lane 5',
            line2: 'Pune - 411001'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Sunita Reddy',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Reddy is passionate about child healthcare and development. She provides gentle, family-centered care with emphasis on preventive medicine and healthy lifestyle habits for children.',
        fees: 40,
        address: {
            line1: 'Anna Nagar, 2nd Avenue',
            line2: 'Chennai - 600040'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Vikram Singh',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Singh specializes in neurological disorders and brain health. He combines advanced medical techniques with yoga and meditation practices for comprehensive neurological care.',
        fees: 50,
        address: {
            line1: 'Civil Lines, Mall Road',
            line2: 'Chandigarh - 160001'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Kavita Joshi',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Joshi is an experienced neurologist with expertise in treating complex neurological conditions. She integrates modern medicine with traditional Indian healing practices.',
        fees: 50,
        address: {
            line1: 'Satellite, SG Highway',
            line2: 'Ahmedabad - 380015'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Arjun Gupta',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gupta provides comprehensive primary healthcare services with a focus on preventive medicine. He believes in treating patients with compassion and incorporating wellness practices.',
        fees: 50,
        address: {
            line1: 'Lajpat Nagar, Central Market',
            line2: 'New Delhi - 110024'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Meera Iyer',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Iyer is dedicated to women\'s health and wellness. She provides personalized care combining modern gynecological practices with traditional Indian medicine approaches.',
        fees: 60,
        address: {
            line1: 'Jayanagar, 4th Block',
            line2: 'Bangalore - 560011'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Rohit Malhotra',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Malhotra specializes in dermatology and cosmetic treatments. He focuses on natural skincare solutions and combines modern treatments with Ayurvedic principles.',
        fees: 30,
        address: {
            line1: 'Connaught Place, Block A',
            line2: 'New Delhi - 110001'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Anjali Verma',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Verma is committed to providing excellent pediatric care. She emphasizes on nutrition, immunization, and overall child development with a gentle, caring approach.',
        fees: 40,
        address: {
            line1: 'Gomti Nagar, Sector 12',
            line2: 'Lucknow - 226010'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Sanjay Agarwal',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Agarwal is an expert in neurological disorders and brain health. He integrates modern neurology with traditional Indian practices like yoga and meditation for holistic treatment.',
        fees: 50,
        address: {
            line1: 'Park Street, Near Metro',
            line2: 'Kolkata - 700016'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Deepika Nair',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Nair specializes in neurological care with a focus on patient-centered treatment. She combines evidence-based medicine with traditional healing approaches.',
        fees: 50,
        address: {
            line1: 'Marine Drive, Nariman Point',
            line2: 'Mumbai - 400021'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Manoj Tiwari',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Tiwari provides comprehensive family medicine services. He believes in preventive healthcare and incorporates traditional Indian wellness practices in his treatment approach.',
        fees: 50,
        address: {
            line1: 'Hazratganj, Near GPO',
            line2: 'Lucknow - 226001'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Pooja Khanna',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Khanna is dedicated to women\'s reproductive health and wellness. She provides compassionate care with a focus on natural healing and modern medical practices.',
        fees: 60,
        address: {
            line1: 'Vasant Kunj, Sector C',
            line2: 'New Delhi - 110070'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Ravi Chandra',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Chandra is a young and enthusiastic dermatologist. He focuses on natural skincare treatments and combines modern dermatology with traditional Ayurvedic remedies.',
        fees: 30,
        address: {
            line1: 'Jubilee Hills, Road No. 36',
            line2: 'Hyderabad - 500033'
        }
    },
]