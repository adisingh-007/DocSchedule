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
        name: 'डॉ. राजेश कुमार',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'डॉ. कुमार के पास पारिवारिक चिकित्सा और निवारक स्वास्थ्य देखभाल में व्यापक अनुभव है। वे सभी उम्र के मरीजों को समग्र कल्याण और पारंपरिक भारतीय चिकित्सा पद्धतियों पर ध्यान देने के साथ दयालु देखभाल प्रदान करने के लिए समर्पित हैं।',
        fees: 500,
        address: {
            line1: 'सेक्टर 15, द्वारका',
            line2: 'नई दिल्ली - 110075'
        }
    },
    {
        _id: 'doc2',
        name: 'डॉ. प्रिया शर्मा',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'डॉ. शर्मा महिलाओं के स्वास्थ्य और प्रजनन चिकित्सा में विशेषज्ञ हैं। वे जीवन के सभी चरणों में महिलाओं के लिए व्यापक देखभाल प्रदान करने के लिए आधुनिक चिकित्सा पद्धतियों को पारंपरिक आयुर्वेदिक सिद्धांतों के साथ जोड़ती हैं।',
        fees: 600,
        address: {
            line1: 'बंजारा हिल्स, रोड नं. 12',
            line2: 'हैदराबाद - 500034'
        }
    },
    {
        _id: 'doc3',
        name: 'डॉ. अमित पटेल',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'डॉ. पटेल विभिन्न त्वचा रोगों के इलाज में विशेषज्ञता रखने वाले एक कुशल त्वचा विशेषज्ञ हैं। वे इष्टतम त्वचा स्वास्थ्य के लिए आधुनिक त्वचा विज्ञान उपचार को प्राकृतिक उपचार के साथ जोड़ने में विश्वास करते हैं।',
        fees: 300,
        address: {
            line1: 'कोरेगांव पार्क, लेन 5',
            line2: 'पुणे - 411001'
        }
    },
    {
        _id: 'doc4',
        name: 'डॉ. सुनीता रेड्डी',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'डॉ. रेड्डी बाल स्वास्थ्य देखभाल और विकास के बारे में भावुक हैं। वे बच्चों के लिए निवारक चिकित्सा और स्वस्थ जीवन शैली की आदतों पर जोर देने के साथ कोमल, पारिवारिक-केंद्रित देखभाल प्रदान करती हैं।',
        fees: 400,
        address: {
            line1: 'अन्ना नगर, द्वितीय एवेन्यू',
            line2: 'चेन्नई - 600040'
        }
    },
    {
        _id: 'doc5',
        name: 'डॉ. विक्रम सिंह',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'डॉ. सिंह न्यूरोलॉजिकल विकार और मस्तिष्क स्वास्थ्य में विशेषज्ञ हैं। वे व्यापक न्यूरोलॉजिकल देखभाल के लिए उन्नत चिकित्सा तकनीकों को योग और ध्यान प्रथाओं के साथ जोड़ते हैं।',
        fees: 500,
        address: {
            line1: 'सिविल लाइन्स, मॉल रोड',
            line2: 'चंडीगढ़ - 160001'
        }
    },
    {
        _id: 'doc6',
        name: 'डॉ. कविता जोशी',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'डॉ. जोशी जटिल न्यूरोलॉजिकल स्थितियों के इलाज में विशेषज्ञता रखने वाली एक अनुभवी न्यूरोलॉजिस्ट हैं। वे आधुनिक चिकित्सा को पारंपरिक भारतीय उपचार प्रथाओं के साथ एकीकृत करती हैं।',
        fees: 500,
        address: {
            line1: 'सैटेलाइट, एसजी हाईवे',
            line2: 'अहमदाबाद - 380015'
        }
    },
    {
        _id: 'doc7',
        name: 'डॉ. अर्जुन गुप्ता',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'डॉ. गुप्ता निवारक चिकित्सा पर ध्यान देने के साथ व्यापक प्राथमिक स्वास्थ्य सेवाएं प्रदान करते हैं। वे मरीजों का दयालुता से इलाज करने और कल्याण प्रथाओं को शामिल करने में विश्वास करते हैं।',
        fees: 500,
        address: {
            line1: 'लाजपत नगर, सेंट्रल मार्केट',
            line2: 'नई दिल्ली - 110024'
        }
    },
    {
        _id: 'doc8',
        name: 'डॉ. मीरा अय्यर',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'डॉ. अय्यर महिलाओं के स्वास्थ्य और कल्याण के लिए समर्पित हैं। वे आधुनिक स्त्री रोग प्रथाओं को पारंपरिक भारतीय चिकित्सा दृष्टिकोण के साथ जोड़कर व्यक्तिगत देखभाल प्रदान करती हैं।',
        fees: 600,
        address: {
            line1: 'जयनगर, चौथा ब्लॉक',
            line2: 'बैंगलोर - 560011'
        }
    },
    {
        _id: 'doc9',
        name: 'डॉ. रोहित मल्होत्रा',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'डॉ. मल्होत्रा त्वचा विज्ञान और कॉस्मेटिक उपचार में विशेषज्ञ हैं। वे प्राकृतिक त्वचा देखभाल समाधानों पर ध्यान केंद्रित करते हैं और आधुनिक उपचार को आयुर्वेदिक सिद्धांतों के साथ जोड़ते हैं।',
        fees: 300,
        address: {
            line1: 'कनॉट प्लेस, ब्लॉक ए',
            line2: 'नई दिल्ली - 110001'
        }
    },
    {
        _id: 'doc10',
        name: 'डॉ. अंजलि वर्मा',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'डॉ. वर्मा उत्कृष्ट बाल चिकित्सा देखभाल प्रदान करने के लिए प्रतिबद्ध हैं। वे कोमल, देखभाल करने वाले दृष्टिकोण के साथ पोषण, टीकाकरण और समग्र बाल विकास पर जोर देती हैं।',
        fees: 400,
        address: {
            line1: 'गोमती नगर, सेक्टर 12',
            line2: 'लखनऊ - 226010'
        }
    },
    {
        _id: 'doc11',
        name: 'डॉ. संजय अग्रवाल',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'डॉ. अग्रवाल न्यूरोलॉजिकल विकार और मस्तिष्क स्वास्थ्य के विशेषज्ञ हैं। वे समग्र उपचार के लिए आधुनिक न्यूरोलॉजी को योग और ध्यान जैसी पारंपरिक भारतीय प्रथाओं के साथ एकीकृत करते हैं।',
        fees: 500,
        address: {
            line1: 'पार्क स्ट्रीट, मेट्रो के पास',
            line2: 'कोलकाता - 700016'
        }
    },
    {
        _id: 'doc12',
        name: 'डॉ. दीपिका नायर',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'डॉ. नायर रोगी-केंद्रित उपचार पर ध्यान देने के साथ न्यूरोलॉजिकल देखभाल में विशेषज्ञ हैं। वे साक्ष्य-आधारित चिकित्सा को पारंपरिक उपचार दृष्टिकोण के साथ जोड़ती हैं।',
        fees: 500,
        address: {
            line1: 'मरीन ड्राइव, नरीमन पॉइंट',
            line2: 'मुंबई - 400021'
        }
    },
    {
        _id: 'doc13',
        name: 'डॉ. मनोज तिवारी',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'डॉ. तिवारी व्यापक पारिवारिक चिकित्सा सेवाएं प्रदान करते हैं। वे निवारक स्वास्थ्य देखभाल में विश्वास करते हैं और अपने उपचार दृष्टिकोण में पारंपरिक भारतीय कल्याण प्रथाओं को शामिल करते हैं।',
        fees: 500,
        address: {
            line1: 'हजरतगंज, जीपीओ के पास',
            line2: 'लखनऊ - 226001'
        }
    },
    {
        _id: 'doc14',
        name: 'डॉ. पूजा खन्ना',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'डॉ. खन्ना महिलाओं के प्रजनन स्वास्थ्य और कल्याण के लिए समर्पित हैं। वे प्राकृतिक उपचार और आधुनिक चिकित्सा पद्धतियों पर ध्यान देने के साथ दयालु देखभाल प्रदान करती हैं।',
        fees: 600,
        address: {
            line1: 'वसंत कुंज, सेक्टर सी',
            line2: 'नई दिल्ली - 110070'
        }
    },
    {
        _id: 'doc15',
        name: 'डॉ. रवि चंद्र',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'डॉ. चंद्र एक युवा और उत्साही त्वचा विशेषज्ञ हैं। वे प्राकृतिक त्वचा देखभाल उपचार पर ध्यान केंद्रित करते हैं और आधुनिक त्वचा विज्ञान को पारंपरिक आयुर्वेदिक उपचार के साथ जोड़ते हैं।',
        fees: 300,
        address: {
            line1: 'जुबली हिल्स, रोड नं. 36',
            line2: 'हैदराबाद - 500033'
        }
    },
]