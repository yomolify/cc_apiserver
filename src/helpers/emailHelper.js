var config = require('../../config.json')
var mailgun = require('mailgun-js')({apiKey: config.mailgun_api_key, domain: config.mailgun_domain});
module.exports = mailgun
