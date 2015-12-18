var data = {
  "Practitioners": [
    {
      "id": "1",
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
      "id": "2",
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
      "id": "3",
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
      "id": "4",
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
      "id": "5",
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
      "id": "6",
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
      "id": "7",
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
      "id": "8",
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
      "id": "9",
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
      "id": "10",
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
      "id": "11",
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
      "id": "12",
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
      "id": "13",
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
  // "Time": "2015-11-16T13:47:51.264Z"
}


var Router = require('express')

var router = new Router

router.get('/', function (req, res) {
  data.Time = (new Date).toISOString()
  res.json(data)
})

module.exports = router

