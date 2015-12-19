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
      "Practice": {
        "Name": "Coquitlam Centre Dental Clinic",
        "Address": "1244 - 2929 Barnet Highway",
        "Neighborhood": "Coquitlam Center",
        "City": "Coquitlam"
      }
    },
    {
      "FirstName": "Marica",
      "LastName": "Szeleczki",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "The Tooth Whisperer",
        "Address": "108 W. 2nd St",
        "Neighborhood": "North Vancouver",
        "City": "North Vancouver"
      }
    },
    {
      "FirstName": "Rod",
      "LastName": "Chow",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "Victoria Park Dental",
        "Address": "103-1111 Lonsdale Ave.",
        "Neighborhood": "North Vancouver",
        "City": "North Vancouver"
      }
    },
    {
      "FirstName": "Rob",
      "LastName": "Gardiner",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "Garibaldi Dental",
        "Address": "38133 Cleveland Ave",
        "Neighborhood": "Squamish",
        "City": "Squamish"
      }
    },
    {
      "FirstName": "Mary",
      "LastName": "Campbell",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "Fairmont Dentistry",
        "Address": "1008 - 750 West Broadway",
        "Neighborhood": "Van West",
        "City": "Vancouver"
      }
    },
    {
      "FirstName": "Alisa",
      "LastName": "Lange",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "Star Dental",
        "Address": "1215 - 750 W. Broadway",
        "Neighborhood": "Van West",
        "City": "Vancouver"
      }
    },
    {
      "FirstName": "Keith",
      "LastName": "Lim",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "Abba Dental ",
        "Address": "603 - 1160 Burrard St",
        "Neighborhood": "Vancouver Downtown",
        "City": "Vancouver"
      }
    },
    {
      "FirstName": "Parviz",
      "LastName": "Roshanzamir",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "Wall Center Dental",
        "Address": "1065 Hornby St",
        "Neighborhood": "Vancouver Downtown",
        "City": "Vancouver"
      }
    },
    {
      "FirstName": "R.",
      "LastName": "Chaudhry",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "Dental & Implant Clinic @ Lansdowne",
        "Address": "617 - 5300 No. 3 Rd.",
        "Neighborhood": "Richmond",
        "City": "Richmond"
      }
    },
    {
      "FirstName": "Bonbon",
      "LastName": "Hu",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "A Smile Dental",
        "Address": "4994A 48th Ave.",
        "Neighborhood": "Delta",
        "City": "Delta"
      }
    },
    {
      "FirstName": "Danial",
      "LastName": "Deheshi",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "Norburn Dental",
        "Address": "3976 E. Hastings St.",
        "Neighborhood": "Burnaby",
        "City": "Burnaby"
      }
    },
    {
      "FirstName": "Colin",
      "LastName": "Hughes",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "Creekside Dental Clinic",
        "Address": "#5 - 757 KLO Road",
        "Neighborhood": "Kelowna",
        "City": "Kelowna"
      }
    },
    {
      "FirstName": "Amir",
      "LastName": "Hughes",
      "Specialization": "Dentist",
      "Practice": {
        "Name": "Amir Dental Clinic",
        "Address": "567 Road",
        "Neighborhood": "Kelowna",
        "City": "Kelowna"
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
