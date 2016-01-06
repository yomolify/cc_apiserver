var Practitioner = require('../src/models/practitionerModel')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cc_users');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var data = {
  "Practitioners": [
    {
      "FirstName": "Angela",
      "LastName": "Lai",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English", "Mandarin"],
      "Practice": {
        "Name": "Coquitlam Centre Dental Clinic",
        "Address": "1244 - 2929 Barnet Highway",
        "Neighborhood": "Coquitlam Center",
        "City": "Coquitlam",
        "Slogan": "A better life starts with a beautiful smile.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry", "Prosthodontists", "Sedation Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Marica",
      "LastName": "Szeleczki",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English", "Polish"],
      "Practice": {
        "Name": "The Tooth Whisperer",
        "Address": "108 W. 2nd St",
        "Neighborhood": "North Vancouver",
        "City": "North Vancouver",
        "Slogan": "A leading visionary in dental care.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Rod",
      "LastName": "Chow",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English"],
      "Practice": {
        "Name": "Victoria Park Dental",
        "Address": "103-1111 Lonsdale Ave.",
        "Neighborhood": "North Vancouver",
        "City": "North Vancouver",
        "Slogan": "A perfect smile guaranteed.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Rob",
      "LastName": "Gardiner",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English"],
      "Practice": {
        "Name": "Garibaldi Dental",
        "Address": "38133 Cleveland Ave",
        "Neighborhood": "Squamish",
        "City": "Squamish",
        "Slogan": "Because you should want to go to your dentist.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Mary",
      "LastName": "Campbell",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English"],
      "Practice": {
        "Name": "Fairmont Dentistry",
        "Address": "1008 - 750 West Broadway",
        "Neighborhood": "Van West",
        "City": "Vancouver",
        "Slogan": "Caring for all your family’s dental needs.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Alisa",
      "LastName": "Lange",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English", "French"],
      "Practice": {
        "Name": "Star Dental",
        "Address": "1215 - 750 W. Broadway",
        "Neighborhood": "Van West",
        "City": "Vancouver",
        "Slogan": "Dental excellence. Compassionate care.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Keith",
      "LastName": "Lim",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English", "Cantonese", "Mandarin"],
      "Practice": {
        "Name": "Abba Dental ",
        "Address": "603 - 1160 Burrard St",
        "Neighborhood": "Vancouver Downtown",
        "City": "Vancouver",
        "Slogan": "Perfect smile, perfect you.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Parviz",
      "LastName": "Roshanzamir",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English"],
      "Practice": {
        "Name": "Wall Center Dental",
        "Address": "1065 Hornby St",
        "Neighborhood": "Vancouver Downtown",
        "City": "Vancouver",
        "Slogan": "Say it with a smile!",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "R.",
      "LastName": "Chaudhry",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English", "Punjabi"],
      "Practice": {
        "Name": "Dental & Implant Clinic @ Lansdowne",
        "Address": "617 - 5300 No. 3 Rd.",
        "Neighborhood": "Richmond",
        "City": "Richmond",
        "Slogan": "The dental professionals.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Bonbon",
      "LastName": "Hu",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English", "Mandarin"],
      "Practice": {
        "Name": "A Smile Dental",
        "Address": "4994A 48th Ave.",
        "Neighborhood": "Delta",
        "City": "Delta",
        "Slogan": "Your pathway to a bright new smile.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Danial",
      "LastName": "Deheshi",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["Let us take care of you and your smile."],
      "Practice": {
        "Name": "Norburn Dental",
        "Address": "3976 E. Hastings St.",
        "Neighborhood": "Burnaby",
        "City": "Burnaby",
        "Slogan": "",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Colin",
      "LastName": "Hughes",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English"],
      "Practice": {
        "Name": "Creekside Dental Clinic",
        "Address": "#5 - 757 KLO Road",
        "Neighborhood": "Kelowna",
        "City": "Kelowna",
        "Slogan": "Filling the gap in dentistry.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    },
    {
      "FirstName": "Amir",
      "LastName": "Hughes",
      "Specialization": "Dentist",
      "PersonalStatement": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Education": "DDS",
      "Languages": ["English"],
      "Practice": {
        "Name": "Amir Dental Clinic",
        "Address": "567 Road",
        "Neighborhood": "Kelowna",
        "City": "Kelowna",
        "Slogan": "Dental care for life.",
        "Description": "Lorem ipsum dolor sit amet, eam ea prompta albucius laboramus, ei suavitate consetetur cum. Te vim justo feugait pertinacia, cu meliore lobortis constituam qui.",
        "Services": ["Emergency Dentistry", "Cosmetic Dentistry"],
        "InsuranceProviders": ["Sunlife", "Aetna", "Great-West Life", "Desjardins"],
      }
    }
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
