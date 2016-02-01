var Practitioner = require('../src/models/practitionerModel')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cc_users');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var data = {
  "Practitioners": [
    {
      "FirstName": "Marica",
      "LastName": "Szeleczki",
      "Specialization": "Dental Hygienist",
      "PersonalStatement": "Marica Szeleczki, Registered Dental Hygienist, is the owner of ToothWhisperer Dental Hygiene. She graduated from Camosun College's dental hygiene program in Victoria in 2002.She has been practicing on the North Shore since graduating and has worked closely with some of the area's best periodontists and dentists. She believes that patients deserve the best dental care, and that's what her independent dental hygiene clinic can provide. Marica is also an accomplished artist where some of her art work are exhibiting around the practice.",
      "Education": "DMD",
      "Languages": ["English"],
      "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1453750076/Dr_Marica_mpujlt.jpg"],
      "Practice": {
        "Name": "Tooth Whisperer Hygiene Clinic",
        "Address": "108 2nd St. W, North Vancouver, BC, V7M 1C3",
        "Neighborhood": "North Vancouver",
        "City": "North Vancouver",
        "Slogan": "",
        "Description": "At ToothWhisperer Dental Hygiene Clinic, we are committed to providing the highest quality periodontal treatment. Here, we strive to prevent premature tooth loss by providing thorough preventative therapy, all in a relaxed and informative setting. We also offer flexible clinic hours, including evening and weekend appointments on request. We offer 10% off for seniors 65 and older.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry", "Prosthodontists", "Sedation Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
        "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/c_scale,h_1000/v1452688710/Toothwhisperer_-_Art_qz6jo6.jpg", "http://res.cloudinary.com/carecru/image/upload/c_scale,h_1000/v1452688715/Toothwhisperer_-_front_kvpoun.jpg", "http://res.cloudinary.com/carecru/image/upload/c_scale,h_1000/v1452688713/Toothwhisperer_-Lobby_psc6zt.jpg", "http://res.cloudinary.com/carecru/image/upload/c_scale,h_1000/v1452688716/Toothwhisperer_-Reception_fkciur.jpg", "http://res.cloudinary.com/carecru/image/upload/c_scale,h_1000/v1452688711/Toothwhisperer_-_cleaning_room-1_xrix2j.jpg", "http://res.cloudinary.com/carecru/image/upload/c_scale,h_1000/v1452688711/Toothwhisperer_-_cleaning_room-2_ojsjw4.jpg", "http://res.cloudinary.com/carecru/image/upload/c_scale,h_1000/v1452688711/Toothwhisperer_-_cleaning_room-3_meqko0.jpg", "http://res.cloudinary.com/carecru/image/upload/c_scale,h_1000/v1452688712/Toothwhisperer_-_cleaning_room-4_y3m7kq.jpg"],
        loc: [-123.07806900000003, 49.31302509999999]
      }
    },
    {
      "FirstName": "Keith",
      "LastName": "Lim",
      "Specialization": "Dentist",
      "PersonalStatement": "After graduating from the University of Oregon with a Bachelor of Science degree, Dr. Keith Lim earned his Doctor of Dental Medicine degree from the University of British Columbia in 1976. After earning his doctorate, Dr. Lim joined Dr. Hall as an associate of his general practice. Soon, Dr. Lim bought his own practice in Vancouver, and after a move to Burrard Street, he partnered with Dr. Azizi to form ABBA Dental. With a focus on continuing his education, Dr. Lim has studied everything from inlays to endodontics. He currently is a member of the Dr. Dick Tucker inlay and onlay study club. Dr. Lim is registered with the Canadian Dental Association and the College of Dental Surgeons.Before taking an interest in dentistry, Dr. Lim was known to many as a musical prodigy. Along with a continued love of music, he enjoys golfing and travel. He has even developed an acting career.",
      "Education": "DMD",
      "Languages": ["English"],
      "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688412/Dr_Lim_fsl4so.jpg"],
      "Practice": {
        "Name": "Abba Dental",
        "Address": "1160 Burrard Street, Suite 603, Vancouver, BC, V6Z 2E8",
        "Neighborhood": "Downtown Vancouver",
        "City": "Vancouver",
        "Slogan": "",
        "Description": "For over 35 years, ABBA Dental has served patients in the Vancouver area, providing family-friendly general dentistry. Our dentists in Vancouver, Dr. Keith Lim and Dr. Baha Azizi offer professional care that is personalized to each patient. Using up-to-date equipment and dentistry techniques, they are recognized by patients for their ability to provide a range of services, including restorative and cosmetic dental care. As something special for our patients, ABBA Dental has a massage chair in our office, which patients can enjoy before or after their appointment. Also, for patients who are unsettled by visits to the dentist, we can provide a mild sedative, which can be taken one hour before their appointment begins.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry", "Prosthodontists", "Sedation Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
        "ImageUrls": [],
        loc: [-123.12838490000001, 49.27925459999999]

      }
    },
        {
      "FirstName": "Baha",
      "LastName": "Azizi",
      "Specialization": "Dentist",
      "PersonalStatement": "In 1990, Dr. Baha Azizi graduated with a Doctor of Dental Medicine degree from the University of British Columbia. Prior to his education in dentistry, he received training in the Faculty of Pharmaceutical Sciences. With many continuing education courses, Dr. Azizi has stayed on top of recent developments in rotary endodontics, esthetic dentistry, implant prosthodontics and regenerative periodontal surgery. After receiving his dentistry degree, he gained valuable dental surgery training by completing a general practice residency at Vancouver General Hospital. Since 1990, Dr. Azizi has been registered with the College of Dental Surgeons. He currently is a member of a prosthodontic study club and a surgical implant study club as well as the Canadian Dental Association and the BC Dental Association.",
      "Education": "DMD",
      "Languages": ["English"],
      "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688412/Dr_Azizi_jroxjr.jpg"],
      "Practice": {
        "Name": "Abba Dental",
        "Address": "1160 Burrard Street, Suite 603, Vancouver, BC, V6Z 2E8",
        "Neighborhood": "Downtown Vancouver",
        "City": "Vancouver",
        "Slogan": "",
        "Description": "For over 35 years, ABBA Dental has served patients in the Vancouver area, providing family-friendly general dentistry. Our dentists in Vancouver, Dr. Keith Lim and Dr. Baha Azizi offer professional care that is personalized to each patient. Using up-to-date equipment and dentistry techniques, they are recognized by patients for their ability to provide a range of services, including restorative and cosmetic dental care. As something special for our patients, ABBA Dental has a massage chair in our office, which patients can enjoy before or after their appointment. Also, for patients who are unsettled by visits to the dentist, we can provide a mild sedative, which can be taken one hour before their appointment begins.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry", "Prosthodontists", "Sedation Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
        "ImageUrls": [],
        loc: [-123.12838490000001, 49.27925459999999]
      }
    },
    {
      "FirstName": "Ali",
      "LastName": "Mehio",
      "Specialization": "Dentist",
      "PersonalStatement": "Dr. Mehio is an accomplished cosmetic and general dentist. He takes great satisfaction in helping his clients open up and feel more confident – a reward of this profession that continually renews itself, patient after patient. Dr. Mehio graduated from the McGill University Faculty of Dentistry in 2002. He went on to complete a one year Advanced Education in General Dentistry Residency (AEGD) from the University of Michigan in Ann Arbor, Michigan. Since graduating, Dr. Mehio has completed hundreds of hours in continuing-education and hands-on courses. This instruction has come from recognized world leaders in aesthetic and cosmetic dentistry, dental implants, and bite related dentistry (including Carl Misch, Gerard Chiche & Jeff Morley). He is a graduate & Fellow of the Misch Implant Institute as well as Fellow of the International Congress of Oral Implantology (ICOI). In his spare time, Dr. Mehio enjoys discovering beautiful British Columbia through jogging, hiking and cycling. He also loves music, theatre, skiing, and enjoying fine food with his friends and family.",
      "Education": "",
      "Languages": ["English"],
      "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688417/Dr_Mehio_spzbc8.jpg"],
      "Practice": {
        "Name": "Aria Dental Studio",
        "Address": "203 - 1030 W. Georgia St. Vancouver, BC, V6E 2Y3",
        "Neighborhood": "Vancouver Downtown",
        "City": "Vancouver",
        "Slogan": "",
        "Description": "Crafting your healthiest, most radiant smile is both an exacting science and a high art. At Aria Dental Studio, we regard it as our calling. Located at the corner of Burrard and Georgia, Aria is committed to helping Vancouver smile more brightly, more often - and with perfect confidence. From routine oral maintenance to a complete revival of your smile, Aria Dental Studio offers a comprehensive suite of dental services that can be tailored to your unique personal needs. And we pride ourselves on the comfort, ease, and personal nature of the patient’s experience. All designed to give you more confidence, more youthfulness – and of course, a smile that changes everything.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
        "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688417/Aria_Dental_Entrance_rb2g0f.png", "http://res.cloudinary.com/carecru/image/upload/v1452688421/Aria_Dental_Reception_m5nxry.png", "http://res.cloudinary.com/carecru/image/upload/v1452688417/Aria_Dental_Lobby_neqmd5.png", "http://res.cloudinary.com/carecru/image/upload/v1452688422/Aria_Dental_ExamRoom_tg28vw.png"],
        loc: [-123.12173999999999, 49.284743]
      }
    },
    {
      "FirstName": "Parviz",
      "LastName": "Roshanzamir",
      "Specialization": "Dentist",
      "PersonalStatement": "Dr. Roshan has been in dental practice since 2003. He graduated with the highest academicand clinical achievement from the University of Jondishapour, one of the oldest medical and dental educational centres. He had proved his commitment to continued education and clinical excellence by advancing his skills and knowledge at the University of Toronto, Faculty of Dentistry. In 2012, he became the recipient of several academic and clinical excellence awards and became a member of Omicron Kappa Upsilon National Dental Honour Society. Dr. Roshan is a Fellow of the International Congress of Oral Implantologists and a member in good standing of College of Dental Surgeons of British Columbia, Canadian Dental Association, Academy of General Dentistry and American Academy of Cosmetic Dentistry. He has advanced training and certificate in cardiac life support and is licensed by the College of Dental Surgeons to provide IV conscious sedation. To be at the forefront of dental innovation and to provide his patients with the highest quality treatments, he was recently trained in Chao Pinhole Gum Rejuvenation™ and will be one of the pioneers of this revolutionary technique in Vancouver and Canada. Being a lifetime student, he is in the process of getting his Mastership in Laser Dentistry from the University of Aachen and his Fellowship status from the American Academy of Cosmetic Dentistry. Other areas of Dr. Roshan’s interest and training include Invisalign® (clear alternative to braces), CEREC® (one-appointment porcelain crown and restoration), neuromuscular dentistry and chronic facial pain management, smile rejuvenation and full mouth reconstruction. When his busy professional life permits, Dr. Roshan enjoys playing the guitar, reading, spending time with family and travelling.",
      "Education": "DDS",
      "Languages": ["English"],
      "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688729/Dr_Roshanzamir_m707jf.jpg"],
      "Practice": {
        "Name": "Wall Centre Dental",
        "Address": "1065 Hornby St, Vancouver, BC V6Z 2S5",
        "Neighborhood": "Vancouver Downtown",
        "City": "Vancouver",
        "Slogan": "",
        "Description": "We invite you to become a part of our practice and experience the difference. You will find quality care in our well-appointed office that provides comfort no matter which services you require. Whether you are in for a routine care visit or redesigning your smile with cutting-edge technology, it is our goal to help you have your best dental experience ever!",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
        "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688743/Wall_center_dental_-_front_suaghn.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/wall_center_dental_-_reception_f02z1w.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/Wall_center_dental_-_exam_room_l0kdyo.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/wall_center_dental_-_exam_room_2_rcelvt.jpg"],
        loc: [-123.12587610000003, 49.2801176]
      }
    },
     {
      "FirstName": "Baharnaz",
      "LastName": "Baharloo",
      "Specialization": "Dentist",
      "PersonalStatement": "Dr. Baharloo received her dental degree from the University of British Columbia. She previously completed her Bachelor of Science degree in Chemistry with published research in polymer chemistry.Dr. Baharloo is certified to administer inhalation and oral sedation and is a preferred Invisalign provider. She is a member in good standing with the BCDA and the Canadian Dental Association. Dr. Baharloo leads an active lifestyle and is particularly interested in yoga. She is actively involved in getting her yoga teaching certificate and more recently has been riding her road bike. She worked as a lifeguard and swim coach for 10 years prior to starting her career as a dentist. She loves to travel and enjoys experiencing the different cultures of the world!",
      "Education": "DMD",
      "Languages": ["English"],
      "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688729/Dr_Baharlo_glhj6c.jpg"],
      "Practice": {
        "Name": "Wall Centre Dental",
        "Address": "1065 Hornby St, Vancouver, BC V6Z 2S5",
        "Neighborhood": "Vancouver Downtown",
        "City": "Vancouver",
        "Slogan": "",
        "Description": "We invite you to become a part of our practice and experience the difference. You will find quality care in our well-appointed office that provides comfort no matter which services you require. Whether you are in for a routine care visit or redesigning your smile with cutting-edge technology, it is our goal to help you have your best dental experience ever!",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
        "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688743/Wall_center_dental_-_front_suaghn.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/wall_center_dental_-_reception_f02z1w.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/Wall_center_dental_-_exam_room_l0kdyo.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/wall_center_dental_-_exam_room_2_rcelvt.jpg"],
        loc: [-123.12587610000003, 49.2801176]
      }
    },
    {
      "FirstName": "Milton",
      "LastName": "Reskovich",
      "Specialization": "Dentist",
      "PersonalStatement": "Milton Reskovich, DMD Since graduating from Dental School in 1985, Dr. Reskovich has been at the forefront of dental innovation. After several years in general dentistry, he developed an interest and passion for cosmetic and implant dentistry. He is a Fellow of the ICOI and certified by the College of Dental Surgeons of BC to administer IV sedative drugs. Dr. Reskovich’s interests in modern dentistry have taken him to numerous continuing education and post-graduate studies all over the world. He is a member of the following respected organizations: American Academy of Cosmetic Dentistry, American Dental Society of Anesthesiology, Eco-Dentistry Association, Canadian Dental Association, British Columbia Dental Association. When time permits from his busy dental practice, Dr. Reskovich pursues his other passion - flying. He holds a commercial pilot licence (CPL) with an instrument rating (IFR). He has flown all over North America, including Mexico. Dr. Reskovich is also a kite boarder and cyclist. If there is any time left, he loves to read and cook!",
      "Education": "DMD",
      "Languages": ["English"],
      "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688729/Dr_Reskovich_cbsvqg.jpg"],
      "Practice": {
        "Name": "Wall Centre Dental",
        "Address": "1065 Hornby St, Vancouver, BC V6Z 2S5",
        "Neighborhood": "Vancouver Downtown",
        "City": "Vancouver",
        "Slogan": "",
        "Description": "We invite you to become a part of our practice and experience the difference. You will find quality care in our well-appointed office that provides comfort no matter which services you require. Whether you are in for a routine care visit or redesigning your smile with cutting-edge technology, it is our goal to help you have your best dental experience ever!",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
        "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688743/Wall_center_dental_-_front_suaghn.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/wall_center_dental_-_reception_f02z1w.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/Wall_center_dental_-_exam_room_l0kdyo.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/wall_center_dental_-_exam_room_2_rcelvt.jpg"],
        loc: [-123.12587610000003, 49.2801176]
      }
    },
    {
      "FirstName": "Gordon",
      "LastName": "Boyd",
      "Specialization": "Dentist",
      "PersonalStatement": "After graduating in 1970, Dr. Boyd worked in Darwin and Wimbledon in the U.K. After moving to Canada, he worked in Winnipeg, Kamloops and Quesnel before falling in love with Vancouver. Although Dr. Boyd enjoys a jokingly “cantankerous” reputation with his good friends, he is anything but in the office. His patients call him friendly, gentle and calm at their chair side. He is dedicated to providing patients with a positive experience. Although he considers himself an “old dude”, Dr. Boyd still loves to keep up with the advances in dentistry by attending cutting-edge seminars and conferences. Dr. Boyd has often said that he is a lucky man to be able to work in an ultra-modern facility like Wall Centre Dental with great people surrounding him. When not in the office, Dr. Boyd enjoys biking, reading and travelling.",
      "Education": "DDS",
      "Languages": ["English"],
      "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688729/Dr_Boyd_cnshxs.jpg"],
      "Practice": {
        "Name": "Wall Centre Dental",
        "Address": "1065 Hornby St, Vancouver, BC V6Z 2S5",
        "Neighborhood": "Vancouver Downtown",
        "City": "Vancouver",
        "Slogan": "",
        "Description": "We invite you to become a part of our practice and experience the difference. You will find quality care in our well-appointed office that provides comfort no matter which services you require. Whether you are in for a routine care visit or redesigning your smile with cutting-edge technology, it is our goal to help you have your best dental experience ever!",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
        "ImageUrls": ["http://res.cloudinary.com/carecru/image/upload/v1452688743/Wall_center_dental_-_front_suaghn.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/wall_center_dental_-_reception_f02z1w.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/Wall_center_dental_-_exam_room_l0kdyo.jpg", "http://res.cloudinary.com/carecru/image/upload/v1452688739/wall_center_dental_-_exam_room_2_rcelvt.jpg"],
        loc: [-123.12587610000003, 49.2801176]
      }
    },
  ]
}

db.once('open', function (callback) {
  data.Practitioners.forEach(function(prac) {
    new Practitioner(prac).save(function (err, model) {
      if (err) {
        return console.log(err)
      }

      console.log(model)
    })
  })
});
